import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useMainStyles } from "../Styles/HomeStyle";
import { useAuthStyles } from "./LoginStyles";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Biglogo from "../Utilities/Biglogo";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { OTPVerify, ResendOTP, SetOtpRemaingTime } from "../redux/reducers/auth";
import { showToast } from "../Utilities/Toast";
import LockScreen from "./LockScreen";
import CustomOTP from "./CustomOTP";

const ForgotOtp = () => {
  const location = useLocation()
  const { classes: mainClasses } = useMainStyles({ pathname: location.pathname });
  const { classes: authClasses } = useAuthStyles();
  const { loading, otpremaingtime } = useSelector((state: RootState) => state.auth)
  const [otp, setOtp] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(90);
  const [otpkey, setOTPKey] = useState('')
  const navigate = useNavigate();
  const pathname = location.pathname;
  const key = localStorage.getItem('key')
  useEffect(() => {
    const checkOTP = () => {
      const storedOTP = localStorage.getItem('otp')
      if (storedOTP !== null && storedOTP !== otpkey) {
        setOTPKey(storedOTP)
      }
    }

    checkOTP()
    window.addEventListener('storage', checkOTP)

    return () => {
      window.removeEventListener('storage', checkOTP)
    }
  }, [otpkey])
  const dispatch = useDispatch<AppDispatch>()
  const userEmail = localStorage.getItem('email') || ''

  // Function to resend OTP using your API
  const resendOTPToEmail = async () => {
    try {
      const data = {
        email: userEmail,
      }
      const response = await dispatch(ResendOTP({ data: data }))
      const fullfiled = response.payload
      if (fullfiled.status) {
        setOTPKey(fullfiled.OTP);
        localStorage.setItem('otp', fullfiled.OTP)
        showToast(true, fullfiled.data)
        return true;
      }
      else {
        if (fullfiled.message === 'Access temporarily blocked.') {
          const date = new Date();
          localStorage.setItem("lockDate", date.toString())
          dispatch(SetOtpRemaingTime(60))
        }
          showToast(false, fullfiled.message)    
        return false;
      }
    }
    catch (error) {
      showToast(false, 'something went wrong')
    }
  };



  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleVerify();
  };

  const handleVerify = async () => {
    try {
      const data = {
        email: localStorage.getItem('email') || 0,
        otp: otp
      }
      const response = await dispatch(OTPVerify({ data: data }))
      const fullfiled = response.payload
      if (fullfiled.status) {
        switch (key) {
          case 'forgetkey': {
            setTimeout(() => {
              navigate('/resetpassword')
            }, 200)
            localStorage.removeItem('otp')
            break;
          }
          case 'signupkey': {
            localStorage.removeItem('otp')
            localStorage.removeItem('key')
            localStorage.removeItem('email')
            setTimeout(() => {
              navigate('/login')
            }, 200)
            break;
          }
          default: {
            break;
          }
        }
        showToast(true, fullfiled.data)
      }
      else {
        if (fullfiled.message === 'Access temporarily blocked.') {
          const date = new Date();
          localStorage.setItem("lockDate", date.toString())
          dispatch(SetOtpRemaingTime(60))
        }    
          showToast(false, fullfiled.message)
      }
    }
    catch (error) {
      showToast(false, 'something went wrong')
    }
  };
  const handleResendOTP = async () => {
     if(pathname==="/otpverify" || pathname==="/otpverify/"){
      const otpSent= await resendOTPToEmail();
      if (otpSent) {
        setTimeLeft(90);
        setError(null);
        setOtp('');
      }
     }
  
  };



  return (
    <Box className={mainClasses.homeStyleContainer}>

      <Box sx={{ mt: 2 }}>
        <Biglogo />
      </Box>
      <Typography color="#156082" fontWeight="800" fontSize="20px">
        WELCOME BACK TO LiFi
      </Typography>

      <Box className={authClasses.authWrapper}>
        {/* <Box sx={{display:'flex',justifyContent:'center'}}>{"For testing Purpose use this OTP:"+ otpkey || ''}</Box> */}
        <Typography className={authClasses.unLockNext}>
          {key !== 'forgetkey' ? "Unlock Your Next Step!" : "Forgot Password"}
        </Typography>
        {otpremaingtime === 0 && <Typography component="span" className={authClasses.unLockNextdesc}>
          {key !== 'forgetkey' ? `Enter the verification code sent to ${userEmail}. Your account will be created after successful verification.`
            : `Enter the code sent to ${userEmail}`}
        </Typography>}
        <Box sx={{ marginTop: otpremaingtime > 0 ? 2 : 0 }}>
          <LockScreen text="OTP" />
        </Box>

        <form >

          {/* <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props: React.InputHTMLAttributes<HTMLInputElement>) => (
              <input
                {...props}
                style={{
                  ...props.style,
                  border: `1px solid ${error ? '#d32f2f' : '#156082'}`,
                  background: '#F9FAFB'
                }}
                onFocus={(e) => {
                  e.target.style.outline = "none";
                  e.target.style.border = "2px solid #156082";
                }}
                onBlur={(e) => {
                  e.target.style.border = `1px solid ${error ? "#d32f2f" : "#156082"}`;
                }}

              />
            )}
            inputStyle={{
              width: '50px',
              height: '50px',
              margin: '5px',
              borderRadius: '13px',
              fontSize: '20px',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
              border: 'none',
            }}
            containerStyle={{ justifyContent: 'center' }}
            inputType="tel"
          /> */}

        <CustomOTP value={otp} valueLength={4} onChange={setOtp} error={error}/>

          {otpremaingtime === 0 && <Typography className={authClasses.notReceivecode}>
            Didn't receive the code?
          </Typography>}

          {otpremaingtime === 0 && <Box className={authClasses.OtpnumberBox}>

            <Typography
              color={timeLeft >= 10 ? 'gray' : timeLeft <= 10 ? 'error' : '#156082'}
              fontSize="14px"
              className={authClasses.otpNumberText}
            >

              {timeLeft > 0
                ? ` ${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
                  .toString()
                  .padStart(2, '0')}`
                : 'Time expired!'}

              {timeLeft===0&&<Button
                onClick={handleResendOTP}
                disabled={timeLeft > 0 || loading}
                sx={{
                  textTransform: "capitalize",
                  marginRight: "10px",
                  color: timeLeft === 0 ? "#156082" : "gray",
                  opacity: 1,
                }}
              >
                {loading && pathname === "/otpverify" ? "Resend..." : "Resend"}
              </Button>}
            </Typography>
          </Box>}



          {error && (
            <Typography color="error" fontSize="12px" sx={{ mt: 1, textAlign: 'center' }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            disabled={otp.length !== 4 || otpremaingtime > 0}
            className={authClasses.otpVerifybutton}
          >
            {loading ? 'loading...' : 'Verify'}

          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default ForgotOtp
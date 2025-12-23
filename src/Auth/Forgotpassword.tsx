import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useMainStyles } from "../Styles/HomeStyle";
import { useAuthStyles } from "./LoginStyles";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useNavigate } from "react-router-dom";
import Biglogo from "../Utilities/Biglogo";
import { useState } from "react";
import { validateEmail } from "../Utilities/validations";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { ResendOTP, SetForgetPasswordRemaingTime } from "../redux/reducers/auth";
import { showToast } from "../Utilities/Toast";
import LockScreen from "./LockScreen";

const ForgotPassword = () => {
  const { classes: mainClasses } = useMainStyles({ pathname: location.pathname });
  const { classes: authClasses } = useAuthStyles();
  const navigate = useNavigate();
  const [forgotemail, setforgotEmail] = useState("");
  const [emailError, setEmailerror] = useState("");
  const dispatch = useDispatch<AppDispatch>()
  const FormValid = emailError === '' && forgotemail !== '';
  const { loading, forgetpasswordremainingtime } = useSelector((state: RootState) => state.auth)
  const forgotpasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setforgotEmail(e.target.value);
    const result = validateEmail(e.target.value);
    setEmailerror(result);
  };

  const forgotsubmtHandler = async () => {
    try {
      const data = {
        email: forgotemail
      }
      const response = await dispatch(ResendOTP({ data: data }))
      const fullfiled = response.payload
      if (fullfiled.status) {
        setTimeout(() => {
          localStorage.setItem('email', forgotemail)
          localStorage.setItem('key', 'forgetkey')
          navigate('/otpverify/')
        }, 1500)
        setforgotEmail('')
        showToast(true, fullfiled.data)
      }
      else {
        if (fullfiled.message === 'Access temporarily blocked.') {
          const date = new Date();
          localStorage.setItem("lockDate", date.toString())
          dispatch(SetForgetPasswordRemaingTime(60))
        }
      
          showToast(false, fullfiled.message)
        
      }
    }
    catch (error) {
      showToast(false, 'Something went wrong')
    }


  };

  return (
    <Box className={mainClasses.homeStyleContainer} sx={{height:{xs:'90vh',lg:'fit-content'}}}  >
      <Box sx={{ mt: 2 }}>
        <Biglogo />
      </Box>
      <Typography color="#156082" fontWeight="800" fontSize="20px">
        WELCOME BACK TO LiFi
      </Typography>

      <Box className={authClasses.authWrapper}>
        <Box className={authClasses.forgetPasswordBox}>
          <Typography className={authClasses.forgetPassword}>
            Forgot Password
          </Typography>
          <Typography component="span" className={authClasses.forgotspan}>
            We’ll Send the code to this email
          </Typography>
        </Box>
        {/* ForgotPassword*/}
        <Box className={authClasses.formFiledWrapper}>
          <Box sx={{ marginTop: forgetpasswordremainingtime > 0 ? 2 : 0 }}>
            <LockScreen text="Forgot Password" />
          </Box>
          <FormControl fullWidth>
            <TextField
              placeholder="Email Id"
              className={authClasses.inputFileds}
              onChange={forgotpasswordHandler}
              value={forgotemail}
              type="Email"
              size="medium"
              error={!!emailError}
              helperText={emailError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start">
                      <MailOutlineIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Box className={authClasses.forgotGetOtp}>
            <Button
              variant="contained"
              fullWidth
              className={authClasses.loginButton}
              disabled={!FormValid || forgetpasswordremainingtime>0}
              onClick={forgotsubmtHandler}
            >
              {loading ? 'loading....' : 'GET OTP'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;

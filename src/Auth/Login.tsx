import { Box, Button, Checkbox, Divider, IconButton, Typography } from "@mui/material";
import { useMainStyles } from "../Styles/HomeStyle";
import { useAuthStyles } from "../Auth/LoginStyles";
import FacebookLogin from "../assets/facebook_login.png";
import GoogleLogin from "../assets/google_login.png";
import { useLocation, useNavigate } from "react-router-dom";
import theme from "../Styles/theme";
import Biglogo from "../Utilities/Biglogo";
import EmailInput from "../Utilities/EmailInput";
import PasswordInput from "../Utilities/PasswordInput";
import NameInput from "../Utilities/NameInput";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { FireBaseSignUp, Login123, setCoinsSteps, SetLoginRemaingTime, setToken, SignUp, SignUpData } from "../redux/reducers/auth";
import { showToast } from "../Utilities/Toast";
import CircularLoader from "../Utilities/CircularLoader";
import { auth } from '../firebase/firebaseconfig';
import { useGoogleLogin } from "@react-oauth/google";
import { FacebookAuthProvider,  signInWithPopup } from "firebase/auth";
import LockScreen from "./LockScreen";
const Login = () => {
  const location = useLocation();

  const { classes: mainClasses } = useMainStyles({ pathname: location.pathname });
  const { classes: authClasses } = useAuthStyles();
  const { loading, signup, loginremainingtime } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const path = location.pathname;
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
  const [nameError, setnameError] = useState("");
  const [emailError, setEmailerror] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const FormValid =
    path == "/signup"
      ? nameError === "" &&
      emailError === "" &&
      passwordError === "" &&
      name !== "" &&
      acceptedTerms &&
      email !== "" &&
      pword !== ""
      : emailError === "" &&
      passwordError === "" &&
      email !== "" &&
      pword !== "";

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const emailChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    setPword(e.target.value);
  };

  useEffect(() => {
    if (signup) {
      setName(signup.name);
      setEmail(signup.email);
      setPword(signup.password);
    }
    else {
      setName("");
      setEmail("");
      setPword("");
      setnameError("");
      setEmailerror("");
      setPasswordError("")
    }
  }, [path]);


  const handleSubmit = async () => {
    switch (path) {
      case "/login": {

        const data = {
          email: email,
          password: pword,
        };

        const response = await dispatch(Login123({ data: data }));
        const fullfiled = response.payload;

        if (fullfiled.status) {
          dispatch(setToken(fullfiled.accesstoken))
          localStorage.removeItem('otp')
          localStorage.removeItem('key')
          localStorage.removeItem('email')
          localStorage.removeItem('stepper')
          localStorage.setItem('token', fullfiled.accesstoken)
          localStorage.setItem('IsNotify', JSON.stringify(fullfiled?.IsNotify ?? false));
          localStorage.setItem('step', '1')

          dispatch(setCoinsSteps(1))
          localStorage.setItem('isReferred', fullfiled?.isReferred ?? 'false');

          const Navigate = fullfiled?.isReferred ? "/" : "/referalid"
          setTimeout(() => {

            navigate(Navigate);
          }, 200);

        } else {
          if (fullfiled.message === 'Access temporarily blocked.') {
            const date = new Date();
            localStorage.setItem("lockDate", date.toString())
            dispatch(SetLoginRemaingTime(60))

          }
        
            showToast(false, fullfiled.message);
          

        }
        break;
      }

      case "/signup": {
        const data = {
          name: name,
          email: email,
          password: pword,
        };
        const response = await dispatch(SignUp({ data: data }));
        const fullfiled = response.payload;

        if (fullfiled.status) {
          localStorage.setItem("email", email);
          localStorage.setItem("otp", fullfiled?.OTP);
          localStorage.removeItem('stepper')
          setTimeout(() => {
            localStorage.setItem('key', 'signupkey')
            navigate('/otpverify');
          }, 500);
          setName("");
          setEmail("");
          setPword("");
          // showToast(true, fullfiled.message);
        } else {
          showToast(false, fullfiled.message);

        }
        break;
      }

      default: {
        showToast(false, "Unknown error");
        break;
      }
    }
  };



  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const user = await res.json();

        const data = {
          email: user?.email,
          name: user?.name,
          password: user?.sub + user?.email + user?.name + "lifi",

        }
        const response = await dispatch(FireBaseSignUp({ data: data }))
        const fullfiled = response.payload
        if (fullfiled.status) {
          dispatch(setToken(fullfiled.accesstoken))
          localStorage.setItem('token', fullfiled.accesstoken)
          localStorage.setItem('IsNotify', JSON.stringify(fullfiled?.IsNotify ?? false));
          localStorage.setItem('step', '1')
          localStorage.removeItem('stepper')
          dispatch(setCoinsSteps(1))
          localStorage.setItem('isReferred', fullfiled?.isReferred ?? 'false');
          if (fullfiled?.emoji) {
            localStorage.setItem('emoji', fullfiled?.emoji)
          }
          const Navigate = fullfiled?.isReferred ? "/" : "/referalid"
          // await dispatch(Profile()),
          setTimeout(() => {
            navigate(Navigate);
          }, 200);
          // showToast(true, fullfiled.message);
        }
        else {
          showToast(false, "Too many login attempts. Please try again after 1 minute.");

        }
      } catch (err) {

      } finally {

      }
    },
    onError: (err) => {
      const errorMessage = err.error_description || "An unknown error occurred";
      showToast(false, errorMessage);
    },
  });
  const isFormDirty = () => {
    return name !== "" || email !== "" || pword !== "";
  };
  const handleAuth = (t: string) => {
    if (isFormDirty()) {
      showToast(false, "Please submit or clear the form before switching.");
      return; 
    }
    setnameError("");
    setEmailerror("");
    setPasswordError("");
    dispatch(SignUpData({ email: '', name: '', password: '' }));
    if (t === 'SignUp') {
      navigate("/signup")
    }
    if (t === 'SignIn') {
      dispatch(SignUpData({ email: '', name: '', password: '' }))
      navigate("/login")
    }
  }

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const data = {
        email: result?.user?.email,
        name: result?.user?.displayName,
        password: result?.user?.uid + result?.user?.email + result?.user?.displayName + "lifi",
      }
      const response = await dispatch(FireBaseSignUp({ data: data }))

      const fullfiled = response.payload
      if (fullfiled.status) {
        localStorage.setItem('f_auth', 'f_auth')
        localStorage.setItem('token', fullfiled.accesstoken)
        localStorage.setItem('step', '1')
        localStorage.removeItem('stepper')
        dispatch(setCoinsSteps(1))
        localStorage.setItem('isReferred', fullfiled?.isReferred ?? 'false');
        if (fullfiled?.emoji) {
          localStorage.setItem('emoji', fullfiled?.emoji)
        }
        const Navigate = fullfiled?.isReferred ? "/" : "/referalid"
        setTimeout(() => {
          navigate(Navigate);
        }, 200);
        // showToast(true, fullfiled.message);
      }
      else {
        showToast(false, fullfiled.message);

      }
      return result;
    } catch (error:any) {
      showToast(false, "Account already exists with a different provider.");
    }
  };
  const handleStoreSignUp = () => {
    const data = {
      name: name,
      email: email,
      password: pword,
    };
    dispatch(SignUpData(data))
  }

  return (

    <Box className={mainClasses.homeStyleContainer}>

      {loading && <CircularLoader />}
      <Box mt={2}>
        <Biglogo />
      </Box>
      <Typography color="#156082" fontWeight="800" fontSize="20px">
        Welcome Back to LiFi
      </Typography>

      <Box className={authClasses.authWrapper}>
        <Box className={authClasses.authRoots}>
          <Typography
            className={authClasses.SignIn}
            onClick={() => handleAuth('SignIn')}
            sx={{
              color:
                path === "/login"
                  ? theme.customStyles.backgrounds.footer
                  : "#333333",
              borderBottom: path === "/login" ? "2px solid #156082" : "#333333",
            }}
          >
            Sign In
          </Typography>

          <Typography
            className={authClasses.SignUp}
            onClick={() => handleAuth('SignUp')}
            sx={{
              color:
                path === "/signup"
                  ? theme.customStyles.backgrounds.footer
                  : "#333333",
              borderBottom:
                path === "/signup" ? "2px solid #156082" : "#333333",
            }}
          >
            Sign Up
          </Typography>
        </Box>

        <Box className={authClasses.formFiledWrapper}>
          {path === "/signup" && (
            <NameInput
              value={name}
              onChange={nameChangeHandler}
              onErrorChange={setnameError}
              nameError={nameError}
            />
          )}

          {/* <LockScreen text="sign-in" /> */}

          {path === "/login" && <LockScreen text="sign-in" />}

          <EmailInput
            value={email}
            onChange={emailChangehandler}
            onErrorChange={setEmailerror}
            emailError={emailError}
          />
          <PasswordInput
            value={pword}

            onChange={passwordChangeHandler}
            onErrorChange={setPasswordError}
            passwordError={passwordError}
          />
        </Box>

        {path === "/login" && (
          <Box sx={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
          <Button
            sx={{textTransform:'capitalize',width:'fit-content'}}
            disabled={loginremainingtime > 0 }
            className={authClasses.forgotPasswordbox}
            onClick={() => navigate("/forgotpassword")}
          >
            <Typography color="#156082">Forgot Password?</Typography>
          </Button>
          </Box>
        )}

        <Box className={authClasses.dividerBox}>
          <Divider textAlign="center">OR</Divider>
        </Box>

        <Box display="flex" gap={4} justifyContent="center">
          <IconButton onClick={signInWithFacebook} disabled={loginremainingtime > 0 } >
            <img
              src={FacebookLogin}
              alt={`${path === "/signup" ? "Sign up" : "Login"} with Facebook`}
              width="34px"
              height="34px"
              style={{
                opacity: loading ? 0.6 : 1,
              }}
            />
          </IconButton>


          <IconButton disabled={loginremainingtime > 0 } onClick={() => login()}>
            <img
              src={GoogleLogin}
              width="30px"
              height="30px"
              alt={`${path === "/signup" ? "Sign up" : "Login"} with Google`}
              style={{
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
              }}
            />
          </IconButton>
        </Box>
        {path === "/signup" && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox sx={{
              '&.Mui-checked': {
                color: ' #156082'
              },
            }}

              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <Typography sx={{ fontSize: "15px" }}>Agree to our{" "}
              <span style={{ textDecoration: "underline", color: "#156082", cursor: "pointer" }} onClick={() => {

                navigate('/terms-and-conditions'), handleStoreSignUp()
              }}>
                Terms and Conditions
              </span>{" "}
              and{" "}
              <span style={{ textDecoration: "underline", color: "#156082", cursor: "pointer" }} onClick={() => { navigate('/privacy-policy'), handleStoreSignUp() }}>
                Privacy Policy
              </span>
            </Typography>
          </Box>
        )}
        <Box>
          <Button
            variant="contained"
            fullWidth
            className={authClasses.loginButton}
            onClick={handleSubmit}
            disabled={loading || loginremainingtime > 0 || !FormValid}
            style={{
              textTransform: path === "/signup" ? "capitalize" : "uppercase",
            }}
          >
            {loading
              ? path === "/login"
                ? "Signing In..."
                : "Sending OTP..."
              : path === "/login"
                ? "Login"
                : "Sign up"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

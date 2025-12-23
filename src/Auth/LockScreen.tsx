import { Fragment, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  SetForgetPasswordRemaingTime,
  SetOtpRemaingTime,
  SetLoginRemaingTime,
} from "../redux/reducers/auth";
import { useAuthStyles } from "./LoginStyles";
import type { RootState } from "../redux/store/store";
import { useLocation } from "react-router-dom";

export default function LockScreen({ text }: { text: string }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const { classes: authClasses } = useAuthStyles();


  const remainingTime = useSelector((state: RootState) => {
    if (pathname === "/login") return state.auth.loginremainingtime;
    if (pathname === "/forgotpassword") return state.auth.forgetpasswordremainingtime;
    if (pathname === "/otpverify") return state.auth.otpremaingtime;
    return 0;
  });

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const lockDate = localStorage.getItem("lockDate");
    if (!lockDate) return;
  
    let reducerFunc: any;
  
    if (pathname === "/login") reducerFunc = SetLoginRemaingTime;
    else if (pathname === "/forgotpassword") reducerFunc = SetForgetPasswordRemaingTime;
    else if (pathname === "/otpverify") reducerFunc = SetOtpRemaingTime;
    else return;
  
    const diff = (Date.now() - new Date(lockDate).getTime()) / 1000;
    const remaining = Math.max(0, 60 - Math.floor(diff));
  
    dispatch(reducerFunc(remaining)); 
  
    const timer = setInterval(() => {
      if (remainingTime <= 1) {
        clearInterval(timer);
        localStorage.removeItem("lockDate");
        dispatch(reducerFunc(0));
      } else {
        dispatch(reducerFunc(remainingTime - 1));
      }
    }, 1000);
  
    return () => clearInterval(timer);
  }, [pathname, dispatch, remainingTime]);
  

  return (
    <Fragment>
      {remainingTime > 0 && (
        <Box className={authClasses.lockscreentextcontainer}>
          <Typography className={authClasses.lockscreentext_t1}>
            Too many failed attempts!
          </Typography>
          <Typography className={authClasses.lockscreentext_t2} sx={{ fontSize: { xs: 14 } }}>
            {`For your security, ${text} is paused. Try again in ${formatTime(
              remainingTime
            )}`}
          </Typography>
        </Box>
      )}
    </Fragment>
  );
}

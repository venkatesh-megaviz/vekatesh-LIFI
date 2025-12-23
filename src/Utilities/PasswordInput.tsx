import {
  FormControl,
  IconButton,
  TextField,
} from "@mui/material";
import { useAuthStyles } from "../Auth/LoginStyles";
import InputAdornment from "@mui/material/InputAdornment";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EyeOpen from '../assets/eye_open.png'
import EyeClose from '../assets/eye-off.png'
import { useState } from "react";
import { validatePassword } from "./validations";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { setOpen, setOpen1 } from "../redux/reducers/auth";
import { useLocation } from "react-router-dom";

type Iprops={
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  onErrorChange:(error:string)=>void;
  passwordError:any;
  value:string;
}

const PasswordInput = ({onChange,passwordError,value,onErrorChange}:Iprops) => {
const {open,open1}=useSelector((state:RootState)=>state.auth)
const dispatch=useDispatch<AppDispatch>()
const [loginPasswordType, setLoginPasswordType] = useState("password");
const [signupPasswordType, setSignupPasswordType] = useState("password");
const location=useLocation()

const onPasswordHandle=(e:React.ChangeEvent<HTMLInputElement>)=>{
  const passwordInput = e.target.value;
  onChange(e);
  const result = validatePassword(passwordInput);
  onErrorChange(result)
}

const passwordHandle = () => {
  switch (location.pathname) {
    case "/login":
      if (!open) {
        dispatch(setOpen(true));
        setLoginPasswordType("text");
      } else {
        dispatch(setOpen(false));
        setLoginPasswordType("password");
      }
      break;

    case "/signup":
      if (!open1) {
        dispatch(setOpen1(true));
        setSignupPasswordType("text");
      } else {
        dispatch(setOpen1(false));
        setSignupPasswordType("password");
      }
      break;

    default:
      break;
  }
};
const { classes: authClasses } = useAuthStyles();
    return (
    <FormControl>
            <TextField
              placeholder="Password"
              size="medium"
              onChange={onPasswordHandle}
              value={value}
              error={!!passwordError}
              helperText={passwordError}
              type={location.pathname==='/login'?loginPasswordType:location.pathname === "/signup"?signupPasswordType:'password'}
              className={authClasses.inputFileds}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" >
                    <IconButton edge="start" sx={{ color: "#156082" }}>
                      {!open ? <LockOutlineIcon  onClick={passwordHandle}/>:
                      <LockOpenIcon onClick ={passwordHandle}/>}  
                     
                    </IconButton>
                 </InputAdornment>
                ),
               endAdornment:(
                <InputAdornment position="end" >
                    <IconButton edge="end" sx={{ color: "#F9FAFB" }} onClick={passwordHandle}>
                    {location.pathname==='/login' ?
                     <img src={!open?EyeClose:EyeOpen} width="20px" height="20px" alt='eyeopenclose'/>:
                     location.pathname==='/signup' &&<img src={!open1?EyeClose:EyeOpen} width="20px" height="20px"alt='eyeopenclose'/>}
                    </IconButton>
                 </InputAdornment>
               ),
                
            }}
            />
          </FormControl>
  )
}

export default PasswordInput

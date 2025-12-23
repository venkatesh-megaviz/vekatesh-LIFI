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
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EyeOpen from '../assets/eye_open.png'
import EyeClose from '../assets/eye-off.png'
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import Biglogo from "../Utilities/Biglogo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { ChangePassword } from "../redux/reducers/auth";
import { showToast } from "../Utilities/Toast";
import CircularLoader from "../Utilities/CircularLoader";

const Resetpassword = () => {
 const {loading}=useSelector((state:RootState)=>state.auth)
  const { classes: mainClasses } = useMainStyles({pathname:location.pathname});
  const { classes: authClasses } = useAuthStyles();

const navigate=useNavigate() 
 
const [open,setOpen]=useState(false)
const[passwordtype,setPasswordtype]=useState("password")

const[confirmopen,setConfirmopen]=useState(false)
const[confirmPasswordtype,setConfirmPasswordtype]=useState("password")



const [createpwdError, setCreatepwdError] = useState("");
const [confirmpwdError, setConfirmpwdError] = useState("");
const [commonerror, setCommonerror] = useState("");

//password values
const [createpwd,setCreatePwd]=useState("")
const [confirmPwd,setconfirmPwd]=useState("")
const dispatch=useDispatch<AppDispatch>()

 


const getPasswordError = (value: string): string => {
  if (value.length < 7) return "";
  
  if (value.length < 8) return "At least 8 characters required";
  if (!/[A-Z]/.test(value)) return "At least one uppercase letter required";
  if (!/[a-z]/.test(value)) return "At least one lowercase letter required";
  if (!/[0-9]/.test(value)) return "At least one number required";
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value))
    return "At least one special character required";

  
  return ""; 
};


const passwordHandle=()=>{
 if(open===false){
  setOpen(true)
  setPasswordtype("text")
 }
 else{
  setOpen(false)
  setPasswordtype("password")
 }

}

const confirmpasswordHandle=()=>{
  if(confirmopen===false){
  setConfirmopen(true)
  setConfirmPasswordtype("text")
  }
  else{
  setConfirmopen(false)
  setConfirmPasswordtype("password")
  }    
}


const createPasswordhandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    setCreatePwd(value);
const error = getPasswordError(value);
  setCreatepwdError(error);

    if (confirmPwd && value !== confirmPwd) {
    setConfirmpwdError("Passwords do not match.");
  } else {
    setConfirmpwdError("");
  }
};
const confirmPasswordhandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    setconfirmPwd(value);

    if (!value.trim()) {
     setConfirmpwdError("Confirm password required");
    } else if (createpwd && value !== createpwd) {
    setConfirmpwdError("Passwords do not match.");
  } else {
    setConfirmpwdError("");
  }
};

const validateForm = () => {
  let isValid = true;

  
  const error = getPasswordError(createpwd);
if (error) {
  setCreatepwdError(error);
  isValid = false;
}

  if (!confirmPwd.trim()) {
    setConfirmpwdError("Confirm password required");
    isValid = false;
  } else if (confirmPwd !== createpwd) {
    setConfirmpwdError("Passwords do not match.");
    isValid = false;
  }

  return isValid;
};


//submithandling
const resetpasswordSubmitHandler=async()=>{
  
  setCommonerror("");
  if (!validateForm()) 
    return;
  const data={
    email:localStorage.getItem('email') || 0,
    createpassword:createpwd,
    confirmpassword:confirmPwd
  }
  const response=await dispatch(ChangePassword({data:data}))
  const fullfiled=response.payload
  if(fullfiled.status){
    showToast(true,fullfiled.message)
    localStorage.removeItem('email')
    localStorage.removeItem('key')
    setTimeout(()=>{
      navigate('/login')
    },200)
  }
  else{
    showToast(false,fullfiled.message)
  }
}
const FormValid=createpwd!=="" && confirmPwd!=="" && confirmpwdError==="" && createpwdError===""
  return (
    <Box className={mainClasses.homeStyleContainer} sx={{height:{xs:'90vh',lg:'fit-content'}}} >
      {loading&&<CircularLoader/>}
        <Box>
        <Biglogo />
       </Box>
      <Typography color="#156082" fontWeight="800" fontSize="20px">
        WELCOME BACK TO LiFi
      </Typography>

      <Box className={authClasses.authWrapper}>

        <Typography className={authClasses.unLockNext}>Reset Your Password</Typography>
        <Typography component="span" className={authClasses.unLockNextdesc}>Enter a strong new password to secure your account</Typography>

            {/* create password */}
            <Box className={authClasses.formFiledWrapper}>
                  <FormControl>
            <TextField
              placeholder="Create Password"
              size="medium"
              value={createpwd}
              error={!!createpwdError}
              helperText={createpwdError}
              onChange={createPasswordhandler}
              type={passwordtype}
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
                    <IconButton edge="end" sx={{ color: "#F9FAFB" }} >
                      {!open ?<img src={EyeClose} width="20px" height="20px" onClick={passwordHandle} alt='eyeclose'/>:
                      <img src={EyeOpen} width="20px" height="20px"  onClick ={passwordHandle} alt='eyeclose'/>}  
                    </IconButton>
                 </InputAdornment>
               ),
                
            }}
            />
          </FormControl>

                      {/* confirm password */}
                       <FormControl>
                          <TextField
                            placeholder="Confirm Password"
                            size="medium"
                            value={confirmPwd}
                            error={!!confirmpwdError}
                            helperText={confirmpwdError}
                            onChange={confirmPasswordhandler}
                            type={confirmPasswordtype}
                            className={authClasses.inputFileds}
                         
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start" >
                                  <IconButton edge="start" sx={{ color: "#156082" }}>
                                    {!confirmopen ? <LockOutlineIcon  onClick={confirmpasswordHandle}/>:
                                    <LockOpenIcon onClick ={confirmpasswordHandle}/>}  
                                   
                                  </IconButton>
                               </InputAdornment>
                              ),
                             endAdornment:(
                              <InputAdornment position="end" >
                                  <IconButton edge="end" sx={{ color: "#F9FAFB" }} >
                                    {!confirmopen ?<img src={EyeClose} width="20px" height="20px" onClick={confirmpasswordHandle} alt='eyeclose'/>:
                                    <img src={EyeOpen} width="20px" height="20px"  onClick ={confirmpasswordHandle} alt='eyeclose'/>}  
                                  </IconButton>
                               </InputAdornment>
                             ),
                              
                          }}
                          />
                        </FormControl>
                    </Box>
                     {commonerror&&<Typography color="error" fontSize="0.75rem">{commonerror}</Typography>}
             <Button variant="contained" fullWidth className={authClasses.resetConfirmbutton}
             disabled={loading || !FormValid}
             onClick={resetpasswordSubmitHandler}>
              {loading?'confirm...':'confirm'}            
             </Button>

      </Box>
    </Box>
  )
}

export default Resetpassword
import { Box, Button, InputBase, Typography } from "@mui/material";
import { useMainStyles } from "../Styles/HomeStyle";
import NotifyIcon from '../assets/notify_icon.png'
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { BeforeLoginNotifyEmail, NotifyEmail, setIsNotify } from "../redux/reducers/auth";
import { showToast } from "./Toast";
import { setStep } from "../redux/reducers/stepper";
import { validateEmail } from "./validations";
import CircularLoader from "./CircularLoader";



const NotifymeEmail = () => {
  const token = localStorage.getItem("token") ?? ''
  const { step } = useSelector((state: RootState) => state.StepperState)

  const isNotify = localStorage.getItem('IsNotify')
  const [errorMessage,setErrorMessage]=useState('')
  const { classes } = useMainStyles({ pathname: location.pathname })
  const {loading}=useSelector((state:RootState)=>state.auth)
  //notifymeinput taken function
  const [emailInputnotify, setemailInputnotify] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  const notifyMetakenemail = (event: any) => {
    const result=validateEmail(event.target.value)
    setErrorMessage(result)
    setemailInputnotify(event.target.value)

  }
  const handleNotify = async () => {
    const data = {
      email: emailInputnotify
    }
    let response: any
    if (!token) {
      response = await dispatch(BeforeLoginNotifyEmail({ data: data }))
    }
    else {
      response = await dispatch(NotifyEmail({ data: data }))
    }
    const fullfiled = response.payload
    if (fullfiled.status) {
      setemailInputnotify("")
      dispatch(setIsNotify(true))
      dispatch(setStep(2))
      if(token){
      localStorage.setItem('IsNotify', JSON.stringify(true));
      }
      // showToast(true, fullfiled.message)
    }
    else {
      setemailInputnotify("")
      showToast(false, fullfiled.message);
    }
  }
  const handleNotifyOpen = () => {
    dispatch(setStep(1))

  }

const IsFormValidate=()=>{
  if(emailInputnotify!=='' && errorMessage===''){
    return false
  }
    return true
}
  return (
    <Box className={classes.rootnotify}>
    {loading&&<CircularLoader/>}
      {(step === 0 && (isNotify==='false' ||  !isNotify ))&& <Button
        variant="contained"
        className={classes.notifyLiveButton}
        onClick={handleNotifyOpen}
      >
        <Box
          component="img"
          src={NotifyIcon}
          alt='Notify icon'
          width="30px"
          height="20px"

          className={classes.notifyText}
        />
        NOTIFY ME WHEN IT'S LIVE!
      </Button>}

      <Fragment>
        {(step===1&& (isNotify==='false' ||  !isNotify ))&&<Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', flexDirection: 'column'
        }}>
          <Box className={classes.notifyPaper} >
            <InputBase
              className={classes.notifyInputbox}
              placeholder="EMAIL"
              inputProps={{ "aria-label": "email" }}
              onChange={notifyMetakenemail}
              value={emailInputnotify}

            />
            <Button
              variant="contained"

              className={classes.notifyMEbutton}
              onClick={handleNotify}
              disabled={loading || IsFormValidate()}
            >
              NOTIFY ME
            </Button>
          
          </Box>
          {errorMessage&&<small className={classes.errormessage}>{errorMessage}</small>}
          <Typography className={classes.decisionText}>
            LIFE'S A GAME-MAKE EVERY DECISION COUNT
          </Typography>
        </Box>}
        {(step===2 || (isNotify==='true' ))&&<Button
          variant="contained"
          className={classes.gameGoesLiveButton}
        >
          YOU'RE ON THE LIST! <br />
          WE'LL BUZZ YOU WHEN THE GAME GOES LIVE
        </Button>}
      </Fragment>

    </Box>
  )
}

export default NotifymeEmail
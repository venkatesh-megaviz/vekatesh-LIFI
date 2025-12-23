import Dialog from '@mui/material/Dialog';
import { useHeaderStyles } from '../Styles/HeaderStyle';
import { Box,  Typography } from '@mui/material';
import CancelButton from '../assets/Cancelbutton.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store/store';
import { setLoginOpen } from '../redux/reducers/auth';



const Loginpopup = () => {
   const {loginopen}=useSelector((state:RootState)=>state.auth)
   const dispatch=useDispatch<AppDispatch>()
    const {classes} = useHeaderStyles();
    const navigate=useNavigate()
    

    const  handleNavigate = ()=> {
      navigate('/login')
      dispatch(setLoginOpen(false))
     
    };
    const handleClose=()=>{
      dispatch(setLoginOpen(false))
    }
    return (
      
     <Dialog
        open={loginopen}
        onClose={handleClose}
        PaperProps={{
        sx: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        marginBottom:30
      }
     }}
    >     
       <Box className={classes.loginalertbuttonControlls}>
        <Box  className={classes.loginPopupbox}>
        <Typography className={classes.holdonPlayer}>
         HOLD ON, PLAYER!
        </Typography>
        <Typography className={classes.loginaccesstext}>
          YOU NEED TO <Typography component="span" onClick={handleNavigate} style={{background:'transparent !important' , color:"white", 
            fontSize:'12px', fontWeight:600,textDecoration:"underline"}} > Log in </Typography> TO ACCESS THIS FEATURE
        </Typography>
        </Box>
        </Box>     
        <Box className={classes.capImgbox} onClick={handleClose}>
          <img src={CancelButton} alt='Cancel button' width="70px" height="70px"/>
        </Box>
      </Dialog>
   
  )
}

export default Loginpopup

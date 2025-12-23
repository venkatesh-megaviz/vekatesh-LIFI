import Dialog from '@mui/material/Dialog';
import { useHeaderStyles } from '../Styles/HeaderStyle';
import { Box,  Typography } from '@mui/material';
import CancelButton from '../assets/Cancelbutton.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store/store';
import { setSupportflag } from '../redux/reducers/auth';


const Supportpopup = ({text}:{text:string}) => {
    const {supportflag}=useSelector((state:RootState)=>state.auth)
    const {classes} = useHeaderStyles();
    const dispatch=useDispatch<AppDispatch>()
    const navigate=useNavigate()
    

    const  handleNavigate = ()=> {
      dispatch(setSupportflag(false))
      navigate('/login',{state:{from:'/support'}})
      
    };
    const handleClose=()=>{
      dispatch(setSupportflag(false))
    }

 
    
    return (
      
     <Dialog
        open={supportflag}
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
         {text==="blog"?"ACCESS REQUIRED":"ACCESS SUPPORT"}
        </Typography>
        <Typography className={classes.loginaccesstext}>
          {text!="blog"&&"To access our support resources and get assistance, please"}
          
 <Typography component="span" onClick={handleNavigate} style={{background:'transparent !important' , color:"white", 
            fontSize:'12px', fontWeight:600,textDecoration:"underline"}} > Log in </Typography>  to your account. {text==="blog"&&"To access this feature"}
       {text!=='blog'&&"This ensures personalized support and secure communication."}    
        </Typography>
        </Box>
        </Box>     
        <Box className={classes.capImgbox} onClick={handleClose}>
          <img src={CancelButton} alt='Cancel button' width="70px" height="70px"/>
        </Box>
      </Dialog>
   
  )
}

export default Supportpopup

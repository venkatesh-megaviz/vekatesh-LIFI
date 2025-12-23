import { Box, Button, Typography} from "@mui/material";
import { useMainStyles } from "../Styles/HomeStyle"
import LIFIgif from '../assets/Logo1 GIF.gif'
import NotifymeEmail from "../Utilities/NotifymeEmail";
import { useCanonical } from '../hooks/useCanonical';
import PlayIcon from "../assets/Play_Icon.png";
import AvatorIcon from "../assets/Avatar_Icon.png";
import COIN from "../assets/COIN.png";
import LoginIcon from "../assets/Login_Icon.png";
import horizontalLine from "../assets/horizontal line.png";
import dashrAnimation from "../assets/Dashr.json";
import Lottie from "lottie-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { setLoginOpen } from "../redux/reducers/auth";
import { useNavigate } from "react-router-dom";


type IProps = {
  classes: {
    [type: string]: string;
  };
};

const Home = () => {
  useCanonical('https://www.awwnetworking.com/about');
  const{classes}:IProps=useMainStyles({pathname:location.pathname})
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { data } = useSelector((state: RootState) => state.auth);
  const token = localStorage.getItem('token') || '';

  const handleAction = (action:'play'|'avatar'|'login')=>{
    if(!token){
      dispatch(setLoginOpen(true));
      return;
    }
    if(action==='play'){
      navigate('/play');
    }else if(action==='avatar'){
      navigate('/avatar');
    }else{
      navigate('/login');
    }
  }
  
  
return (
       <Box className={classes.homeStyleContainer}>
        <Button  className={classes.ourProductButton}>
          OUR PRODUCT
        </Button>
         <Box component="img" src={LIFIgif} alt='LIFI gif' className={classes.BigLifiLogogif}/> 
          <NotifymeEmail />
          <Box className={classes.topActionsRow}>
            <Button
              variant="contained"
              className={classes.actionButton}
              startIcon={<Box component="img" src={PlayIcon} alt="Play" className={classes.actionIcon} />}
              onClick={()=>handleAction('play')}
            >
              PLAY
            </Button>
            <Button
              variant="contained"
              className={`${classes.actionButton} ${classes.wideAction}`}
              startIcon={<Box component="img" src={AvatorIcon} alt="Avatar" className={classes.actionIcon} />}
              onClick={()=>handleAction('avatar')}
            >
              SELECT AVATAR
            </Button>
            <Box className={classes.coinWrapper}>
              <Typography className={classes.coinLabel}>LiFi COINS</Typography>
              <Box className={`${classes.actionButton} ${classes.coinPill}`}>
                <Box component="img" src={COIN} alt="LiFi Coin" className={classes.actionIcon} />
                <Typography className={classes.coinValue}>{data?.user?.coins ?? 0}</Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              className={classes.actionButton}
              startIcon={<Box component="img" src={LoginIcon} alt="Login" className={classes.actionIcon} />}
              onClick={()=>handleAction('login')}
            >
              LOGIN
            </Button>
          </Box>
          <Box component="img" src={horizontalLine} alt="divider" className={classes.horizontalLine}/>
          <Box className={classes.dashrWrapper}>
            <Lottie animationData={dashrAnimation} loop autoplay />
          </Box>
         </Box>
  )
}

export default Home

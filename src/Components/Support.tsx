import { Box, Button, Typography, useMediaQuery, useTheme, IconButton } from "@mui/material";
import { useMainStyles } from "../Styles/HomeStyle";
import Biglogo from "../Utilities/Biglogo";
import SupportImage from '../assets/Support_icon.png'
import { useCanonical } from '../hooks/useCanonical';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";



type IProps = {
  classes: {
    [type: string]: string;
  };
};

const Support = () => {
  useCanonical('https://www.awwnetworking.com/about');

  const{classes:HomeStyles}:IProps=useMainStyles({pathname:location.pathname})
  const navigate = useNavigate();
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 


  return (
     
    <Box className={HomeStyles.homeStyleContainer}   sx={{ 
      scrollMarginTop: '80px',height:{xs:'100vh',md:'0vh',}, 
    }}>
      {isMobile && (
           <Box className={HomeStyles.backNavBar} >
        <IconButton
        onClick={() => navigate("/")}
          className={HomeStyles.backNavIcon}
          disableRipple
        >
          <ChevronLeftIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>  )}  
      <Button variant="contained" id='scrollTop' className={HomeStyles.ourProductButton}>
          Support
      </Button>
      <Biglogo />
      <Typography className={HomeStyles.supportText}>
        This ensures personalized support and secure communication
      </Typography>

      <Box className={HomeStyles.supportImageBox}>
       <img src={SupportImage} alt='Support Image' width="120px" height="200px"/>
      </Box>
      <Typography className={HomeStyles.commingSoontext}>
        COMING SOON!
      </Typography>
    </Box>
    )
}

export default Support

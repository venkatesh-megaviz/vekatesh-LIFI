import { Box, Button, Typography, useMediaQuery, useTheme, IconButton} from "@mui/material";
import { useAboutStyles } from "../Styles/AboutStyle";
import Big_Logo from '../assets/Big_Logo.png'
import { useMainStyles } from "../Styles/HomeStyle";
import { useCanonical } from '../hooks/useCanonical';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";

const Founder = () => {
  useCanonical('https://www.awwnetworking.com/about');
type IProps = {
  classes: {
    [type: string]: string;
  };
};
const{classes:AboutStyles}:IProps=useAboutStyles()
const{classes:HomeStyles}:IProps=useMainStyles({pathname:location.pathname})
const navigate = useNavigate();
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 


  return (
   <Box id='scrollTop'  sx={{ 
    scrollMarginTop: '80px',
  }}>   
  {isMobile && (
             <Box className={HomeStyles.backNavBar}>
          <IconButton
          onClick={() => navigate("/")}
            className={HomeStyles.backNavIcon}
            disableRipple
          >
            <ChevronLeftIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>  )}   
       <Box className={AboutStyles.subStyleContainer}>
         <Button variant="contained" className={HomeStyles.ourProductButton}>
             FOUNDER
           </Button>
         <Box display="flex" component="img" src={Big_Logo} alt="Logo" sx={{ width: "180px" }} />

       </Box>
       <Box sx={{height:'auto',mb: { xs: 6,md:1}}}>
           <Typography className={HomeStyles.typoContent}>
            Aww Networking was founded by <b>N.V.K</b>, a visionary entrepreneur driven by a passion to blend technology with human connection. With a strong background in business, analytics, and entrepreneurship, N.V.K envisions Aww Networking as a platform that redefines digital engagement through innovation and creativity.

<br/><br/>Following the launch of its first flagship game, <b>LiFi</b>, the company aims to develop more human-centered applications that celebrate the value of entertainment, connection, and the essence of human existence in the digital world.

           </Typography>
           </Box>
       </Box>
  )
}

export default Founder

import { Box, Button, Typography, useMediaQuery, useTheme, IconButton} from "@mui/material";
import { useAboutStyles } from "../Styles/AboutStyle";
import Big_Logo from '../assets/Big_Logo.png'
import { useMainStyles } from "../Styles/HomeStyle";
import { useCanonical } from '../hooks/useCanonical';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";

type IProps = {
  classes: {
    [type: string]: string;
  };
};
const Vision = () => {
useCanonical('https://www.awwnetworking.com/about');
  
const{classes:AboutStyles}:IProps=useAboutStyles()
const{classes:HomeStyles}:IProps=useMainStyles({pathname:location.pathname})    

const navigate = useNavigate();
const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  return (
    <Box id='scrollTop' sx={{ 
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
    <Box className={AboutStyles.subStyleContainer} sx={{
          flexDirection: isMobile ? "column" : "row", 
          alignItems: "center",
          justifyContent: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left"
        }}>
      <Button variant="contained" className={HomeStyles.ourProductButton}  >
          VISION
        </Button>
      <Box display="flex" component="img" src={Big_Logo} alt="Logo" sx={{ width: isMobile ? '140px' : '180px', 
            mt: isMobile ? 2 : 0 }} />
    </Box>
    <Box sx={{height:'auto',mb: { xs: 6,md:0}}}
  
  >
        <Typography
  className={HomeStyles.typoContent}
  
>
             <p>At Aww Networking, our vision is to  develop applications that not only entertain but also inspire and educate. Each platform we create is designed to encourage human engagement, spark personal growth, and make people reflect on the essence of life - all while delivering unparalleled entertainment.
  </p>
  <p>With LiFi Coins, we're also introducing an impactful virtual economy that resonates with real-world value and interaction.</p>
</Typography>

    </Box>
    </Box>

  )
}

export default Vision
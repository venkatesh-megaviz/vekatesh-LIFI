import { Box, Button, Typography,IconButton,useMediaQuery, useTheme } from "@mui/material";
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

const About = () => {
  useCanonical('https://www.awwnetworking.com/about');
 const{classes:AboutStyles}:IProps=useAboutStyles() 
 

const{classes:HomeStyles}:IProps=useMainStyles({pathname:location.pathname})

const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

const navigate = useNavigate();
    return (
    <Box id='scrollTop'  sx={{ 
      scrollMarginTop: '80px',
    }}>    
    <Box className={AboutStyles.subStyleContainer}>
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
      <Button variant="contained" className={HomeStyles.ourProductButton}>
          About
        </Button>
      <Box display="flex" component="img" src={Big_Logo} alt="Logo" sx={{ width: "180px" }} />
     </Box>
     <Box sx={{height:'auto',mb: { xs: 6,md:1}}}>
        <Typography className={HomeStyles.typoContent}>
         
        <ol>
                <li style={{fontWeight:800}}>LiFi:</li>
                <span style={{marginTop:'-1px'}}> 
                  LiFi is a word inspired by Word "Life". It stands for Life is Fictional. This is a board game inspired by the decisions we make throughout life. The game is set to launch in 2025, and we’re eagerly waiting to see your responses. We’ll be coming up with many exciting updates after the first version release.<br/><br/>                 
                </span>
            
            
            
              <li style={{fontWeight:800}}>Aww Networking: </li>
              
              <span style={{marginTop:'-1px'}}>
                Founded on February 12, 2025, Aww Networking Private Limited is an emerging tech company based in India, committed to launching innovative applications in the fields of entertainment and social networking. With a focus on meaningful digital experiences, we are excited to announce the upcoming launch of our first flagship application, LiFi, set to release in 2025.
              </span>
              </ol>
            
         
        </Typography>
        
     </Box>
    </Box>
    
  )
}

export default About

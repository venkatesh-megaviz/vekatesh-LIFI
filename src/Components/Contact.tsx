import { Box, Button, Typography,IconButton,useMediaQuery, useTheme  } from "@mui/material";
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

const Contact = () => {
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
          Contact
        </Button>
      <Box display="flex" component="img" src={Big_Logo} alt="Logo" sx={{ width: "180px" }} />

    </Box>
    <Box>
        <Typography className={HomeStyles.typoContent} >
        <p>We’d love to hear from you!</p>
          
        <p>For inquiries, suggestions, partnerships, or support related to our
          upcoming applications - especially LiFi - please feel free to reach
          out. Our team is here to assist you.</p> 
        </Typography>
        <Typography color="black" variant="h5" className={HomeStyles.EmainContact} sx={{mb:{xs:9,md:4}}}>
        Email: <Typography
        variant="h5"
        component="a"  
        href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@Awwnetworking.Com"
        target="_blank"
        rel="noopener noreferrer"
        className={HomeStyles.EmailcontactText}
>
              Info@Awwnetworking.com
            </Typography>
        </Typography>
            
    </Box>
    </Box>
  )
}

export default Contact

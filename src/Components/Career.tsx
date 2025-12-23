import { Box, Button, Typography, useMediaQuery, useTheme,IconButton } from "@mui/material";
import { useAboutStyles } from "../Styles/AboutStyle";
import { useMainStyles } from "../Styles/HomeStyle";
import Biglogo from "../Utilities/Biglogo";
import { useCanonical } from '../hooks/useCanonical';
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type IProps = {
  classes: {
    [type: string]: string;
  };
};
const Career = () => {
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
          Career
        </Button>
      <Biglogo />
     </Box>
     <Box>
        <Typography className={HomeStyles.joinOurteam}>Join Our Team!</Typography>
        <Typography className={HomeStyles.typoContent}>
          Hi!<br/>
If you believe you have the talent and passion to contribute to the <b>software
development lifecycle</b>, we’d love to hear from you. Please send your <b>cover letter</b> with
<b> the subject line clearly mentioning the role and your experience. </b>
 We will carefully review all applications and consider them for <b>upcoming positions.</b>
</Typography>
<Typography color="black" variant="h5" className={HomeStyles.EmainContact} sx={{mb:{xs:9,md:4}}}>
Email: <Typography variant="h5" component="a" className={HomeStyles.EmailcontactText} 
href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@Awwnetworking.Com"
target="_blank"
rel="noopener noreferrer"
>
              Info@Awwnetworking.Com
        </Typography>
        </Typography>
</Box>
    </Box>
  )
}

export default Career
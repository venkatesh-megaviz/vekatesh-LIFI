import { Box, Button, Typography, IconButton,useMediaQuery, useTheme} from "@mui/material";
import { useAboutStyles } from "../Styles/AboutStyle";
import Big_Logo from '../assets/Big_Logo.png'
import { useMainStyles } from "../Styles/HomeStyle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type IProps = {
  classes: {
    [type: string]: string;
  };
};

const Stakeholder = () => {
  const{classes:AboutStyles}:IProps=useAboutStyles()
  const{classes:HomeStyles}:IProps=useMainStyles({pathname:location.pathname}) 
  
const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

const navigate = useNavigate();
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [location.pathname])
  return (
     <Box  > 
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
    <Box className={AboutStyles.subStyleContainer} >
      <Button variant="contained" className={HomeStyles.ourProductButton}>
          STAKEHOLDER
        </Button>
      <Box display="flex" component="img" src={Big_Logo} alt="Logo" sx={{ width: "180px" }} />
    </Box>
    <Box  sx={{height:'auto',paddingBottom:{xs:10,md:1,lg:1},mb: { xs: 6,md:1 }}}>
        <Typography className={HomeStyles.typoContent}>
         At Aww Networking Private Limited, we believe that real-life connections create real impact. Founder N.V.K has drawn on diverse relationships and networks built over years of experience to bring together a unique group of individuals who share the company’s vision and passion.<br/>
        <br/> These stakeholders play a crucial role in supporting and shaping the development of our first application, LiFi, and future initiatives.
         <br/><br/>
          <strong>Layesh Hi </strong>(Data Scientist)., <strong>Mercy Witmore </strong>(M.S)., <strong>manjula Manning </strong>(Industrialist)., <strong>Kavitha Chanagani </strong>(Entrepreneur)., <strong>Aravind Kukkala </strong>(M.S)., <strong>Srilatha Bandi </strong>(M.Sc)., <strong>Radhika Gajawada </strong>(MBA)., <strong>Ramesh Chanagani </strong>(Industrialist)., <strong>Roza Carter </strong>(M.Tech).   
         </Typography>
    </Box>
    </Box>
  )
}

export default Stakeholder
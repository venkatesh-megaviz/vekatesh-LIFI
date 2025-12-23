import { Box, Button, Typography } from "@mui/material";
import { useMainStyles } from "../Styles/HomeStyle";
import Biglogo from "../Utilities/Biglogo";
import happyExpression from '../assets/Happy_Expression.png'
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import { avatarImages } from "../Utilities/ImagesDb";

const Playoption = () => {
  const data1=useSelector((state:RootState)=>state.auth.data)

  const { classes: mainClasses } = useMainStyles({pathname:location.pathname});
    const result = avatarImages.find((x) => x.id === data1?.user?.avatar) ;
  return (
   <Box className={mainClasses.homeStyleContainer} sx={{minHeight:{xs:'100vh',md:'0vh',}, }}>
   <Box className={mainClasses.playpageContainer}>
     <Biglogo />
     <Box className={mainClasses.lifegametextdecisionBox}>
     <Typography className={mainClasses.lifegametextdecision}>Life’s a Game - Make Every Decision Count</Typography>
     </Box>
      <img src={result?.child.img ?? happyExpression} alt='Happy expression' width="240" height="230"/>
     
     <Button className={mainClasses.playLiveButtonbox}>
    <Box display="flex" justifyContent="center" flexDirection="column">
    <Typography className={mainClasses.newExpressiontext}> New expressions await! </Typography>
     <Typography className={mainClasses.newExpressionsubtext}> Play instantly when available in the market using LiFi Coins.</Typography>
    </Box>
    </Button>
    
    </Box>
     
   </Box>
  )
}

export default Playoption

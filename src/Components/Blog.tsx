import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useBlogStyles } from "../Styles/BlogStyle"
import HappyIcon from '../assets/Happy.png'
import ExcitedIcon from '../assets/Excited.png'
import CuriousIcon from '../assets/Curious.png'
import SharebuttonIcon from '../assets/share.png'
import { useNavigate } from "react-router-dom"
import { Fragment, useEffect, useState } from "react"
import Blogpopup from "./Blogpopup"
import { useCanonical } from '../hooks/useCanonical';
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store/store"
import { BlogReaction, setSupportflag } from "../redux/reducers/auth"
import { showToast } from "../Utilities/Toast"
import CircularLoader from "../Utilities/CircularLoader"
import HappyBlue from '../assets/HappyBlue.png'
import  ExcitedBlue from '../assets/ExcitedBlue.png'
import CuriousBlue from '../assets/CuriousBlue.png'
import Supportpopup from "./Supportpopup"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


const Blog = () => {
useCanonical('https://www.awwnetworking.com/about');
const {loading}=useSelector((state:RootState)=>state.auth)
const theme=useTheme()
const isMobile=useMediaQuery(theme.breakpoints.down('lg'))
const token=localStorage.getItem('token') || ''
const navigate=useNavigate()
const dispatch=useDispatch<AppDispatch>()
 const homeNavigate=()=>{
    navigate('/')
 } 

 const[linkflag,setLinkflag]=useState(false)

 const handleSharepopup=()=>{
   const blogUrl=window.location.href
   navigator.clipboard.writeText(blogUrl)
   .then(()=>setLinkflag(true))
   .catch((err)=>console.error("Faliled:",err))
  }
const blogClose=()=>{
  setLinkflag(false)
}

const[selected,setSelected]=useState<string | null>(null)
const [lifting, setLifting] = useState<string | null>(null);


useEffect(()=>{
  const emoji=localStorage.getItem('emoji')
  if(emoji){
    switch (emoji){
      case '1':{
        setSelected('happy')
        break;
      }
      case '2':{
        setSelected('excited')
        break;
      }
      case '3':{
        setSelected('curious')
        break;
      }
      default:{
        break;
      }
    }
  }
},[])
const handleReactions = async(reaction: string) => {
  
   if(!token){
    dispatch(setSupportflag(true))
    // showToast(false,'Login is required')
   }

   else{
    setLifting(reaction);
    let emoji=null
    switch (reaction) {
      case 'happy': {
        emoji=1
        break;
      }
      case 'excited': {
        emoji=2
        break;
      }
      case 'curious': {
        emoji=3
        break;
      }
      default: {
        break;
      }
    }
    // localStorage.setItem('emoji',JSON.stringify(emoji))
    const data={
      emoji:emoji
    }
    setSelected((prev) => prev === reaction ? null : reaction)
     const response=await dispatch(BlogReaction({data:data}))
     const fullfiled=response.payload
     if(fullfiled.status){
      localStorage.setItem('emoji',JSON.stringify(emoji))
      showToast(true,fullfiled.message)
      // setSelected(fullfiled)
     }
     else{
      showToast(false,fullfiled.message)
     }
    setSelected((prev) => prev === reaction ? null : reaction)
  setSelected(reaction);

     setTimeout(() => {
    setLifting(null);
  }, 1000);
   }
  }
 
const{classes}=useBlogStyles()
    return (
    <Fragment>
    <Box className={classes.blogMainContainer} >
        {loading&&<CircularLoader/>}
      <Supportpopup text='blog'/>
        <Box className={classes.homebuttonBlogBox}>
        {!isMobile&&<Button className={classes.homebuttonBlog} onClick={homeNavigate}>HOME</Button>}
        </Box> 
        <Box className={classes.blogButtonBox} sx={{position:'relative',}}>
            {isMobile && (
              <IconButton
              sx={{position:'absolute',left:0,marginTop:'-3vh'}}
                onClick={() => navigate("/")}
                disableRipple
              >
                <ChevronLeftIcon sx={{ fontSize: 32, }} />
              </IconButton>
            )} 
        <Button className={classes.ourBlogButton} >BLOG</Button>
        </Box>
        <Box className={classes.awwNetworkingWrapper} sx={{mt:{xs:'10vh',sm:'0%',lg:'0%',xl:'0%',md:'0%'}}}>
        <Box className={classes.excitingtimeWrapper}>
        <Box className={classes.excitingtimeContainer}>
          <Typography className={classes.AwwNetworkingtext}>Aww Networking</Typography>
          <Box className={classes.excitingtimeBox}>
          <Box display="flex" justifyContent="flex-start">
          <Typography className={classes.ExcitingtextHeading}>Exciting Times Ahead at Aww Networking!</Typography>
         </Box>
        <Typography className={classes.Excitingtextsubtext}>
           Hello everyone!<br/>
           
           We Are Thrilled To Share That <b>Aww Networking Private Limited </b>Is Actively Working On
           Launching Our First Application, <b>LiFi.</b> While Our Initial Plans Have Experienced A Slight
          Delay, We Are Fully Committed To Delivering A High-Quality Experience.<br/>
          We’ll Keep You Updated On The <b>Official Market Release Date</b> Very Soon. Stay Tuned For
           More Updates, And Don’t Forget To React And Comment To Share Your Thoughts!<br/>
           <b>- The Aww Networking Team</b>
        </Typography>
          </Box>
         

       </Box> 
       <Box className={classes.socialMediacontainer} sx={{marginBottom:{xs:'25%',lg:'0px'}}}>
        <Box className={classes.emojiContainer}>
          <IconButton onClick={() => handleReactions("happy")} disabled={loading}>
  <img
    src={selected === "happy" ? HappyBlue : HappyIcon}
    alt="Happy"
    style={{
      transition: "all 0.3s ease",
      marginTop: lifting === "happy" ? "-20px" : "0px",
      width: lifting === "happy" ? "50px" : "30px",
      height: lifting === "happy" ? "50px" : "30px",
    }}
  />
</IconButton>

<IconButton onClick={() => handleReactions("excited")} disabled={loading}>
  <img
    src={selected === "excited" ? ExcitedBlue : ExcitedIcon}
    alt="Excited"
    style={{
      transition: "all 0.3s ease",
      marginTop: lifting === "excited" ? "-20px" : "0px",
      width: lifting === "excited" ? "50px" : "30px",
      height: lifting === "excited" ? "50px" : "30px",
    }}
  />
</IconButton>

<IconButton onClick={() => handleReactions("curious")} disabled={loading}>
  <img
    src={selected === "curious" ? CuriousBlue : CuriousIcon}
    alt="Curious"
    style={{
      transition: "all 0.3s ease",
      marginTop: lifting === "curious" ? "-20px" : "0px",
      width: lifting === "curious" ? "50px" : "30px",
      height: lifting === "curious" ? "50px" : "30px",
    }}
  />
</IconButton>


        </Box>
        <Box className={classes.shareButtonemoji}>
          <img src={SharebuttonIcon} alt='Share Button' width="50px" height="50px" onClick={handleSharepopup} style={{cursor:'pointer'}}/>
       {linkflag&&<Blogpopup linkflag={linkflag} blogclose={blogClose}/>}  
       </Box>
       </Box>
       </Box>
       </Box>
    </Box>
    </Fragment>
  )
}

export default Blog

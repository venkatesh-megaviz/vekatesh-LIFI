import { makeStyles } from "tss-react/mui";
import type { Theme } from "@mui/material";

export const useBlogStyles=makeStyles()((theme:Theme)=>({
   blogMainContainer:{
    display:'flex',
    backgroundColor:'#d3d4d3',
    height:'100vh',
    flexDirection:'column',
    overflowX:'hidden',
    [theme.breakpoints.down('lg')]:{
      height:'fit-content'
    }

    },
homebuttonBlogBox:{
  width:'100%',
  height:'80px',
},
 homebuttonBlog:{
        background:'#EBEBEB',
        color:'#156082',
        borderTopRightRadius:'40px',
        borderBottomRightRadius:'40px',
        fontWeight:900,
        fontSize:'12px',
        width:'180px',
        boxShadow:'2px 3px 3px rgb(0,0,0,0.5)', 
        marginTop:40,       
        },  
   blogButtonBox:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
    marginTop:20,
  }
   }, 
   ourBlogButton:{
    backgroundColor:'#000000BD',
    fontFamily:'Saira Stencil One',
    borderRadius:'50px',
    textDecoration:'underline',
    fontSize:"14px",
    padding:'6px 60px',
    opacity:1,
    color:'white',
    marginTop:12,
    transition:'none',
    pointerEvents:'none',
    cursor:'default',
    "&:hover": {
      backgroundColor:'#000000BD',
    textDecoration: "underline",
  },
    [theme.breakpoints.down('md')]:{
      marginTop:50,
    }
  },
AwwNetworkingtext:{
  color:'#383838',
  textDecoration:'underline',
  fontWeight:800,
  fontSize:20,
  [theme.breakpoints.down('sm')]:{
    marginLeft:10,
    marginTop:20
  }
},
awwNetworkingWrapper:{
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
 height:'100vh',
},
excitingtimeWrapper:{
  display:'flex',
  justifyContent:'center',
  alignItems:'flex-start',
  gap:14,
  flexDirection:'column',
  },
excitingtimeContainer:{
 display:'flex',
 flexDirection:'column',
 
},
excitingtimeBox:{
  display:'flex',
  background:'white',
  flexDirection:'column',
  maxWidth:'1000px',
  height:'auto',
  padding:30,
  borderRadius:10,
  gap:20,
  [theme.breakpoints.down('sm')]:{
    margin:10,
    padding:10,
  }
  },

 ExcitingtextHeading:{
  color:"#156082",
  fontWeight:800,
  fontSize:23,
  textTransform:'uppercase'
 },
 Excitingtextsubtext:{
  color:'black',
  lineHeight:"2.0",
  [theme.breakpoints.down('sm')]:{
    color:"#156082"
  }
 },
socialMediacontainer:{
 display:'flex',
   [theme.breakpoints.down('sm')]:{
    marginLeft:10,
  }
},
 emojiContainer:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#FFFFFF',
  height:"40px",
  borderRadius:"50px",
  padding:"0px 5px",
  border:"1px solid #156082",
  gap:2
  
 },
 shareButtonemoji:{
   display:'flex',
   justifyContent:'center',
   alignItems:'center'
 },
 emoji: {
  transition: "transform 0.3s ease, margin-top 0.3s ease",
},
emojiLifted: {
  transform: "scale(1.5)",
  marginTop: "-15px",
}


 }) )    
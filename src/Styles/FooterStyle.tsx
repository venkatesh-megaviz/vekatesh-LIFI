import type { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useFooterStyles=makeStyles()((theme:Theme)=>({
  
    footerContainer:{
        background:theme.customStyles.backgrounds.footer,
        padding:'22px 0px 18px',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        rowGap:16,
        [theme.breakpoints.down('lg')]:{
          padding:'18px 6px 16px'
        },
       
      },
    footerGrid:{
      width:'100%',
      alignItems:'center',
      justifyContent:'space-between',
      columnGap:0,
      flexWrap:'nowrap',
      margin:0,
      [theme.breakpoints.down('lg')]:{
        columnGap:20,
      },
      [theme.breakpoints.down('md')]:{
        columnGap:12,
      },
    },

   leftMenuBox:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center", 
    alignItems:"flex-start",
    gap:14,
    width:'100%',
    alignSelf:'flex-start',
    marginLeft:0,
   
   },
  leftButtons:{
        background:'#EBEBEB',
        color:'#156082',
        borderTopRightRadius:'40px',
        borderBottomRightRadius:'40px',
        fontWeight:900,
        fontSize:'12px',
        width:'200px',
        marginTop:'-10px',
        boxShadow:'0px 2px 4px rgba(0,0,0,0.2)',
         [theme.breakpoints.down('sm')]: {
          marginLeft:0,
          width:'90px'
         },

    },

 socialMediaBox:{
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center", 
    gap:28,
    margin:"auto"
 },
 socialIconsBox:{
    display:"flex",
    justifyContent:"center",
    gap:20,
    margin:"auto",
    [theme.breakpoints.down('sm')]:{
       gap:'15px'
    },
 },

 footerLogo:{
   width:"250px",
   height:"100px",
  marginTop:0 ,
[theme.breakpoints.down('sm')]:{
     width:'120px',
     height:'50px'
},
},
 socialIconsItems:{
  display:"flex",
  flexDirection:"column",
  gap:2,
  justifyContent:"center",
  alignItems:"center",
  [theme.breakpoints.down('sm')]: {
     gap:5,
     marginTop:20,
  },
 },

socialIcon:{
width:"30px",
height:"30px",
[theme.breakpoints.down('sm')]:{
   width:"24px",
   height:"24px",
   padding:0
},
}, 
socialText:{
 [theme.breakpoints.down('sm')]:{
   display:'none'
},
},


 rightMenuBox:{
  display:"flex",
  flexDirection:"column",
  alignItems:"flex-end",
  justifyContent:"center",
  gap:14,
  width:'100%',
},
rightButtons:{
        background:'#EBEBEB',
        color:'#156082',
        borderTopLeftRadius:'40px',
        borderBottomLeftRadius:'40px',
        fontWeight:900,
        width:'200px',
        fontSize:'12px',
        marginTop:'-10px',
        boxShadow:'0px 2px 4px rgba(0,0,0,0.2)',
       [theme.breakpoints.down('sm')]: {
         width:'100px'
       } 

},
bottomLinksContainer:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexWrap:'wrap',
  gap:24,
  padding:'6px 12px 0',
  width:'100%',
},
bottomLink:{
  background:'transparent',
  border:'none',
  color:'#ffffff',
  textDecoration:'underline',
  fontWeight:700,
  fontSize:'13px',
  letterSpacing:'0.5px',
  cursor:'pointer',
  padding:0,
  textTransform:'uppercase'
},
DialogBox:{
   width:'900px',
   height: "auto",
   borderRadius: "20px",
   overflow:'hidden', 
   py:0
},
DialogBoxTitle:{
   fontWeight:800,
   fontSize:'25px',
   color:'#156082',
   textTransform:'uppercase',
   [theme.breakpoints.down('md')]:{
      fontSize:'16px',
      fontWeight:700,
      textTransform:'capitalize',
      p:0,
      m:0,
   }
},
DialogBoxTextTitle:{
   fontSize:'15px',
   fontWeight:700,
   paddingLeft:3,
   [theme.breakpoints.up('md')]:{
      fontSize:'18px'
   }
},
DialogBoxButton:{
   backgroundColor:'#156082',
   color:'#ffffff',
   borderRadius:'30px',
   boxShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.25)',
   fontWeight:800,
   fontSize:'19px',
   marginBottom:'20px',
   [theme.breakpoints.down('md')]:{
      fontSize:'17px',
      
   }
},
DialogBoxText:{
   fontSize:'14px',
   fontWeight:500,
   color:'#6B6B6B',
   marginBottom:'15px',
   [theme.breakpoints.up('md')]:{
      fontSize:'17px'
   }
}

}) )
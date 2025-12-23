import { makeStyles } from "tss-react/mui";
import type { Theme } from "@mui/material";

export const useHeaderStyles = makeStyles()((theme: Theme) => ({
  appBar: {
    backgroundColor: theme.customStyles.backgrounds.header,
    boxShadow: "0 6px 4px rgba(84, 84, 84, 0.77)",
    width: "100%",
    minHeight:'80px',
    padding: theme.spacing(1, 1),
    /* [theme.breakpoints.down('sm')]:{
       width:'100%',  
    } */
  },

  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(2),
      flexWrap: "wrap",
      overflowX:'hidden',
      
    },
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    /* paddingTop: theme.spacing(2), */

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  logoContainerMobile:{
    display:"flex",
    position:'relative',
    justifyContent:'space-between',
    alignItems:'center',
    alignContent:'center',
    width:'100%'
  },
  lifi_logo: {
    height: 50,
    width: 130,
    cursor: "pointer",
  [theme.breakpoints.down('sm')]:{
     height:30,
     width:80 

  },
},
mobile_lifi_logo:{
width:'50%',
marginLeft:'10%',
height:'50%',
marginTop:'5px'

},
drawerBox:{
  width:300,
  padding:10,
  display:'flex',
  flexDirection:'column' as 'column',
  gap:20,
  marginTop:5
},

  notificationIconBox: {
    color: "black",
    marginTop: "14px",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
   
    "&:hover": {
    backgroundColor: "transparent",
    },
  },

 /*  notificationIcon: {
    fontSize: "34px",
 }, */

customNotifyIcon:{
 width:'25px',
 height:'25px',
},

notifyButton: {
  fontFamily: "Nunito",
  fontWeight: 900,
  fontSize: "12px",
  color: "#fff",
  padding: "3px 20px",
  borderRadius: "50px",
  border: "2px solid #444",
  background: `#191919 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='%23000000' fill-opacity='1' d='M0,64L120,106.7C240,149,480,235,720,234.7C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'/></svg>") no-repeat bottom / cover`,
},

controlledButtons: {
    display: "flex",
    gap: "13px",
    marginTop: "15px",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  /*   [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", 
      gap: theme.spacing(1),
      alignItems: "stretch", 
    }, */
  },

  buttonControlls: {
  fontFamily: "Nunito",
  fontWeight: 800,
  fontSize: "13px",
  color: "#fff",
  
  padding: "8px 20px",
  borderRadius: "100px",
  /* border: "2px solid #156082", */
  borderTopColor:'#156082',
  borderBottomColor:'#0b2836ff',
  cursor: "pointer",
  textTransform: "uppercase",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#156082", // Top solid color
  zIndex: 0, // Ensure parent context is lower
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
 alignContent:'center',
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230f4c66' fill-opacity='1' d='M0,64L120,106.7C240,149,480,235,720,234.7C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'/%3E%3C/svg%3E") no-repeat bottom / cover`,
    zIndex: -1, // Behind content
    borderRadius: "inherit",
  },

  "& span, & svg": {
    position: "relative",
    zIndex: 2, // Text always above the wave
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "10px 8px",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "center",
  },
},

coinNumber: {
  marginLeft: "12px",
},

lifiCointext: {
    color: "#156082",
    marginTop: "-18px",
    marginLeft:'10px',
    fontSize: "12px",
    fontWeight: "800",
  },
coinBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
},

loginButton: {
    [theme.breakpoints.down("sm")]: {

      height:'43px',
      width: "100%",
      gridColumn: "auto",
    },
},

LoginIcon:{
 objectPosition:'center',
  paddingRight:'4px',
   height:"25px",
  width:"25px",
},

AvatorIcon:{
  width:"20px",
   height:"20px",
  paddingRight:'6px'
},
PlayIcon:{
  width:"21px",
   height:"21px",
  paddingRight:'5px'
},
LifiCoin:{
  width:"20px",
   height:"20px",
  },


//mobile view 
mobileAppBar:{
  width:'100%',
  backgroundColor: theme.customStyles.backgrounds.header,
  height:'90px',
  padding:4,
},

mobiletoolBar:{
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 flexWrap: "nowrap",
 
},
mobilelogoContainer:{
   display: "flex",
   alignItems:'center',
   justifyContent:'center',
   gap:4
},
mobilelifi_logo:{
    height: 30,
    width: 70,
    cursor: "pointer",
    
    marginTop:'-10px'
},

mbnotificationbox:{
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'flex-start',
  marginTop:'30px',
},
mobilecustomNotifyIcon:{
 width:'20px',
 height:'20px',
 marginTop:'-20px',
 
},


mobileNotifytext:{
 color:'black',
 fontFamily:'Nunito',
 fontSize:'10px',
 fontWeight:800,
},
meNotify:{
 marginLeft:'10px'
},

//rightside buttons for mobiles

mobilecontrolledButtons:{
display: "flex",
 gap: "3px",
justifyContent:'center',
alignItems:'center',
flexDirection:'row',  
},

mobilebuttonControlls: {
  width: "30px",
  height: "10px",
  borderRadius: "10%",
  background: "linear-gradient(to bottom, #156082, #0f4c66)", // Two-tone effect
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  minWidth: "unset",
  boxShadow: "0 1px 3px rgba(0,0,0,0.3)", // Optional shadow
  position: "relative",
  overflow: "hidden",
  marginTop:'9px',
  marginLeft:'25px',
  
  "& img": {
    width: "16px",
    height: "16px",
    zIndex: 2,
    position: "relative",
  },

  // Optional: a subtle overlay for depth (like gloss)
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "50%",
    background: "rgba(255, 255, 255, 0.1)", // subtle white top gloss
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    zIndex: 1,
  }
},

mobilePlayIcon:{
 width:"30px",
   height:"30px",
   boxShadow: "0 1px 3px rgba(0, 0, 0, 0.9)",
   borderRadius:'100%',
   border:'3px solid rgba(65, 95, 165, 0.07)',
},
  
textPlay:{
   color: "#156082",
  fontWeight: 800,
  fontSize: "12px",
  marginBottom:'23px',
  marginLeft:'25px', 
  textAlign: "center",  
},

//selector 

mobileAvatorIcon:{
    width:"20px",
   height:"20px",
   borderRadius:'100%',
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.9)",
    border:'3px solid rgba(65, 95, 165, 0.07)',
  },

mobileAvatorText1:{
   color: "#156082",
  fontWeight: 800,
  fontSize: "12px",
    marginBottom:'5px',
  marginLeft:'25px',
  textAlign: "center", 
},

mobileLificoinbuttoncontrol:{
  fontFamily: "Nunito",
  fontWeight: 800,
  fontSize: "13px",
  color: "#fff",
  height:'30px',
  padding: "6px 6px",
  borderRadius: "100px",
  borderTopColor:'#156082',
  borderBottomColor:'#0b2836ff',
  cursor: "pointer",
  textTransform: "uppercase",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#156082", 
  zIndex: 0, 
  border:'4px solid rgba(65, 95, 165, 0.07)',
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230f4c66' fill-opacity='1' d='M0,64L120,106.7C240,149,480,235,720,234.7C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'/%3E%3C/svg%3E") no-repeat bottom / cover`,
    zIndex: -1, // Behind content
    borderRadius: "inherit",
  },

  "& span, & svg": {
    position: "relative",
    zIndex: 2, // Text always above the wave
  },
},
mobilecoinBox:{
  display: "flex",
  justifyContent:'center',
  flexDirection: "column",
    alignItems: "flex-start",
    marginTop:'5px',
  },

mobilelifiCointext:{
  color: "#156082",
   marginLeft:'18px',
  fontSize: "12px",
  fontWeight: 800,
  marginTop:'5px',
},
mblificoinspan:{
fontSize: "12px",
fontWeight: 800,
 marginLeft:'-6px'
},
mobileLoginbuttonControlls:{
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  background: "linear-gradient(to bottom, #156082, #0f4c66)", // Two-tone effect
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  minWidth: "unset",
  boxShadow: "0 1px 3px rgba(0,0,0,0.3)", // Optional shadow
  position: "relative",
  overflow: "hidden",
  marginTop:'-12px', 
  marginLeft:'5px',
  border:'3px solid rgba(65, 95, 165, 0.07)',  
  "& img": {
    width: "16px",
    height: "16px",
    zIndex: 2,
    position: "relative",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "50%",
    background: "rgba(255, 255, 255, 0.1)", 
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    zIndex: 1,
  }
},

mobileLogintext:{
  color:'#156082',
  fontWeight: 800,
  fontSize: "12px",
  
},

mobileLoginIcon:{
  width:"20px",
   height:"20px",
    
},

//loginpopup
loginalertbuttonControlls:{
 fontFamily: "Nunito",
  fontWeight: 800,
  fontSize: "13px",
  color: "#fff",
  padding: "9px 40px",
  borderRadius: "100px",
  /* border: "2px solid #156082", */
  borderTopColor:'#156082',
  borderBottomColor:'#0b2836ff',
  cursor: "pointer",
  textTransform: "uppercase",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#156082", // Top solid color
  zIndex: 0, // Ensure parent context is lower
   
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230f4c66' fill-opacity='1' d='M0,64L120,106.7C240,149,480,235,720,234.7C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'/%3E%3C/svg%3E") no-repeat bottom / cover`,
    zIndex: -1, // Behind content
    borderRadius: "inherit",
   
  },

  "& span, & svg": {
    position: "relative",
    zIndex: 2, 
  },
  [theme.breakpoints.down('sm')]:{
     padding:'7px 17px'
  }
},
loginPopupbox:{
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
},
holdonPlayer:{
  fontWeight:800,
},
loginaccesstext:{
  fontWeight:600,
  fontSize:12,
  [theme.breakpoints.down('sm')]:{
    textAlign:'center'
  }  
},
loginaccesstextbutton:{
  fontWeight:600,
  fontSize:13,
  marginTop:-1,
  textDecoration:'underline',
  padding:2  
},
capImgbox:{
  display:'flex',
  justifycontent:'center',
  alignItems:'center',
  margin:'auto',
  marginTop:13
},


}));
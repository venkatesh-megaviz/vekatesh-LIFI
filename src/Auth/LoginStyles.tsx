import type { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useAuthStyles=makeStyles()((theme:Theme)=>({
authWrapper:{
  display:'flex',
  justifyContent:'center',
  backgroundColor:'white',
  maxWidth:'450px',
  width:'100%',
  height:'auto',
  padding:'20px 20px 20px 20px',
  borderRadius:15,
  flexDirection:'column',
  gap:16,
  marginBottom:14,
  boxSizing:'border-box',
  [theme.breakpoints.down('lg')]:{
     padding: '30px 25px',
     maxWidth:'95%',
     marginBottom:'30%'
  }
},
lockscreentextcontainer:{
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
 alignContent:'center',
 flexDirection:'column',
 marginTop:'-20px',
 lineHeight:'60px'
},
lockscreentext_t1:{
 fontSize:15,
 color:'#E62310',
 fontWeight:600
},
lockscreentext_t2:{
 fontSize:15,
 marginTop:'5px',
 whiteSpace:'wrap',
 color:'black',
 marginBottom:'6px'
},
authRoots:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    borderBottom:'2px solid #33333342',
    color:'#333333',
    marginBottom:25
},
SignIn:{
 fontWeight:700,
 cursor:'pointer'
},
SignUp:{
fontWeight:700,
cursor:'pointer'
},
formFiledWrapper:{
 display:'flex',
 flexDirection:'column',
 gap:15,
 },
inputFileds:{
      
    backgroundColor:'#F9FAFB',
    width:'100%',
      "& .MuiOutlinedInput-root": {
        "& fieldset":{
          borderColor: theme.customStyles.backgrounds.footer,
          },
        "&:hover fieldset":{
          borderColor: theme.customStyles.backgrounds.footer,
        },
        "&.Mui-focused fieldset": {
          borderColor:theme.customStyles.backgrounds.footer 
        },
        ".MuiSvgIcon-root":{
          color:theme.customStyles.backgrounds.footer,  
        },
        "&.Mui-focused .MuiSvgIcon-root": {
          color: theme.customStyles.backgrounds.footer, 
        },
      },
      "& .MuiInputBase-input": {
        color: "#000",
    },
   "& .MuiFormHelperText-root": {
          color: "#E62310",
     }
},

forgotPasswordbox:{
 display:'flex',
 justifyContent:'flex-end',
 color:'black',
 cursor:'pointer'
},

dividerBox:{
  width:'70%',
  my: 2,
  margin:'auto',
  color:theme.customStyles.backgrounds.footer,
  fontFamily:'Nunito',
  fontWeight:600
},
loginButton:{
    background:theme.customStyles.backgrounds.footer,
    padding:'10px 10px',
    borderRadius:'10px',
   
},

//forgot password styles

forgetPasswordBox:{
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
},
forgetPassword:{
  color:theme.customStyles.backgrounds.footer,
  fontSize:30,
  fontWeight:700
},
forgotspan:{
 color:theme.customStyles.backgrounds.footer,
 fontSize:'16px' 
},
forgotGetOtp:{
 marginTop:30
},

unLockNext:{
 color:theme.customStyles.backgrounds.footer,
 fontWeight:800,
 fontSize:"20px",
 textAlign:'center'
},
unLockNextdesc:{
 color:theme.customStyles.backgrounds.footer,
  fontSize:"15px",
 textAlign:'center'
},

otpVerifybutton:{
  marginTop:"30px",
  padding:10,
  background:theme.customStyles.backgrounds.footer,
  textTransform:'capitalize'
},
notReceivecode:{
 textAlign:'center',
 fontSize:'14px',
 marginTop:'10px',
color:theme.customStyles.backgrounds.footer,

},
didnotReceivecode:{
 color:theme.customStyles.backgrounds.footer,
 marginLeft:"4px"
},
OtpnumberBox:{
  textAlign:'center',
},
otpNumberText:{
 marginTop:"10px", 
display:'inline-block', 
textAlign: 'center',
borderBottom: "0.5px solid #999"
},
resetConfirmbutton:{
  marginTop:'20px',
  background:theme.customStyles.backgrounds.footer,
    padding:'10px 10px',
    borderRadius:'10px'
},

//userlogin

welcomelifiBox:{
  display:'flex',
 justifyContent:"center",
 alignItems:"center",
 },
welcomeLifiTextlogin:{
 color:theme.customStyles.backgrounds.footer,
 fontSize:21,
 fontWeight:800
},
userImgcontainer:{
  display:"flex",
  justifyContent:"center",
  flexDirection:"column",
  alignItems:"center",
  gap:4
},
userNamebutton:{
  padding:'0px 30px',
  borderRadius:'50px',
  backgroundColor:'#156082',
  fontSize:28,
  color:'white',
  textTransform:'capitalize'
},
userIdtext:{
  color:theme.customStyles.backgrounds.footer,
  fontWeight:800
},
referalAwardtext:{
  color:theme.customStyles.backgrounds.footer,
  fontSize:22,
  fontWeight:700,
  textAlign:"center"
},
coinsReceiveBox:{
  display:'flex',
  gap:4
},
coinsreceiveText:{
  color:theme.customStyles.backgrounds.footer,
  fontSize:15,
  fontWeight:700
},

submitButtonReceive:{
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

Rollyourlucktext:{
  fontSize:16,
  [theme.breakpoints.down('sm')]:{
    marginTop:'-20px',
  }
}
}));
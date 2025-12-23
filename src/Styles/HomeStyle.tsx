import { makeStyles } from "tss-react/mui";
import type { Theme } from "@mui/material";
import BackgroundAnimationGif from '../assets/Background Animation.gif'
export const useMainStyles=makeStyles<{ pathname: string }>()((theme: Theme, { pathname })=>({
   
    homeStyleContainer:{
      backgroundImage:`url(${BackgroundAnimationGif})`,
      backgroundSize:'cover',
      backgroundPosition:'top',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      padding:0,
      width:"100%",
      minHeight: `calc(100vh - 80px - 200px)`,
      flex:1,
      gap:20,
      [theme.breakpoints.down('sm')]:{
        backgroundPosition:'center',
        backgroundRepeat:'repeat ',
        //alignItems: 'flex-start',
      gap: pathname === '/support' ? 30:10,
     
    }
 },

 
ourProductButton:{
    backgroundColor:'#000000BD',
    fontFamily:'Saira Stencil One',
    borderRadius:'50px',
    textDecoration:'underline',
    fontSize:"14px",
    padding:'6px 70px',
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
  },


BigLifiLogogif:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
   marginLeft:'120px',
  width:'550px',
  height:'200px',
  [theme.breakpoints.down('sm')]:{
    width:'500px',
    height:'150px',
  }  

},

topActionsRow:{
  display:'flex',
  alignItems:'flex-end',
  justifyContent:'center',
  gap:18,
  flexWrap:'nowrap',
  marginTop:12,
},
actionButton:{
  fontFamily: "Nunito",
  fontWeight: 800,
  fontSize: "13px",
  color: "#fff",
  padding: "12px 28px",
  borderRadius: "100px",
  borderTopColor:'#156082',
  borderBottomColor:'#0b2836ff',
  cursor: "pointer",
  textTransform: "uppercase",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#156082",
  zIndex: 0,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  gap:8,
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230f4c66' fill-opacity='1' d='M0,64L120,106.7C240,149,480,235,720,234.7C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'/%3E%3C/svg%3E") no-repeat bottom / cover`,
    zIndex: -1,
    borderRadius: "inherit",
  },
  "& span, & svg": {
    position: "relative",
    zIndex: 2,
  },
},
actionIcon:{
  width:"20px",
  height:"20px",
},
coinPill:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  gap:10,
  padding:'12px 16px',
  minWidth:'30px',
},
coinValue:{
  fontSize:'14px',
  fontWeight:900,
  marginLeft:4,
},
coinWrapper:{
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  gap:6,
  marginTop:0,
},
coinLabel:{
  fontSize:'12px',
  fontWeight:900,
  letterSpacing:'0.6px',
  color:'#0f5f82',
  textTransform:'uppercase',
  marginBottom:2,
},
wideAction:{
  minWidth:'210px',
},
horizontalLine:{
  marginTop:32,
  width:'60%',
  maxWidth:'900px',
  minWidth:'280px',
},
dashrWrapper:{
  width:'100%',
  maxWidth:'720px',
  minHeight:'200px',
  marginTop:4,
},

notifyLiveButton: {
  fontFamily: 'Nunito',
  fontSize: '14px',
  fontWeight: 800,
  padding: "10px 80px",
  borderRadius: '50px',
  marginBottom: '20px',
  border: 'none',
  color: '#fff', 
  position: 'relative',
  backgroundColor: '#2d708d',
  //borderTop: '4px solid #548da1',
  borderBottom: '4px solid #143b4c',
  borderLeft:'1px solid #2e4b55ff',
  borderRight:'1px solid #2e4b55ff',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23155f82' fill-opacity='1' d='M0,192L60,208C120,224,240,256,360,256C480,256,600,224,720,213.3C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  [theme.breakpoints.down('sm')]: {
    padding: "0px 10px",
    height: '50px',
    fontSize: '15px',
    width: '350px',
    marginBottom:'50%'
  },
},

notifyText:{
    marginRight:'18px'
},   

notifyPaper: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '51px',
  padding: '2px 40px 2px 50px',
  width: '100%',
  maxWidth: 500,
  marginBottom: '10px',
  minHeight: '45px',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#2d708d',
  //borderTop: '4px solid #548da1',
  borderBottom: '4px solid #143b4c',
  borderLeft:'1px solid #2e4b55ff',
  borderRight:'1px solid #2e4b55ff',
  "&::after": {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23155f82' fill-opacity='1' d='M0,160L80,181.3C160,203,320,245,480,250.7C640,256,800,224,960,202.7C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'/%3E%3C/svg%3E") no-repeat bottom / cover`,
    zIndex: 0,
  },
"& > *": {
    position: 'relative',
    zIndex: 2,
  },

  [theme.breakpoints.down('sm')]: {
    display:'flex',
    padding: "1px 30px",
    height: '10px',
    fontSize: '14px',
    width: '300px',
    flexDirection: 'row',
    gap: 5,
  },
},

notifyInputbox:{
   ml: 2,
   flex: 1,
   color: 'white',
   borderBottom: '1px solid #ccc',
   paddingBottom: '4px',
   fontSize: '16px',
     "& .MuiInputBase-input": {
      fontSize: "16px", // normal input text
      "&::placeholder": {
        fontSize: "17px",  
        color: "white",    
        opacity: 1, 
      },
    },
},
errormessage:{
  fontSize:14,
  color:'red',
  width:'100%',
  [theme.breakpoints.down('lg')]:{
    width:'90%'
  }
},
notifyMEbutton:{
borderRadius: '50px',
backgroundColor: '#E0E0E0',
color: '#156082',
fontSize:'18px',
fontWeight: 900,
textTransform: 'none',
padding:'0px 16px',
marginLeft:'40px',
'&:hover': {
backgroundColor: '#d5d5d5',
},
'&.Mui-disabled': {
  backgroundColor: '#E0E0E0',
  color: 'grey',
},
[theme.breakpoints.down('sm')]:{
  marginTop:'20px',
  padding:'2px 10px',
  margin:'auto',
  
},
},

gameGoesLiveButton:{
 fontFamily: 'Nunito',
  fontSize: '14px',
  fontWeight: 800,
  padding: "0px 80px",
  borderRadius: '50px',
  marginBottom: '20px',
  border: 'none',
  color: '#fff',
  position: 'relative',
  backgroundColor: '#2d708d',
  //borderTop: '4px solid #548da1',
  borderBottom: '4px solid #143b4c',
  borderLeft:'1px solid #2e4b55ff',
  borderRight:'1px solid #2e4b55ff',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23155f82' fill-opacity='1' d='M0,192L60,208C120,224,240,256,360,256C480,256,600,224,720,213.3C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  [theme.breakpoints.down('lg')]: {
    padding: "30px 40px",
    height: '30px',
    fontSize: '12px',
    width: '98%',
    whiteSpace:'nowrap',
    marginBottom:'50%'
  },
},
rootnotify:{
  [theme.breakpoints.down('lg')]:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    alignContent:'center',
    objectFit:'cover'
  }
},
decisionText:{
    padding:10,
   color:'#156082',
   fontWeight:800,
   fontSize:"20px",
   textAlign:'center',
   [theme.breakpoints.down('sm')]:{
       fontSize:"15px",
       textAlign:'center'
   }
},
//all pages !home
typoContent:{
  padding:25,
  color:'#156082',
  fontSize:24,
  fontFamily:'Nunito',
  fontWeight:600,
  textTransform:'capitalize',
  [theme.breakpoints.down('sm')]:{
    padding:10,
    fontSize:17,
    textAlign: 'left', 
    wordBreak: 'break-word',
  }
},
//contact page
EmainContact:{
 fontSize:24,
 paddingLeft:25,
    [theme.breakpoints.down('sm')]:{
    fontSize:17,
    paddingLeft:13,
  }
},
EmailcontactText:{
  textDecoration:'underline',
  cursor:'pointer',
  fontSize:24,
  color:'#156082',
  [theme.breakpoints.down('sm')]:{
    fontSize:17,
  }
},
//career page
joinOurteam:{
  textAlign:'center',
  color:"#156082",
  fontSize:23,
  fontWeight:800
},
//support page
supportText:{
 textTransform:'uppercase',
 color:'#156082',
 fontWeight:800,
[theme.breakpoints.down('sm')]:{
     fontSize:12,
     textAlign:'center' 
  } 
},

supportImageBox:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
},
commingSoontext:{
  color:'#156082',
  fontSize:26,
  fontWeight:900,
  [theme.breakpoints.down('sm')]:{
    textShadow: '1px 9px 8px rgba(0,0,0,0.5)'
}
},
//play page
playpageContainer:{
display:"flex",
justifyContent:"center",
flexDirection:"column",
alignItems:"center",
gap:30,
marginTop:'10px',
[theme.breakpoints.down("sm")]:{
   display:'flex',
   alignItems:'center',
   justifyContent:'center'
}
},

lifegametextdecisionBox:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  
  [theme.breakpoints.down('sm')]:{
     display:'flex',
    justifyContent:'center',
    alignItems:'center',
       
  }
},
lifegametextdecision:{
  fontSize:19,
  color:theme.customStyles.backgrounds.footer,
  textTransform:"uppercase",
  fontWeight:800,
  [theme.breakpoints.down('sm')]:{
    fontSize:15,
    
  }
},
playLiveButtonbox:{
 fontFamily: 'Nunito',
  fontSize: '14px',
  fontWeight: 800,
  padding: "10px 90px",
  borderRadius: '50px',
  marginBottom: '20px',
  border: 'none',
  color: '#fff', 
  position: 'relative',
  backgroundColor: '#2d708d',
  //borderTop: '4px solid #548da1',
  borderBottom: '4px solid #143b4c',
  borderLeft:'1px solid #2e4b55ff',
  borderRight:'1px solid #2e4b55ff',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23155f82' fill-opacity='1' d='M0,192L60,208C120,224,240,256,360,256C480,256,600,224,720,213.3C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',

  [theme.breakpoints.down('sm')]: {
    padding: "30px 20px",
    height: '50px',
    fontSize: '18px',
  },
},


newExpressiontext:{  
  textTransform:"uppercase",
  fontWeight:800,
  fontSize:19,
  [theme.breakpoints.down('sm')]:{
    fontSize:16, 
  }
},
newExpressionsubtext:{
  fontWeight:700,
  fontSize:16,
  [theme.breakpoints.down('sm')]:{
    fontSize:14,
  }
},
TermsText:{
  color:'#156082',
  fontWeight: 800,       
  fontSize: "36px",
  lineHeight: "48px",
  letterSpacing: "0",
  textAlign: "center",
  textTransform: "uppercase",
  marginBottom:'10px'
},
ContinueButton:{
   width:'168px',
   height:'50px',
   backgroundColor:'#156082',
   color:'#ffffff',
   borderRadius:'30px',
   boxShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.25)',
   fontWeight:800,
   fontSize:'24px',
   px:'20px',
   py:2
},

//  back navigation 
backNavBar: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'fixed', 
  top: 95,
  left: 10,
  zIndex: 2000,
  background: 'transparent', 
  padding: 0,
  margin: 0,
},

backNavIcon: {
  color: '#156082',
  padding: 0,
  margin: 0,
  minWidth: 'auto',
},


//terms and conditions mobile view
termsAgreementText: {
  fontSize: 14,
  color: '#333',
  lineHeight: 1.5,
  fontFamily: 'Nunito',
  wordBreak: 'break-word',
  whiteSpace: 'normal',
  textAlign: 'justify',
  textJustify: 'inter-word',
  [theme.breakpoints.down('sm')]: {
    fontSize: 13,
    textAlign: 'justify',
    width: '100%',
  },
},


}) )    
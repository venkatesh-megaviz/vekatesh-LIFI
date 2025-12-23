import type { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const useAvatarStyles = makeStyles()((theme:Theme) => ({

  avatartButton: {
    backgroundColor: "black",
    fontFamily: "Saira Stencil One",
    borderRadius: "50px",
    textDecoration: "underline",
    fontSize: "14px",
    padding: "6px 30px",
    marginTop: "30px",
    color:'white',
    transition:'none',
    pointerEvents:'none',
    cursor:'default',
    "&:hover": {
      backgroundColor: "black",
    textDecoration: "underline", 
  },
  },
  chipimage:{
    width:'150px',
    height:'150px',
    borderRadius: '90%',
    objectFit: 'cover',
    display: 'block',
    background: 'transparent',
    [theme.breakpoints.down('sm')]:{
     width:'100px',
     height:'100px'
    }
  },
  //chips block
  choosechipButton: {
    backgroundColor: "black",
    fontFamily: "Saira Stencil One",
    borderRadius: "50px",
    textDecoration: "underline",
    fontSize: "14px",
    padding: "6px 50px",
    color:'white',
    transition:'none',
    pointerEvents:'none',
    cursor:'default',
    "&:hover": {
      backgroundColor: "black",
      textDecoration: "underline", 
    },
    
  },

  chipsMarqueeWrapper: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginTop: 20,
    position: "relative",
    width: "100%",
    
  },

  chipsMarqueeContent: {
    display: "inline-flex",
    animation: "scroll 20s linear infinite",
    "&:hover": {
      animationPlayState: "paused",
    },
    "@keyframes scroll": {
      "0%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(-50%)",
      },
    },
  },

  chipsInnerBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    minWidth: 250,
    padding: 10,
    cursor:'pointer'
  },

  chipsLabel: {
    fontWeight: 800,
    fontSize: 20,
    margin: "auto",
    [theme.breakpoints.down('sm')]:{
      fontSize:16
    }
  },

  saveAvatorchip: {
    fontFamily: "Nunito",
    fontWeight: 900,
    fontSize: "15px",
    padding: "8px 40px",
    borderRadius: "25px",
    backgroundColor: "#2d708d",
    borderTop: "4px solid #548da1",
    borderBottom: "4px solid #143b4c",
    borderLeft: "1px solid #2e4b55ff",
    borderRight: "1px solid #2e4b55ff",
    backgroundImage: `url("data:image/svg+xml,%3Csvg ... %3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    marginBottom: 20,
    [theme.breakpoints.down('lg')]:{
      marginBottom:90
    }
  },
 //chips block end

 

}));

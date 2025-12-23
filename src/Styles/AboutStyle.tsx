import { makeStyles } from "tss-react/mui";
import MainbackgroundImg from '../assets/Bg_Grid.png' 
//  import MainbackgroundImg from '../assets/Background Animation.gif'
/* import MainbackgroundImg from '../assets/Background Animation 2.gif' */
/* import type { Theme } from "@mui/material"; */


export const useAboutStyles=makeStyles()((/* theme:Theme */)=>({
subStyleContainer:{
    backgroundImage:`url(${MainbackgroundImg})`,
    backgroundSize:'cover',
    backgroundPosition:'top',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    paddingTop:"30px",
    paddingBottom:"50px", 
    width:"100%",
    gap:30,
},

 }) )    
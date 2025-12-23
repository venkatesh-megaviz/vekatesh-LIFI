import type { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
export const useLayoutStyles=makeStyles()((theme:Theme)=>({
  
    useLayoutStyle:{
       display:"flex",
        flexDirection:"column",
        // minHeight:"100%", 
        
        height:"auto",
        minHeight:"100vh",
        width:"100%",
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            overflow:'hidden'
        }
    }

}) )
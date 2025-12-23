import {Grid,Box, Button, Typography, useMediaQuery,} from '@mui/material'
import { useFooterStyles } from '../Styles/FooterStyle';
import footer_Logo from '../assets/footer_Logo.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/Instagram.png';
import Youtube from '../assets/Youtube.png';
import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import Supportpopup from '../Components/Supportpopup';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store/store';
import { setSupportflag } from '../redux/reducers/auth';
import MobileFooter from './MobileFooter';
import { Fragment } from 'react';
type IProps = {
  classes: {
    [type: string]: string;
  };
};
type socialProps={
  id:number,
  icon:string,
  label:string,
  link:string
};
const socialIocns:socialProps[]=[
  {id:1,icon:Facebook,label:"Facebook",link:'https://www.facebook.com/61579359795575/'},
  {id:2,icon:Instagram,label:"Instagram",link:'https://www.instagram.com/aww_networking'},
  {id:3,icon:Youtube,label:"Youtube",link:'https://www.youtube.com/channel/UCvMLfpZjHUYZfn0KFYsAovA'}
 ]

const leftMenudata=[
  {id:1,menu:"ABOUT",path:"/about"},
  {id:2,menu:"BLOG",path:'/blog'},
]
const rightMenudata=[
  {id:1,menu:"VISION",path:'/vision'},
  {id:2,menu:"CONTACT",path:'/contact'},
] 
const bottomLinks=[
  {id:1,label:"TERMS & CONDITION",path:'/terms-and-conditions'},
  {id:2,label:"PRIVACY POLICY",path:'/privacy-policy'},
  {id:3,label:"SUPPORT",path:'/support'},
  {id:4,label:"FOUNDER",path:'/founder'},
  {id:5,label:"STAKEHOLDER",path:'/stakeholder'},
  {id:6,label:"CAREER",path:'/career'},
]
const Footer = () => {
 const {classes}: IProps =useFooterStyles()
 const IsMobile=useMediaQuery((theme)=>theme.breakpoints.down('lg'))
 const location=useLocation()
let path = location.pathname;
if (path !== "/" && path.endsWith("/")) {
  path = path.slice(0, -1);
}



const navigate=useNavigate()
const dispatch=useDispatch<AppDispatch>()
const token=localStorage.getItem('token') || ''
//support popup
// const[supportflag,setSupportflag]=useState(false);
// const supportClose=()=>{
//    setSupportflag(false)
// }
const navigateToRightmenu=(rightmenu:{path:string})=>{

   if(!token && (rightmenu.path!=='/terms-and-conditions' && rightmenu.path!=='/privacy-policy' && rightmenu.path!=='/stakeholder' && rightmenu.path!=='/stakeholder' && rightmenu.path!== '/contact' )){
     dispatch(setSupportflag(true))
    // setSupportflag(true)   
 }else{
    navigate(rightmenu.path)
   }

}


const renderLeftMenu=()=>(
  <>
    {leftMenudata.map((leftmenu)=>(
      <Button key={leftmenu.id} variant="contained" className={classes.leftButtons}
        onClick={()=>navigate(leftmenu.path)}>
        {leftmenu.menu}
      </Button>
    ))}
  </>
)

const rightMenuData=()=>(
  <>
    {rightMenudata.map((rightmenu)=>(
      <Button key={rightmenu.id} variant="contained" className={classes.rightButtons}
        onClick={()=>navigateToRightmenu(rightmenu)}>
        {rightmenu.menu}
      </Button>
    ))}
  </>
)

const handleBottomLinkClick=(link:{path:string})=>{
  if(link.path==='/support'){
    navigateToRightmenu(link)
    return
  }
  navigate(link.path)
}
 return (
     <Fragment>
     {!IsMobile?<Fragment>
    <Box className={classes.footerContainer}>
      <Grid container className={classes.footerGrid} >
        <Grid size={{xs:4,md:2}}>
          <Box className={classes.leftMenuBox}>
            {renderLeftMenu()}
          </Box>
        </Grid>
        <Grid size={{xs:4,md:8}} display="flex" justifyContent="center" flexGrow={1}>
          <Box className={classes.socialMediaBox}>
            <Box className={classes.footerLogo}component="img" src={footer_Logo}  alt='footlogo'/>
            <Box className={classes.socialIconsBox}>
              {socialIocns.map((icon)=>(
              <NavLink target='blank' key={icon.id} to={icon.link}>
              <Box  className={classes.socialIconsItems} key={icon.id}>
               <Box className={classes.socialIcon}component="img" src={icon.icon} alt={icon.label} />  
                <Typography className={classes.socialText}color='#FFFFFF' fontSize="12px">{icon.label}</Typography>
               </Box>
               </NavLink>
              ))}
           </Box>
           <Supportpopup  text='footer'/>
          </Box>  
        </Grid>
        <Grid size={{xs:4,md:2}}>
          <Box className={classes.rightMenuBox}>
            {rightMenuData()}
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.bottomLinksContainer}>
        {bottomLinks.map((link)=>(
          <Typography
            key={link.id}
            component="button"
            className={classes.bottomLink}
            onClick={()=>handleBottomLinkClick(link)}
          >
            {link.label}
          </Typography>
        ))}
      </Box>
    </Box>
    </Fragment> : (
  <MobileFooter />
)}
    </Fragment>
  )
}

export default Footer
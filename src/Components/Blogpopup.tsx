// import Dialog from '@mui/material/Dialog';
// import { useHeaderStyles } from '../Styles/HeaderStyle';
// import { Box,  Typography } from '@mui/material';
// import CancelButton from '../assets/Cancelbutton.png'

// type IProps={
//     linkflag:boolean,
//     blogclose:()=>void
// }
// const Blogpopup = ({linkflag,blogclose}:IProps) => {
  
//   const {classes} = useHeaderStyles();

// return (
//      <Dialog
//             open={linkflag}
//             onClose={blogclose}
//             PaperProps={{
//             sx: {
//             backgroundColor: 'transparent',
//             boxShadow: 'none',
//             marginBottom:52,
            
            
//           }
//          }}
//         >     
//            <Box className={classes.loginalertbuttonControlls}>
//             <Box  className={classes.loginPopupbox}>
//             <Typography className={classes.holdonPlayer}>
//               LINK COPIED!
//             </Typography>
//             <Typography className={classes.loginaccesstext}>
//               PASTE IT ON AND LET THEM EXPLORE
//             </Typography>
//             </Box>
//             </Box>     
//             <Box className={classes.capImgbox} onClick={blogclose}>
//               <img src={CancelButton} alt='Cancel button' width="70px" height="70px"/>
//             </Box>
//           </Dialog>
//   )
// }

// export default Blogpopup
import Dialog from '@mui/material/Dialog';
import { useHeaderStyles } from '../Styles/HeaderStyle';
import { Box, Typography } from '@mui/material';
import CancelButton from '../assets/Cancelbutton.png';
import { useNavigate } from 'react-router-dom';

type IProps = {
  linkflag: boolean;
  blogclose: () => void;
  type?: "login" | "link"; 
};

const Blogpopup = ({ linkflag, blogclose }: IProps) => {
  const { classes } = useHeaderStyles();
  
  const navigate = useNavigate();
  const token=localStorage.getItem("token") ?? ''
  const handleNavigate = () => {
    navigate('/login', { state: { from: '/blog' } });
    blogclose();
  };

  return (
    <Dialog
      open={linkflag}
      onClose={blogclose}
      PaperProps={{
        sx: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          marginBottom: 52,
        },
      }}
    >
      {token?
       <Box className={classes.loginalertbuttonControlls}>
      <Box  className={classes.loginPopupbox}>
     <Typography className={classes.holdonPlayer}>
      LINK COPIED!
     </Typography>
     <Typography className={classes.loginaccesstext}>
      PASTE IT ON AND LET THEM EXPLORE
 </Typography>
    </Box>
        </Box> :
      <Box className={classes.loginalertbuttonControlls}>
        <Box className={classes.loginPopupbox}>
          <Typography className={classes.holdonPlayer}>
            ACCESS REQUIRED
          </Typography>
          <Typography className={classes.loginaccesstext}>
            You need to <span 
              onClick={handleNavigate} 
              style={{
                color: "white",
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: "underline",
                cursor: "pointer"
              }}
            >
              log in
            </span> to access this feature.
          </Typography>
        </Box>
      </Box>}
      <Box className={classes.capImgbox} onClick={blogclose}>
        <img src={CancelButton} alt='Cancel button' width="70px" height="70px"/>
      </Box>
    </Dialog>
  );
};

export default Blogpopup;

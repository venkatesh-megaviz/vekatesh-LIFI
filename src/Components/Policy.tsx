import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
  DialogActions,
} from "@mui/material";
import { useFooterStyles } from "../Styles/FooterStyle";
import { useNavigate } from "react-router-dom";

type PolicyDialogProps = {
  open: boolean;
};


const PrivacyPolicyDialog = ({ open}: PolicyDialogProps) => {
  const {classes}=useFooterStyles()
  const theme = useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down('xs'))
  const Mobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate=useNavigate();

  return (
    <Dialog
      open={open}
      fullScreen={isMobile} 
      fullWidth={!isMobile} 
      maxWidth={!isMobile ? "xl" : undefined} 
      PaperProps={{
        sx: {
          height: !isMobile ? "100vh" : "auto", 
          width: !isMobile ? "100vw" : "auto", 
          paddingRight:'2%'
        },
      }}
    >
      {/* Dialog Header with Close Button */}
      <DialogTitle sx={{ display: "flex",justifyContent:Mobile ? 'flex-start': 'center', alignItems: "center",paddingLeft:Mobile? 2 :undefined }}>
        <Typography className={classes.DialogBoxTitle}>Privacy policy</Typography>
      </DialogTitle>

      <DialogContent sx={{
            flexGrow: 1,  
            paddingX:!isMobile ? 2 : 2,         
            overflowY: "scroll",//pr:10, 
            WebkitOverflowScrolling: "touch", 
            "&::-webkit-scrollbar": {
              width: 8,        
              backgroundColor: "#f5efefd2",
              borderRadius: 4,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#156082", 
              borderRadius: 4,
              
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
              borderRadius: 4,
              color:'grey'
            },
          }}>
        <Box>
          <Typography className={classes.DialogBoxTextTitle}>
            1. Information We Collect
          </Typography>
          <Typography className={classes.DialogBoxText}>
            <ul style={{margin:0, marginBottom:'15px',paddingLeft:25}}>
                <li>Email address (if you sign up directly).</li>
                <li>Name, email, profile picture (if provided) from third-party logins (Facebook, Google, Apple).</li>
                <li>Device information collected by third-party advertisers for ads.</li>
            </ul>
            We do not collect financial or sensitive personal data.
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>
            2. How We Use Your Information
          </Typography>
          <Typography className={classes.DialogBoxText}>
            <ul style={{margin:0, marginBottom:'15px',paddingLeft:28}}>
                <li>To verify your account and send OTPs.</li>
                <li>To communicate important account-related updates.</li>
                <li>To show relevant advertisements.</li>
                <li>To improve the game experience.</li>
            </ul>
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>
            3. Advertising & Third-Party Services
          </Typography>
          <Typography component="div" className={classes.DialogBoxText}>
             <ul style={{margin:0, marginBottom:'15px',paddingLeft:25}}>
              <li>Ads are shown by third-party networks, which may collect device identifiers and usage information.</li>
               <li>We do not control third-party ad content or data practices.</li>
          </ul>
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>
            4. Data Sharing
          </Typography>
          <Typography component="div" className={classes.DialogBoxText}>
           We do not sell or trade your personal data. We may share information only when required by law or for legal protection.
          </Typography>
                    <Typography className={classes.DialogBoxTextTitle}>
            5. Data Security
          </Typography>
          <Typography component="div" className={classes.DialogBoxText}>
            We use reasonable measures to protect your information but cannot guarantee 100% security.
          </Typography>
                    <Typography className={classes.DialogBoxTextTitle}>
            6. Data Retention
          </Typography>
          <Typography component="div" className={classes.DialogBoxText}>
            <ul style={{margin:0, marginBottom:'15px',paddingLeft:25}}>
                <li>Your data remains while your account is active.</li>
                <li>If you delete your account, we will remove your data within a reasonable period.</li>
            </ul >
          </Typography>
                    <Typography className={classes.DialogBoxTextTitle}>
            7. Children’s Privacy
          </Typography>
          <Typography component="div" className={classes.DialogBoxText}>
          LiFi is designed for all ages. Children should use the app under parental or guardian supervision.
          </Typography>
        <Typography className={classes.DialogBoxTextTitle}>
            8. Your Rights
          </Typography>
          <Typography component="div" className={classes.DialogBoxText}>
            <ul style={{margin:0, marginBottom:'15px',paddingLeft:25}}>
                <li>Request account deletion.</li>
                <li>Update account information.</li>
                <li>Opt-out of personalized advertising via device settings.</li>
            </ul>
          </Typography>
          <Typography className={classes.DialogBoxTextTitle}>
            9. Updates to Privacy Policy
          </Typography>
          <Typography component="div" className={classes.DialogBoxText}>
            We may revise this policy from time to time. Changes will be posted in the app.
          </Typography>
          <Typography className={classes.DialogBoxTextTitle}>
            10. Contact Us :
          </Typography>
           <Typography className={classes.DialogBoxText}>
            If you have any questions about this Privacy Policy or Terms,
            contact us at:
            <br />
            <strong>AWW Networking Private Limited</strong>
            <br />
            Email: <a href="mailto:Info@awwnetworking.com" style={{color:'#6B6B6B'}}>Info@awwnetworking.com</a>
            <br />
            Hyderabad, Telangana, India
          </Typography>
          </Box>
      </DialogContent>
      <DialogActions sx={{display:'flex', width: '100%', p: 0 ,justifyContent: Mobile? 'center !important':'flex-end',}}>
        <Box textAlign="right" mt={2} sx={{ width: '100%', textAlign: Mobile ? 'center' : 'right' }}>
            <Button
              variant="contained"
              className={classes.DialogBoxButton}
              onClick={()=>navigate(-1)}
            >
              CONTINUE
            </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;

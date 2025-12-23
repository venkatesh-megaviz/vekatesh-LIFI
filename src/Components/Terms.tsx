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


type TermsDialogProps = {
  open: boolean;
};

const TermsAndConditionsDialog = ({ open, }: TermsDialogProps) => {
  const {classes}=useFooterStyles()
  const theme = useTheme();
  const navigate=useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const Mobile = useMediaQuery(theme.breakpoints.down('md'));
 const handleContinue=()=>{
  navigate(-1);
 }

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
          paddingRight:'2%',
          paddingLeft:'2%'
          

        },
      }}
    >
      {/* Dialog Header with Close Button */}
      <DialogTitle sx={{ display: "flex", justifyContent:Mobile ? 'flex-start': 'center', alignItems: "center",paddingLeft:Mobile? 2 :undefined }}>
        <Typography className={classes.DialogBoxTitle}>{Mobile ?'Terms & Conditions':'Terms and Conditions'}</Typography>
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
            1. Acceptance of Terms
          </Typography>
          <Typography className={classes.DialogBoxText}>
            By creating an account or using LiFi, you agree to these Terms and
            our Privacy Policy.
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>
            2. Eligibility
          </Typography>
          <Typography className={classes.DialogBoxText}>
            LiFi is designed for all age groups. If you are under the legal age
            in your country, you should use the app under parental or guardian
            supervision.
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>
            3. Account Registration & Login
          </Typography>
          <Typography component="div" className={classes.DialogBoxText}>
            <ul style={{margin:0, marginBottom:'15px',paddingLeft:20}}>
              <li>You may sign up using:</li>
              <li><b>Email + OTP </b>(our direct method), or</li>
              <li><b>Third-party accounts</b> such as Facebook, Google, or Apple.</li>
              <li>If you choose third-party login, we will receive your name and
                email address from the provider.</li>
              <li>You are responsible for maintaining the security of your login
                credentials.</li>
            </ul>
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>
            4. Fair Play & Conduct
          </Typography>
          <Typography component="div" className={classes.DialogBoxText}>
            You agree to :
            <ul style={{margin:0, marginBottom:'15px',paddingLeft:20}}>
              <li>Play fairly and avoid cheats, hacks, or exploits.</li>
              <li>Not use vulgar, abusive, or offensive language.</li>
            </ul>
          </Typography>
          <Typography className={classes.DialogBoxTextTitle}>5. Data Collection & Use</Typography>
          <Typography component="div" className={classes.DialogBoxText}>
            <ul style={{margin:0, marginBottom:'15px',paddingLeft:20}}>
              <li>We collect only the information needed for account creation and communication (such as email).</li>
              <li>Additional details (like name and profile picture) may be provided by Facebook, Google, or Apple if you choose those login methods.</li>
              <li>We do not sell your data.</li>
            </ul>
          </Typography>
          <Typography className={classes.DialogBoxTextTitle}>6. Monetization & Ads</Typography>
          <Typography className={classes.DialogBoxText}>
             <ul style={{margin:0, marginBottom:'15px',paddingLeft:20}}>
            <li>LiFi is free to play.</li>
            <li>The app displays third-party ads.</li> 
            <li>We are not responsible for the content, quality, or accuracy of ads shown.</li>
          </ul>
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>7. Intellectual Property</Typography>
          <Typography className={classes.DialogBoxText}>
            All rights, trademarks, designs, and content in LiFi belong to <b>AWW Networking Private Limited</b>.
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>8. Service Availability & Updates</Typography>
          <Typography className={classes.DialogBoxText}>
            We may update or temporarily suspend the app for improvements or maintenance. Access is not guaranteed to be uninterrupted.
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>9. Limitation of Liability</Typography>
          <Typography component="div" className={classes.DialogBoxText}>
                    We are not responsible for:
             <ul style={{margin:0, marginBottom:'15px',paddingLeft:20}}>
              <li> service downtime, bugs, or delays in updates.</li>
              <li>Issues caused by third-party ads or login providers (Facebook, Google, Apple) are not our responsibility.</li>
            </ul>
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>10. Termination</Typography>
          <Typography className={classes.DialogBoxText}>
            We may suspend or terminate accounts that violate these Terms.
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>11. Changes to Terms</Typography>
          <Typography className={classes.DialogBoxText}>
            We may update these Terms at any time. Continued use of LiFi means you accept the updated Terms.
          </Typography>

          <Typography className={classes.DialogBoxTextTitle}>12. Governing Law</Typography>
          <Typography className={classes.DialogBoxText}>
            These Terms are governed by the laws of <b>India </b>, with exclusive jurisdiction in the courts of <b> Hyderabad, Telangana</b>.
          </Typography>
          </Box>
      </DialogContent>
      <DialogActions sx={{display:'flex', width: '100%', p: 0 ,justifyContent: Mobile? 'center !important':'flex-end',}}>
        <Box textAlign="right" mt={2} >
            <Button
              variant="contained"
              className={classes.DialogBoxButton}
              onClick={handleContinue}
            >
              CONTINUE
            </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default TermsAndConditionsDialog;

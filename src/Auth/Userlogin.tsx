import {
  Alert,
  FormControl,
  IconButton,
  TextField,
} from "@mui/material"
import { Box, Button, Divider, Typography} from "@mui/material"
import Biglogo from "../Utilities/Biglogo"
import { useMainStyles } from "../Styles/HomeStyle"
import { useAuthStyles } from "./LoginStyles"
import Userpic from '../assets/M_Avatar2.png'
import CoinIcon from '../assets/LiFi_Coin.png'
import { useLocation, useNavigate } from "react-router-dom"
import happyExpression from '../assets/Happy_Expression.png'
import HappyExpression from "../assets/M_Avatar_1.png";
import {  useState } from "react"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useFooterStyles } from '../Styles/FooterStyle';
import CloseIcon from '@mui/icons-material/Close';
import { Profile, ReferalCode, setCoinsSteps } from "../redux/reducers/auth"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../redux/store/store"
import CircularLoader from "../Utilities/CircularLoader"
import { showToast } from "../Utilities/Toast"
import { avatarImages } from "../Utilities/ImagesDb"
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterImg from '../assets/prime_twitter.png';

const Userlogin = () => {
  const location = useLocation();
  const local_step = localStorage.getItem('step') || ''
  const { classes: mainClasses } = useMainStyles({pathname:location.pathname});
  const { classes: authClasses } = useAuthStyles();
  const { classes } = useFooterStyles()
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, step } = useSelector((state: RootState) => state.auth)
  localStorage.setItem('isReferred',data?.user?.isReferred?'true':'false')

  const path = location.pathname;
  const navigate = useNavigate();
  const [value, setValue] = useState(false);
  // State management
  const [uidnum, setUidNumb] = useState('');
  const [uiderror] = useState('');
  const isReferred = localStorage.getItem('isReferred') || false
  const Message = `I’m playing LiFi 🎲 — a game of life with rewards and challenges! Join me using my UID: *${data?.user?.UID}* and check it out here: https://www.awwnetworking.com/`;


  const socialIcons = [
    {
      id: 1,
      icon: <FacebookIcon sx={{ color: "#156082", fontSize: 30 }} />,
      link: `https://www.facebook.com/sharer/sharer.php?u=https://www.awwnetworking.com/&quote=${encodeURIComponent(
        Message
      )}`,
      popup: "width=550,height=650,left=24,top=24,scrollbars,resizable",
    },
    {
      id: 2,
      icon: <WhatsAppIcon sx={{ color: "#156082", fontSize: 30 }} />,
      link: `https://wa.me/?text=${encodeURIComponent(Message)}`,
      popup: "width=900,height=550,left=24,top=24,scrollbars,resizable",
    },
    {
      id: 3,
      icon: <img src={TwitterImg} alt="twitter" style={{ width: 22, height: 22, objectFit: 'contain' }} />,
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(Message)}`,
      popup: "width=550,height=450,left=24,top=24,scrollbars,resizable",
    },
  ];




  const uidChangeHandler = (event: any) => {
    setUidNumb(event.target.value);
  }

  const handleSubmit = async () => {
    switch (path) {
      case '/referalid':
        dispatch(setCoinsSteps(2))
        localStorage.setItem('step', '2')

        setTimeout(()=>{
          navigate('/claimcoin')
        },100)
       
      
        break;


      case '/claimcoin': {

        const data = {
          referalcode: uidnum
        }
        const response = await dispatch(ReferalCode({ data }));
        const fullfiled = response.payload
        if (fullfiled?.status) {
          dispatch(setCoinsSteps(3));
          localStorage.setItem('step', '3');
          await dispatch(Profile())
          showToast(true, "Coins Claimed Successfully!");
          setTimeout(() => {
            navigate('/referalcomplete');
          }, 200)
        }
        else {
          showToast(false, fullfiled?.message);
          dispatch(setCoinsSteps(1));
          localStorage.setItem('step', '1');
          setUidNumb('');
          setTimeout(() => {
            navigate('/referalid')
          }, 200)

        }
        break;
      }
      case '/referalcomplete':
        dispatch(setCoinsSteps(4))
        localStorage.setItem('step', '4')
        navigate('/')

        break;
    }
  }

  const result = avatarImages.find((x) => x.id === data?.user?.avatar);
  const textToCopy = data?.user?.UID
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setValue(true);
    setTimeout(() => {
      setValue(false);
    }, 1000);
  };
  const Removereferal = () => {
    navigate('/')
  }

  
  
  return (
    <Box className={mainClasses.homeStyleContainer}>
      {loading && <CircularLoader />}
      <Box mt={2}>
        <Biglogo />
      </Box>

      <Box className={authClasses.welcomelifiBox}>
        <Typography className={authClasses.welcomeLifiTextlogin}>
          WELCOME BACK TO LiFi
        </Typography>
      </Box>

      <Typography color="#156082" fontWeight="700" className={authClasses.Rollyourlucktext}>
        Roll Your Luck. Continue Your Journey
      </Typography>

      <Box className={authClasses.authWrapper} >
        <Box className={authClasses.userImgcontainer}>
          {((step === 1 || local_step === '1') || (step === 4 || local_step === '4')) &&
            (
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{ marginRight: '20px' }} />
                <img src={result?.img ? result?.img : Userpic} alt='user pic' width="130px" height="160px" />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button sx={{ width: 50, height: 50, borderRadius: '50%', padding: 0, minWidth: 0, boxShadow: '0px 2px 3px 0px rgba(0, 0, 0, 0.25)', backgroundColor: '#156082' }} onClick={Removereferal} >{((step === 1 || local_step === '1') || (step === 4 || local_step === '4')) && (<CloseIcon sx={{ color: 'white', width: '33px', height: '33px' }} />)}
                  </Button>
                </Box>
              </Box>
            )}
          {(step === 2 || local_step === '2') && <img src={result?.child.img ?? happyExpression} alt='happy expression' width="170px" height="160px" />}
          {(step === 3 || local_step === '3') && (
            <Box sx={{ display: 'flex', flexDirection: 'row'  }}>
          <img src={result?.child.img1 ??  HappyExpression} alt='user pic' style={{marginBottom:'-9.5%',width:'fit-content',objectFit:'cover'}} />
            </Box>
          )}

          <Typography className={authClasses.userNamebutton}>{data?.user?.name}</Typography>
          <Typography className={authClasses.userIdtext}>UID : <span style={{ textDecoration: 'underline', color: 'black', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif', fontSize: '17x', alignItems: 'center' }}> {data?.user?.UID}
            <IconButton onClick={handleCopy}>
              <ContentCopyIcon sx={{ color: "#156082", fontSize: '15px' }} />
            </IconButton>
          </span>{value && <Alert severity="success">UID Copied</Alert>}</Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '20px',
              color: '#156082',
              textAlign: 'center',

              lineHeight: '24px',
            }}
          >
            Share your UID with friends
          </Typography>
          <Box className={classes.socialIconsBox}>
            {socialIcons.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={classes.socialIconsItems}
                style={{ width: '40px' }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(item.link, "shareWindow", item.popup);
                }}
                rel="nofollow"

              >
                <IconButton>
                  {item.icon}
                </IconButton>

              </a>
            ))}
          </Box>
        </Box>
         
        {isReferred==='false'&&<Divider sx={{ border: '1px dashed #156082' }} />}

        <Typography variant="h5" className={authClasses.referalAwardtext}>
          {((step === 1 || local_step === '1' )&& isReferred==='false') && "Enter Your Friend's UID To Claim Referral Reward"}
          {(step === 2 || local_step === '2') && "Referral Successful"}
          {(step === 3 || local_step === '3') && "Claimed! Your wallet has been updated."}
          {((step === 4 || local_step === '4')&&isReferred==='true') && (
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', fontSize: '22px', color: '#156082' }}>
              Share your UID with friends and earn exciting rewards!
            </span>
          )}
        </Typography>




        {(step === 2 || local_step === '2') && (
          <Typography variant="h6" textAlign="center" color="#156082" fontWeight="700">
            Tap to claim your 50 LiFi coins
          </Typography>
        )}

        {/* Input field */}

        {(path === '/referalid' && isReferred === 'false') && <FormControl fullWidth>
          <TextField
            value={uidnum}
            error={!!uiderror}
            helperText={uiderror}
            onChange={uidChangeHandler}
            placeholder="Enter UID"
            className={authClasses.inputFileds}
            type="text"
            size="medium"
          />
        </FormControl>}



        {(step === 1 && local_step === '1' && isReferred === 'false') && <Box className={authClasses.coinsReceiveBox}>
          <img src={CoinIcon} alt='coin icon' width="20px" height="20px" />
          <Typography className={authClasses.coinsreceiveText}>
            Both you and your friend will receive 50 LiFi coins
          </Typography>
        </Box>}


 
           {isReferred==='false'?<Box display="flex" justifyContent="center">
              <Button
                variant="contained"
                className={authClasses.submitButtonReceive}
                onClick={handleSubmit}
                disabled={loading}
              >
                {(step === 1 || local_step === '1') && "Continue"}
                {(step === 2 || local_step === '2') && "Claim"}
                {(step === 3 || local_step === '3') && "Continue"}
              </Button>
            </Box>:(step === 3 || local_step === '3')&&<Box display="flex" justifyContent="center"><Button
                variant="contained"
                className={authClasses.submitButtonReceive}
                onClick={handleSubmit}
                disabled={loading}
              >
                Continue
              </Button>
              </Box>
              }

        {/* Error display */}
        {uiderror && (
          <Typography color="error" textAlign="center" mt={1}>
            {uiderror}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Userlogin;
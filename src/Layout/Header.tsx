import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
} from "@mui/material";
import { useHeaderStyles } from "../Styles/HeaderStyle";
import Lifi_logo from "../assets/LiFi_Logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import COIN from "../assets/COIN.png";
import { useNavigate, useLocation } from "react-router-dom";
import CustomNotification from "../assets/custom notify.png";
import AvatorIcon from "../assets/Avatar_Icon.png";
import PlayIcon from "../assets/Play_Icon.png";
import LoginIcon from "../assets/Login_Icon.png";
import { useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Loginpopup from "../Components/Loginpopup";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store/store";
import { logout, setCoinsSteps, setIsNotify, setLoginOpen, setToken } from "../redux/reducers/auth";
import { avatarImages } from "../Utilities/ImagesDb";
// import { showToast } from "../Utilities/Toast";
// import { auth } from "../firebase/firebaseconfig";
import referal from "../assets/referal.png";
import Logout from "../assets/Logout.png";
import { Dialog } from "@mui/material";
import logoutimg from "../assets/logoutimg.png"
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";
import { setStep } from "../redux/reducers/stepper";




const Header = () => {
  const { data } = useSelector((state: RootState) => state.auth)

  const fauth = localStorage.getItem('f_auth')
  const token = localStorage.getItem('token') || ''
  const theme = useTheme();
  const isNotify = localStorage.getItem('IsNotify')
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { classes } = useHeaderStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const dispatch = useDispatch<AppDispatch>()

  // const [loginopen, setLoginopen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);
  const { loginopen } = useSelector((state: RootState) => state.auth);



  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };


  // Handle login for protected actions (play, avatar)
  const handleLogin = (action: 'play' | 'avatar' | 'support' | 'contact'
  ) => {

    if (action === 'contact') {
      navigate('/contact');
      return;
    }
    if (token) {
      if (action === 'avatar') {
        navigate('/avatar');
      } else if (action === 'play') {
        navigate('/play');
      }
      else if (action === 'support') {
        navigate('/support');
      }

    } else {
      dispatch(setLoginOpen(true));
    }
  };



  const handleNotifyOpen = () => {
    dispatch(setStep(1))
    navigate('/')
  }

  // Navigate to login page
  const gotoLogin = async () => {
    if (!token) {
      navigate('/login')
    }
    else {
      if (fauth) {
        await signOut(auth)
      }
      console.log('hello world')
      handleMenuClose()
      dispatch(setToken(null))
      dispatch(setIsNotify(false))
      localStorage.clear()
      dispatch(setStep(0))
      dispatch(logout())
      navigate('/')

    }

  };


  const result = avatarImages.find((x) => String(x.id) === String(data?.user?.avatar));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleRefreal = () => {
    localStorage.setItem('step', '1')
    dispatch(setCoinsSteps(1));
    const Navigate = data?.user?.isReferred ? '/referalcomplete' : '/referalid'
    navigate(Navigate);
    handleMenuClose()

  }
  return (
    <Box sx={{ position: 'fixed', width: '100%', zIndex: 900, top: 0 }}>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box className={classes.drawerBox}>
          {/* PLAY Button */}
          <Button
            variant="contained"
            className={classes.buttonControlls}
            onClick={() => { handleLogin('play'); setDrawerOpen(false); }}
            startIcon={<img src={PlayIcon} className={classes.PlayIcon} alt='Play' />}
          >
            PLAY YOUR AVATAR
          </Button>


          {/* SELECT AVATAR Button */}
          <Button
            variant="contained"
            className={classes.buttonControlls}
            onClick={() => { handleLogin('avatar'); setDrawerOpen(false) }}
            startIcon={<img src={AvatorIcon} className={classes.AvatorIcon} alt='Avatar' />}
          >
            SELECT AVATAR
          </Button>


          {(isNotify==='false'  || !isNotify )&&<Button
            variant="contained"
            className={classes.buttonControlls}
            onClick={() => { handleNotifyOpen(); setDrawerOpen(false); }}

          >
            NOTIFY ME
          </Button>}

          <Button
            variant="contained"
            className={classes.buttonControlls}
            onClick={() => { navigate('/career'); setDrawerOpen(false); }}
          >
            CAREER
          </Button>

          <Button
            variant="contained"
            className={classes.buttonControlls}
            onClick={() => { navigate('/founder'); setDrawerOpen(false); }}
          >
            FOUNDER
          </Button>

          <Button
            variant="contained"
            className={classes.buttonControlls}
            onClick={() => { navigate('/vision'); setDrawerOpen(false); }}
          >
            VISION
          </Button>

          <Button variant="contained"
            className={classes.buttonControlls}
            onClick={() => { navigate('/terms-and-conditions'); setDrawerOpen(false); }}>
            TERMS & CONDITIONS
          </Button>

          <Button variant="contained"
            className={classes.buttonControlls}
            onClick={() => { navigate('/privacy-policy'); setDrawerOpen(false); }}>
            PRIVACY POLICY
          </Button>

          <Button variant="contained"
            className={classes.buttonControlls}
            onClick={() => { navigate('/stakeholder'); setDrawerOpen(false); }}>
            STAKEHOLDER
          </Button>

          {/* LiFi COINS Display */}
          <Box className={classes.coinBox} mt={2} width='100%' >
            <Typography className={classes.lifiCointext}>
              LiFi COINS
            </Typography>
            <Button
              variant="contained"
              className={classes.buttonControlls}
              title="Click to refresh coin count"
              startIcon={<img src={COIN} className={classes.LifiCoin} alt='Lifi Coin' />}
            >

              <Box component="span" className={classes.coinNumber}>
                {data?.user?.coins ?? 0}
              </Box>
            </Button>
          </Box>
        </Box>
      </Drawer>

      <AppBar position="static" className={classes.appBar} >
        <Toolbar className={classes.toolBar}>

          {/* Left: Logo + Notification */}
          <Box className={!isMobile ? classes.logoContainer : classes.logoContainerMobile}>
            <Box>
              {isMobile && (

                <IconButton onClick={toggleDrawer(true)} sx={{ position: 'absolute', left: -15, width: 30, height: 30, padding: 0, marginTop: '12px', border: `1px solid ${theme.customStyles.backgrounds.footer}` }}>
                  <MenuIcon sx={{ fontSize: 20 }} />
                </IconButton>
              )}
              <img
                src={Lifi_logo}
                alt="LIFI_logo"

                className={!isMobile ? classes.lifi_logo : classes.mobile_lifi_logo}
                onClick={() => navigate("/")}
              />
            </Box>

            {isMobile && !isHome &&
              <Box  >
                <Button
                  variant="contained"
                  className={`${classes.buttonControlls} ${classes.loginButton}`}
                  onClick={token ? handleMenuClick : gotoLogin}

                  sx={{ whiteSpace: 'nowrap' }}
                >
                  <Box
                    component="img"
                    src={token && result?.img ? result.img : LoginIcon}
                    className={classes.LoginIcon}
                    alt="Login"
                  />
                  {token ? data?.user?.name.length > 5 ? `${data?.user?.name.slice(0, 5)}...` : data?.user?.name ?? "PROFILE" : "LOGIN"}
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  PaperProps={{ sx: { width: '208px', height: 'auto' } }}
                >

                  <MenuItem
                    sx={{ display: 'flex', gap: 2 }}
                    onClick={handleRefreal}
                  >
                    <Box component="img" src={referal} alt="referalIcon" />
                    <Typography sx={{ textTransform: 'uppercase', fontSize: '17px', fontWeight: 900, color: '#156082' }}>
                      Referal
                    </Typography>
                  </MenuItem>

                  <MenuItem sx={{ display: 'flex', gap: 2 }} onClick={() => {
                    handleMenuClose?.();
                    setLogoutConfirmOpen(true);
                  }}>
                    <Box component="img" src={Logout} alt="logoutIcon" />
                    <Typography sx={{ textTransform: 'uppercase', fontSize: '17px', fontWeight: 900, color: '#E62310' }}> logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>}
            {(!isMobile && (isNotify==='false' ||  !isNotify )) && (<Box className={classes.notificationIconBox}>
              <Box
                component="img"
                src={CustomNotification}
                className={classes.customNotifyIcon}
                onClick={() => navigate("/")}
                alt="Notification"
              />
             <Button
                variant="contained"
                className={classes.notifyButton}
                onClick={handleNotifyOpen}

              >
                NOTIFY ME
              </Button>
            </Box>)}


          </Box>

          {/* Right: Control Buttons (hidden on home per new layout) */}
          {!isMobile && !isHome && (
            <Box className={classes.controlledButtons}>
              {/* PLAY Button */}
              <Button
                variant="contained"
                className={classes.buttonControlls}
                onClick={() => handleLogin('play')}
                startIcon={<img src={PlayIcon} className={classes.PlayIcon} alt='Play' />}
              >
                PLAY
              </Button>

              {/* SELECT AVATAR Button */}
              <Button
                variant="contained"
                className={classes.buttonControlls}
                onClick={() => handleLogin('avatar')}
                startIcon={<img src={AvatorIcon} className={classes.AvatorIcon} alt='Avatar' />}
              >
                SELECT AVATAR
              </Button>

              {/* LiFi COINS Display */}
              <Box className={classes.coinBox}>
                <Typography className={classes.lifiCointext}>
                  LiFi COINS
                </Typography>
                <Button
                  variant="contained"
                  className={classes.buttonControlls}
                  title="Click to refresh coin count"
                  startIcon={<img src={COIN} className={classes.LifiCoin} alt='Lifi Coin' />}
                >
                  <Box component="span" className={classes.coinNumber}>
                    {data?.user?.coins || 0}
                  </Box>
                </Button>
              </Box>

              {/* LOGIN/PROFILE Button */}
              <Button
                variant="contained"
                className={`${classes.buttonControlls} ${classes.loginButton}`}
                onClick={token ? handleMenuClick : gotoLogin}
                startIcon={<Box
                  component="img"
                  src={token && result?.img ? result.img : LoginIcon}
                  className={classes.LoginIcon}
                  sx={{ height: '23px', width: '23px' }}
                  alt="Login"
                />}
              >
                {token ? data?.user?.name ?? "PROFILE" : "LOGIN"}
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{ sx: { width: '208px', height: 'auto' } }}
              >
                <MenuItem
                  sx={{ display: 'flex', gap: 2 }}
                  onClick={handleRefreal}
                >
                  <Box component="img" src={referal} alt="referalIcon" />
                  <Typography sx={{ textTransform: 'uppercase', fontSize: '17px', fontWeight: 900, color: '#156082' }}>
                    Referal
                  </Typography>
                </MenuItem>

                <MenuItem sx={{ display: 'flex', gap: 2 }} onClick={() => {
                  handleMenuClose?.();
                  setLogoutConfirmOpen(true);
                }}>
                  <Box component="img" src={Logout} alt="logoutIcon" />
                  <Typography sx={{ textTransform: 'uppercase', fontSize: '17px', fontWeight: 900, color: '#E62310' }}>
                    logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>

        {/* Login Popup */}
        {loginopen && <Loginpopup />}
      </AppBar>

      <Dialog
        open={logoutConfirmOpen}
        onClose={() => setLogoutConfirmOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: "16px",
            padding: "24px 32px",
            width: "400px",
            textAlign: "center",
            boxShadow: "0px 4px 25px rgba(0,0,0,0.25)",
          },
        }}
      >
        {/* Logout Icon */}
        <Box
          component="img"
          src={logoutimg}
          alt="Logout Icon"
          sx={{
            width: 100,
            height: 80,
            margin: "0 auto",
            display: "block",
          }}
        />

        {/* Title Text */}
        <Typography
          sx={{
            color: "#F34646",
            fontSize: "18px",
            fontWeight: 700,
            textAlign: "center",
            mt: 2,
            mb: 3,
          }}
        >
          Are you sure you want to log out?
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            onClick={() => setLogoutConfirmOpen(false)}
            sx={{
              borderColor: "#F34646",
              color: "#F34646",
              width: "120px",
              height: "35px",
              borderRadius: "8px",
              fontWeight: 600,
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "#fff5f5" },
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              setLogoutConfirmOpen(false);
              gotoLogin();
            }}
            sx={{
              backgroundColor: "#F34646",
              color: "#fff",
              width: "120px",
              height: "35px",
              borderRadius: "8px",
              fontWeight: 600,
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "#F34646" },
            }}
          >
            Log Out
          </Button>
        </Box>
      </Dialog>

    </Box>
  );
};

export default Header;
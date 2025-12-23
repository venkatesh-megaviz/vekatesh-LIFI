import { Box, useMediaQuery, useTheme } from "@mui/material"
import Header from "./Header"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"
import { useLayoutStyles } from "../Styles/LayoutStyle"
import { useMainStyles } from "../Styles/HomeStyle"
import { useEffect, useState } from "react"
import { validateEmail } from "../Utilities/validations"
import { Profile, UpdateProfile } from "../redux/reducers/auth"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../redux/store/store"
import { listenForMessages, requestFcmToken } from "../firebase/firebaseconfig"


type IProps = {
  classes: {
    [type: string]: string;
  };
};

const Layout = () => {
  const location = useLocation()
  const token = localStorage.getItem('token')
  const dispatch = useDispatch<AppDispatch>()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { classes: LayoutStyle }: IProps = useLayoutStyles();
  const { classes } = useMainStyles({ pathname: location.pathname });
  useEffect(() => {
    async function getData() {
      if (!token) return;

      const response = await dispatch(Profile());
      const fulfilled = response.payload;
      const dbToken = fulfilled?.user?.fcmtoken;
      const currentFcmToken = await requestFcmToken();
      if (!dbToken || dbToken !== currentFcmToken) {
        await dispatch(UpdateProfile({ data: { fcmtoken: currentFcmToken } }));
      }

    }

    getData();
  }, [dispatch, token]);
  useEffect(() => {
    const setupNotifications = async () => {
      try {
        const token = await requestFcmToken();
        if (token) {
          listenForMessages()
        }
      } catch (error) {
        console.error('Error setting up notifications:', error);
      }
    };

    setupNotifications();
  }, []);

  useEffect(() => {
    const element = document.getElementById('scrollTop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname])



  const isHome = location.pathname === "/"

  //notifyme notification

  const [desicionflag, setDecisonflag] = useState(false)



  //emailerrorhandling
  const [errornotifyMe, setErrornotifyMe] = useState('')

  const makeDecisionCount = (emailInputnotify: string) => {
    let tempEmail = validateEmail(emailInputnotify)
    if (tempEmail) {
      setErrornotifyMe("");
      setDecisonflag((prev) => !prev)
    } else {
      setErrornotifyMe("Enter valid Email ID")
    }
  }

  return (
    <Box className={LayoutStyle.useLayoutStyle}>
      {(isMobile || location.pathname !== '/blog') && <Header />}
      <Box component="main" sx={{ flex: 1, marginTop: location.pathname !== '/blog' ? '85px' : '0px' }}
        className={isHome ? classes.homeStyleContainer : ''} >
        <Outlet context={{
          desicionflag,

          makeDecisionCount,
          errornotifyMe
        }} />
      </Box>
      {(isMobile || location.pathname !== '/blog') && <Footer />}

    </Box>
  )
}

export default Layout



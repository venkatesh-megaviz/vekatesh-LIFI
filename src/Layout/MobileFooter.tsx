import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FeedIcon from '@mui/icons-material/Feed';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store/store';
import { setFollow, setSupportflag } from '../redux/reducers/auth';
import Supportpopup from '../Components/Supportpopup';
import SocialMedia from './Common/SocialMedia';

export default function MobileFooter() {
  const [value, setValue] = React.useState<number | null>(null);
  const [popupType, setPopupType] = React.useState<string>('');
   
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const location=useLocation()
  const pathname=location.pathname
  const handleNavigation = (path: string, newValue: number) => {
    setValue(newValue);

    if (!token && path === '/support') {
      navigate(path);
      setTimeout(()=>{
        dispatch(setSupportflag(true));
        setPopupType('support');
      },50)
   
    } else if (path === '/blog') {
      navigate(path);
     
      setPopupType('blog');
    } else {
      navigate(path);
    }
  };

  const handleAddClick = () => {
 dispatch(setFollow(true))
  };

  return (
    <Box>
  <Box sx={{ position: 'absolute', top: 0 }}>
    <SocialMedia />
  </Box>

  <Box
    sx={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      zIndex: 1000,
    }}
  >
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_event, newValue) => setValue(newValue)}
      sx={{
        backgroundColor: '#156082',
        justifyContent: 'space-evenly',
        '& .MuiBottomNavigationAction-root': {
          color: '#FFFFFF',
          minWidth: 0,
          padding: '6px 0',
          '&.Mui-selected': {
            color: '#FFFFFF',
          },
        },
        '& .MuiTouchRipple-root': { display: 'none' },
        '& .MuiSvgIcon-root': { fontSize: '26px' },
        '& .MuiBottomNavigationAction-label': {
          fontSize: '12px',
          fontWeight: 500,
          color: '#FFFFFF',
        },
      }}
    >
      <BottomNavigationAction
        label="About"
        icon={<AccountCircleIcon />}
        onClick={() => handleNavigation('/about', 0)}
      />
      <BottomNavigationAction
        sx={{marginRight:'10%'}}
        label="Blog"
        icon={<FeedIcon/>}
        onClick={() => handleNavigation('/blog', 1)}
      />
      <BottomNavigationAction
       sx={{marginLeft:'10%'}}
        label="Contact"
        icon={<ChatIcon />}
        onClick={() => handleNavigation('/contact', 2)}
      />
      <BottomNavigationAction
        label="Support"
        icon={<SupportAgentIcon />}
        onClick={() => handleNavigation('/support', 3)}
      />
    </BottomNavigation>


    <Fab
      color="primary"
      aria-label="add"
      onClick={handleAddClick}
      sx={{
        position: 'absolute',
        bottom: 25,
        left: '50%',

        transform: 'translateX(-50%)',
        width: 50,
        height: 50,
        border: '3px solid #156082',
        backgroundColor: '#FFFFFF',
        color: '#156082',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        '&:hover': { backgroundColor: '#F0F0F0' },
        zIndex: 1001,
      }}
    >
      <AddIcon sx={{ fontSize: 36 }} />
    </Fab>
  </Box>

  {pathname !== '/blog' && <Supportpopup text={popupType} />}
</Box>

  );
}
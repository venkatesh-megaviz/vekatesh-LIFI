import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store/store';
import { setFollow } from '../../redux/reducers/auth';

export default function SocialMedia() {
  const { follow } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  
  const handleClose = () => {
    dispatch(setFollow(false));
  };

  const handleIconClick = (url: string) => {
    window.open(url, '_blank');
    handleClose();
  };

  return (
    <Dialog
      open={follow}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Follow & Play</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Get game updates, tips, and exclusive content straight to your feed.
        </DialogContentText>
        <DialogActions>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gridGap: '10px',
            }}
          >
            <IconButton
              sx={{
                backgroundColor: '#156082',
                color: '#fff',
                width: 30,
                height: 30,
                padding: 0,
              }}
              onClick={() => handleIconClick('https://www.instagram.com/aww_networking')}
            >
              <InstagramIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: '#156082',
                color: '#fff',
                width: 30,
                height: 30,
                padding: 0,
              }}
              onClick={() => handleIconClick('https://www.youtube.com/channel/UCvMLfpZjHUYZfn0KFYsAovA')}
            >
              <YouTubeIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: '#156082',
                color: '#fff',
                width: 30,
                height: 30,
                padding: 0,
              }}
              onClick={() => handleIconClick('https://www.facebook.com/61579359795575')}
            >
              <FacebookIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
    circulr: {
        position: 'fixed',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 3900,
        background: '#156082',
        padding: '4px',
        boxShadow: '0 0 5px white',
        borderRadius: '50%',
        display: 'flex',
        
        justifyContent: 'center',
        alignItems: 'center',
      },
}));
export type ReactTypedComponent=any;
export default function Loading() {
  const { classes } = useStyles();
  return (
    <Box
      className={classes.circulr}
    >
      <CircularProgress sx={{
          '& .MuiCircularProgress-circle': {
            stroke: 'white', 
          },
        }} 
        thickness={5} 
        size={25}/>
    </Box>
  );
}

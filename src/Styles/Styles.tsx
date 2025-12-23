import type { Theme } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
export const useStyles = makeStyles()((theme:Theme) => ({
    root:{
        color:theme.customStyles.colors.largeScreen,
        [theme.breakpoints.down('sm')]: {
            color:theme.customStyles.colors.smallScreen,
          },
      
          [theme.breakpoints.only('md')]: {
            color:theme.customStyles.colors.mediumScreen,
          },
    }
}))
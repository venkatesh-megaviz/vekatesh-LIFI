import { createTheme} from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme {
    customStyles: {
      colors: {
        smallScreen: string;
        mediumScreen: string;
        largeScreen: string;
      };
      backgrounds:{
        header:string,
        footer:string,
      };
    };
  }
  interface ThemeOptions {
    customStyles?: {
      colors?: {
        smallScreen?: string;
        mediumScreen?: string;
        largeScreen?: string;
      };
      backgrounds?:{
        header?:string,
        footer?:string,
      }
    };
  }
}

const theme = createTheme({
  typography:{
    fontFamily:'Nunito',

  },
  customStyles: {
    colors: {
      smallScreen: 'blue',
      mediumScreen: 'green',
      largeScreen: 'red',
    },
    backgrounds:{
      header:'#F2F2F2',
      footer:'#156082',
    }
  },
});

export default theme;
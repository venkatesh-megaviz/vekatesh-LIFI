import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import theme from './Styles/theme.tsx';
import store from './redux/store/store.ts'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HelmetProvider>
  <BrowserRouter>
   <ThemeProvider theme={theme}>
   <App />
   </ThemeProvider>
   <ToastContainer />
  </BrowserRouter>
  </HelmetProvider>
  </Provider>
  ,
)

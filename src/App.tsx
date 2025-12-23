import React from 'react'
import { Suspense } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'


const App = () => { 
const AppRoutes=React.lazy(()=>import('./Routes/Approutes'))
React.useEffect(() => {
  const initializeServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register(
          '/firebase-messaging-sw.js',
          { scope: '/' }
        );
        await navigator.serviceWorker.ready;

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    } else {
      console.warn('Service Workers not supported in this browser');
    }
  };

  initializeServiceWorker();
}, [])
 
  return (
    <Suspense fallback={<div>Loading....</div>}>
       <GoogleOAuthProvider clientId="512992074764-fapvmlalekm8opi1h8mu2kshk8cq68vk.apps.googleusercontent.com">
     <AppRoutes />
     </GoogleOAuthProvider>
    </Suspense>
   )
}
export default App
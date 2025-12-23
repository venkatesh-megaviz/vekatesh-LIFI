import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { showToast } from "../Utilities/Toast";
import { Profile } from "../redux/reducers/auth";
import store from "../redux/store/store";

const firebaseConfig = {
  apiKey: "AIzaSyDoLL4ogf_MOMzlAJZKhotYZBkUdw3RqL8",
  authDomain: "lifi-e66fb.firebaseapp.com",
  databaseURL: "https://lifi-e66fb-default-rtdb.firebaseio.com",
  projectId: "lifi-e66fb",
  storageBucket: "lifi-e66fb.firebasestorage.app",
  messagingSenderId: "114583176367",
  appId: "1:114583176367:web:64ac5e3e663da74333805a",
  measurementId: "G-7TDC5SLNP5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const messaging = getMessaging(app);

export default app;

export const requestFcmToken = async (): Promise<string | null> => {
  try {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return null;
    }
    const permission = await Notification.requestPermission();
    
    if (permission !== 'granted') {
      console.warn('Notification permission denied');
      return null;
    }
    const token = await getToken(messaging, {
      vapidKey: "BGtykF8jl6Vw9zHcFEAWEqHC5Y3uKX0YM6L36o9m9Te1ya24ti4_F5wRmze5tdmsprbO53dgY47bFUOlfiY6Zp4"
    });
    if (token) {
      
      return token;
    } else {
      console.warn('No registration token available');
      return null;
    }
  } catch (err) {
    console.error("Error getting FCM token:", err);
    return null;
  }
};

export const listenForMessages = () => {
  try {
    onMessage(messaging, (payload) => {
      try {
        
        if (payload.notification) {
          const { title, body, image } = payload.notification;
          showToast(true, body || '');
       
          store.dispatch(Profile());
          if (Notification.permission === 'granted') {
            new Notification(title || 'New Notification', {
              body: body || '',
              icon: image || '/firebase-logo.png',
              data: payload.data
            });
          }
        }
      } catch (error) {
        console.error('Error processing notification:', error);
      }
    });
  } catch (error) {
    console.error('Error setting up message listener:', error);
  }
};
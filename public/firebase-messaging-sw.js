// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyDoLL4ogf_MOMzlAJZKhotYZBkUdw3RqL8",
  authDomain: "lifi-e66fb.firebaseapp.com",
  databaseURL: "https://lifi-e66fb-default-rtdb.firebaseio.com",
  projectId: "lifi-e66fb",
  storageBucket: "lifi-e66fb.firebasestorage.app",
  messagingSenderId: "114583176367",
  appId: "1:114583176367:web:64ac5e3e663da74333805a",
  measurementId: "G-7TDC5SLNP5"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {

  
  const notificationTitle = payload.notification?.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: payload.notification?.image || '/firebase-logo.png',
    badge: '/badge-icon.png',
    data: payload.data,
    tag: payload.data?.tag || 'default',
    requireInteraction: false,
    vibrate: [200, 100, 200],
    actions: [
      {
        action: 'open',
        title: 'Open'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };

 self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {

  
  event.notification.close();

  // Handle action buttons
  if (event.action === 'close') {
    return;
  }

  // Open or focus the app
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // If there's a URL in the notification data, open it
        const urlToOpen = event.notification.data?.url || '/';
        
        // Check if there's already a window open with the same origin
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            return client.focus().then(() => {
              // Navigate to the URL if needed
              if (urlToOpen !== '/' && client.navigate) {
                return client.navigate(urlToOpen);
              }
              return client;
            });
          }
        }
        
        // If no window is open, open a new one
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Handle notification close
self.addEventListener('notificationclose', (event) => {d
});

self.addEventListener('install', (event) => {
 
  self.skipWaiting();
});

// Service worker activate event
self.addEventListener('activate', (event) => {

  event.waitUntil(clients.claim());
});
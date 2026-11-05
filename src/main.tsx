import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);

// Register Service Worker for PWA (Installable App & Offline Capabilities)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('PWA ServiceWorker registered successfully with scope:', registration.scope);
    }).catch((err) => {
      console.warn('PWA ServiceWorker registration failed:', err);
    });
  });
}

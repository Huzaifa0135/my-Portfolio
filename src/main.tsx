import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Tailwind CSS load karne ke liye zaroori hai

// Root element ko pakrein
const rootElement = document.getElementById('root');

// Agar root element mil jaye to App render karein
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element nahi mila! Check karein ke index.html mein <div id='root'></div> mojood hai.");
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

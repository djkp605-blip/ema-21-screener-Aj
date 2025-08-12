import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { getProfile } from './api.js';

getProfile(); // Test API Call

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

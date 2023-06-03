import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/css/bootstrap.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/dropdownmenu.css";
import "../src/assets/css/progress.css";
import "../src/assets/css/sidebar.css";
import "../src/assets/css/style.css";
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>
);

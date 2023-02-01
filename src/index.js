import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import './style.css'
import { BrowserRouter } from "react-router-dom";
// import DefaultVisitorHome from './components/VisitorForms/DefaultVisitorHome'; 
// import NewVisitorForm from './components/VisitorForms/NewVisitorForm';
// import UpdateProfile from './components/VisitorForms/UpdateProfile';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
     
    </BrowserRouter>
  </React.StrictMode>
);
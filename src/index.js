import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Adminview from './components/Adminview/Adminview';
import Form from './components/Form/Form';
import Visitors from './components/Visitors/Visitors';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create" element={<Form />}></Route>
        <Route path="/create/posts" element={<Visitors />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
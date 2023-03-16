import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Head from './Head';
import Main from './Main';
import Footer from './Footer';
import Register from './Register';
// import Sidebar from './Sidebar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  

    </BrowserRouter>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// modified code here

// import React from "react";
// import { ReactDOM } from "react";
// import App from './App';




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <div>
        <Header/>
        <App />
        <Footer/>
    </div>,
    document.getElementById('root')
);
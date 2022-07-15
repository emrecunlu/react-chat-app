import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import SiteProvider from "./context/SiteContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <SiteProvider>
            <App />
        </SiteProvider>
    </BrowserRouter>
);


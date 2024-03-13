import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <DarkModeContext>
   <BrowserRouter>

    <App />


    </BrowserRouter>
    </DarkModeContext>
)
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext';
import { LocaleProvider } from './contexts/LocaleContext';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <LocaleProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </LocaleProvider>
    </BrowserRouter>
);
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./config/theme";
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <CssBaseline/>
            <App/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);

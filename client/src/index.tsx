import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./config/theme";
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
    ,
    document.getElementById('root')
)
;

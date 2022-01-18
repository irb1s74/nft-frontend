import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./config/theme";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";
import {MoralisProvider} from "react-moralis";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;
console.log(SERVER_URL)

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MoralisProvider appId={APP_ID ? APP_ID : ""}
                         serverUrl={SERVER_URL ? SERVER_URL : ""}>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </MoralisProvider>
    </ThemeProvider>,
    document.getElementById("root")
);

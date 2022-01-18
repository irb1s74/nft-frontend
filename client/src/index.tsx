import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./config/theme";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";
import {MoralisProvider} from "react-moralis";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MoralisProvider appId={'0nhiJ3GFtDpAkPgsSvKYw7t3mToPy8bumfcGNVgu'}
                         serverUrl={'https://2jbp80g36vq8.usemoralis.com:2053/server'}>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </MoralisProvider>
    </ThemeProvider>,
    document.getElementById("root")
);

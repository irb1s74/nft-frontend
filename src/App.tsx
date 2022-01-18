import Router from "./components/router/Router";
import {Stack} from "@mui/material";
import LeftMenu from "./components/Menu/LeftMenu";
import RightMenu from "./components/Menu/RightMenu";
import './App.css'


const App = () => {

    return (
        <Stack direction="row">
            <LeftMenu/>
            <Router/>
            <RightMenu/>
        </Stack>
    );
}

export default App
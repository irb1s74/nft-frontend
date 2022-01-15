import {memo} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Dasboard from "../../pages/Dashboard/Dasboard";

const Router = () => {
    const isAuth = false
    return (
        isAuth ? (
            <Routes>
                <Route path={'/'} element={<Dasboard/>}/>
                <Route path={'*'} element={<Navigate to="/"/>}/>
            </Routes>
        ) : (
            <Routes>
                <Route path={'/'} element={<Dasboard/>}/>
                <Route path={'*'} element={<Navigate to="/"/>}/>
            </Routes>
        )
    )
};

export default memo(Router);
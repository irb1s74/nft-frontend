import {memo} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Profile from "../../pages/Profile/Profile";
import Favorites from "../../pages/Favorites/Favorites";
import Create from "../../pages/Create/Create";
import Settings from "../../pages/Settings/Settings";

const Router = () => {
    const {user} = useTypedSelector(state => state.auth)
    const isAuth = !!user.walletAddress
    return (
        isAuth ? (
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'/favorites'} element={<Favorites/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/create'} element={<Create/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'*'} element={<Navigate to="/"/>}/>
            </Routes>
        ) : (
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'*'} element={<Navigate to="/"/>}/>
            </Routes>
        )
    )
};

export default memo(Router);
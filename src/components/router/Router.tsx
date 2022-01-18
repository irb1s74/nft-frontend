import {memo} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Profile from "../../pages/Profile/Profile";
import Create from "../../pages/Create/Create";
import Settings from "../../pages/Settings/Settings";
import Activity from "../../pages/Activity/Activity";
import {useMoralis} from "react-moralis";
import Collection from "../../pages/Collection/Collection";

const Router = () => {
    const {isAuthenticated} = useMoralis();

    return (
        isAuthenticated ? (
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/activity'} element={<Activity/>}/>
                <Route path={'/create'} element={<Create/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/collection'} element={<Collection/>}/>
                <Route path={'*'} element={<Navigate to="/"/>}/>
            </Routes>
        ) : (
            <Routes>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'/activity'} element={<Activity/>}/>
                <Route path={'*'} element={<Navigate to="/"/>}/>
            </Routes>
        )
    )
};

export default memo(Router);
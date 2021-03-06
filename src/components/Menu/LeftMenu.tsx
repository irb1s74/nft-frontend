import React, {memo} from 'react';
import './Menu.scss'
import {Button, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import MovingIcon from '@mui/icons-material/Moving';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import CreateIcon from '@mui/icons-material/Create';
import {useLocation, useNavigate} from "react-router-dom";
import { useMoralis } from "react-moralis";

const LeftMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {authenticate, isAuthenticated , logout } = useMoralis();
    const Login = () => {
        return () => {
            authenticate()
        }
    }
    const Logout = () => {
        return () => [
            logout()
        ]
    }
    const toNavigate = (link: string) => {
        return () => {
            navigate(link)
        }
    }

    return (
        <div className="Menu left">
            <Stack sx={{height: "100%",}} direction="column"
                   justifyContent="space-between"
                   alignItems="center">
                <div className="Dashboard__logo">
                    <Stack direction="row"
                           justifyContent="center"
                           alignItems="center"
                           spacing={2}>
                        <JoinFullIcon fontSize={"large"} color="secondary"/>
                        <Typography color='primary' variant="h5">Place of art</Typography>
                    </Stack>
                </div>
                <List sx={{width: '80%'}} disablePadding={false}>
                    <ListItemButton onClick={toNavigate('/')} selected={'/' === location.pathname}>
                        <ListItemIcon>
                            <DashboardIcon color={'/' === location.pathname ? 'secondary' : 'inherit'}/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItemButton>
                    <ListItemButton onClick={toNavigate('/activity')} selected={'/activity' === location.pathname}>
                        <ListItemIcon>
                            <MovingIcon color={'/activity' === location.pathname ? 'secondary' : 'inherit'}/>
                        </ListItemIcon>
                        <ListItemText primary="Activity"/>
                    </ListItemButton>
                    <ListItemButton onClick={toNavigate('/profile')} selected={'/profile' === location.pathname}
                                    disabled={!isAuthenticated}>
                        <ListItemIcon>
                            <PersonIcon color={'/profile' === location.pathname ? 'secondary' : 'inherit'}/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItemButton>
                    <ListItemButton onClick={toNavigate('/create')} selected={'/create' === location.pathname}
                                    disabled={!isAuthenticated}>
                        <ListItemIcon>
                            <CreateIcon color={'/create' === location.pathname ? 'secondary' : 'inherit'}/>
                        </ListItemIcon>
                        <ListItemText primary="Create"/>
                    </ListItemButton>
                    <ListItemButton onClick={toNavigate('/settings')} selected={'/settings' === location.pathname}
                                    disabled={!isAuthenticated}>
                        <ListItemIcon>
                            <SettingsIcon color={'/settings' === location.pathname ? 'secondary' : 'inherit'}/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItemButton>
                </List>
                <div className="Menu__footer">
                    {isAuthenticated ? (
                            <Button onClick={Logout()} variant={'text'}><LogoutIcon sx={{mr: "10px"}}/>Log out</Button>
                        ) :
                        (
                            <Button onClick={Login()} variant={'text'}>Login</Button>
                        )
                    }
                </div>
            </Stack>
        </div>
    );
};

export default memo(LeftMenu);
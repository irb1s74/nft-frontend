import React, {memo} from 'react';
import './Menu.scss'
import {Button, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import {useLocation} from "react-router-dom";

const LeftMenu = () => {
    let location = useLocation();
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
                        <Typography variant="h5">Place of art</Typography>
                    </Stack>
                </div>
                <List sx={{width: '80%'}} disablePadding={false}>
                    <ListItemButton selected={'/' === location.pathname}>
                        <ListItemIcon>
                            <DashboardIcon color={'/' === location.pathname ? 'secondary' : 'inherit'}/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <FavoriteIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Favorites"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <WalletIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Wallet"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItemButton>
                </List>
                <div className="Menu__footer">
                    <Button variant={'text'}><LogoutIcon sx={{mr: "10px"}}/> Log out</Button>
                </div>
            </Stack>
        </div>
    );
};

export default memo(LeftMenu);
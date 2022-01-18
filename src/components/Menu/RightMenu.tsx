import React, {memo} from 'react';
import './Menu.scss'
import {
    Avatar,
    Divider, List,
    ListItem,
    ListItemAvatar, ListItemText,
    Stack, Typography,
} from "@mui/material";
import BrushIcon from '@mui/icons-material/Brush';
import RestoreIcon from '@mui/icons-material/Restore';
import {deepPurple, green, pink} from "@mui/material/colors";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useMoralis} from 'react-moralis';

const RightMenu = () => {
    const {authenticate, isAuthenticated, logout, user} = useMoralis();
    const nickname = user?.attributes.ethAddress.split('').slice(0, 6).join('') + '...' + user?.attributes.ethAddress.split('').slice(user?.attributes.ethAddress.length - 4, user?.attributes.ethAddress.length).join('')
    return (
        <div className="Menu right">
            <Stack sx={{height: "100%",}} direction="column"
                   justifyContent="space-between"
                   alignItems="center">
                {isAuthenticated && (
                    <React.Fragment>
                        <div className="Menu__header">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{bgcolor: deepPurple[500]}} alt={'irb1s'} src={''}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={nickname}
                                    // secondary={' '}
                                />
                            </ListItem>
                        </div>
                        <Divider sx={{width: '100%'}}/>
                    </React.Fragment>
                )}
                <div className="Menu__content">
                    <Stack sx={{height: "100%",}} direction="column"
                           justifyContent="flex-start"
                           alignItems="center">
                        <div className={'topDrop'}>
                            <Typography variant={'h6'}>Top Drop</Typography>
                            <List>
                                {
                                    Array(3).fill(0).map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemAvatar>
                                                <Avatar sx={{bgcolor: pink[500], width: 40, height: 40}} alt={'item'}>
                                                    <BrushIcon/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={'Geomatro #888'} secondary={'sold at 4.42 ETH'}/>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </div>
                        <div className={'history'}>
                            <Typography variant={'h6'}>History</Typography>
                            <List>
                                {
                                    Array(7).fill(0).map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemAvatar>
                                                <Avatar sx={{bgcolor: green[500], width: 40, height: 40}} alt={'item'}>
                                                    <RestoreIcon/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={'New NFT Upload'} secondary={'By kto-to'}/>
                                            <ListItemText sx={{ml: 1}} secondary={'1h ago'}/>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </div>
                    </Stack>
                </div>
            </Stack>
        </div>
    );
};

export default memo(RightMenu);
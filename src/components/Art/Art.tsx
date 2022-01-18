import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, IconButton, Stack, Typography} from "@mui/material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Art = () => {
    return (
        <Card sx={{maxWidth: 280}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image="https://lh3.googleusercontent.com/Tq08tJ9zxe-Z-71F8Aff0ytenv68w64rHlBrHpYjkE4UyPl68m2F8JKNK1DF1ywW2tlg0Nb8C93WqhVyzFJN2DGzcB7WsAoGlC-Lwg=w600"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Lizard
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    by Putri
                </Typography>
            </CardContent>
            <CardActions>
                <Stack sx={{width: "100%"}} direction="row" justifyContent="space-between"
                       alignItems="center">
                    <Stack direction="row">
                        <LocalAtmIcon color='primary'/>
                        <Typography variant='body1'>0.123</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <IconButton>
                            <FavoriteBorderIcon fontSize="small" color='secondary'/>
                        </IconButton>
                        <Button variant='contained' size="small"> Place a bid</Button>
                    </Stack>
                </Stack>
            </CardActions>
        </Card>
    );
};

export default Art;
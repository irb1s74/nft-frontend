import React, {memo, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {
    Avatar,
    Box,
    Container,
    Grid,
    Stack,
    Tab,
    Tabs,
    Typography,
    SelectChangeEvent,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Button
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import './Profile.scss'
import Art from "../../components/Art/Art";


const Filter = memo(() => {
    const [valueSort, setValueSort] = useState('')
    const handleChange = (event: SelectChangeEvent) => {
        setValueSort(event.target.value as string)
    }
    return (
        <Stack sx={{width: "100%", marginBottom: "20px", marginTop: '20px'}} direction="row"
               justifyContent="space-between"
               alignItems="center">
            <FormControl sx={{width: '200px'}}>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                    value={valueSort}
                    label={'Sort By'}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Following</MenuItem>
                    <MenuItem value={20}>Price: Low to High</MenuItem>
                    <MenuItem value={30}>Price: High to Low</MenuItem>
                </Select>
            </FormControl>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Button variant='filter'>All</Button>
                <Button variant='filter' color='secondary'>Art</Button>
                <Button variant='filter'>Music</Button>
            </Stack>
        </Stack>
    )
})


const ProfileNavigate = memo(() => {
    const [value, setValue] = React.useState(1);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <Box sx={{mt: 6, width: '100%', borderBottom: 1, borderColor: 'divider'}}>
                <Tabs textColor="secondary"
                      indicatorColor="secondary"
                      value={value} onChange={handleChange} centered>
                    <Tab label="On sale"/>
                    <Tab label="Owned"/>
                    <Tab label="Created"/>
                    <Tab label="Favorited"/>
                    <Tab label="Collections"/>
                </Tabs>
            </Box>
            {
                value === 0 || value === 1 && (
                    <>
                        <Filter/>
                        <Grid
                            container
                            spacing={6}
                            columns={{xs: 1, sm: 4, md: 8, lg: 12, xl: 16}}
                        >
                            {
                                Array(6).fill(0).map((card, index) =>
                                    <Grid key={index} item
                                          xs={1}
                                          sm={4}
                                          md={4}
                                          lg={4}
                                          xl={4}
                                    >
                                        <Art/>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </>
                )
            }
        </React.Fragment>
    )

})


const Profile = () => {
    const {user} = useTypedSelector(state => state.auth)
    const isAuth = !!user.walletAddress
    const nickname = isAuth ? user.nickname ? user.nickname : user.walletAddress.split('').slice(0, 6).join('') + '...' + user.walletAddress.split('').slice(user.walletAddress.length - 4, user.walletAddress.length).join('') : ''

    return (
        <main className='Page'>
            <div className='Profile'>
                <Container>
                    <div className='Profile__header'>
                        <div className='banner'>
                            <div className='background-photo '>
                                <img alt=''
                                     src='https://rarible.mypinata.cloud/ipfs/QmdJSCD3Wttjnrh7jhJxcxKmxwsbmUeJkRi5Q7HDvKrx9D'/>
                            </div>
                            <div className='background-hover'>
                                <EditIcon color='secondary' fontSize='large'/>
                            </div>
                        </div>
                        <div className='account-info'>
                            <div className='wrapper-avatar'>
                                <div className='avatar'>
                                    <div className='avatar-hover'>
                                        <EditIcon color='secondary'/>
                                    </div>
                                    <Avatar sx={{
                                        width: '100px', height: '100px', position: "absolute", top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)"
                                    }} alt='aboa'
                                            src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xc1caf0c19a8ac28c41fe59ba6c754e4b9bd54de9/avatar/Qmb56xhzBZkJvG3UD78XBbRkkQ2yKwMPpP56GP5bL1LbBR"/>
                                </div>
                            </div>
                            <Stack sx={{pt: 5}} direction='column' justifyContent='center' alignItems="center">
                                <Typography variant='h6'>{nickname}</Typography>
                            </Stack>
                        </div>
                    </div>
                    <ProfileNavigate/>
                </Container>
            </div>
        </main>
    );
};

export default Profile;
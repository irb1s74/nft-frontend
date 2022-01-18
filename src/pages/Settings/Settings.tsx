import {Box, Button, Container, Stack, TextField, Typography} from "@mui/material";
import {Avatar} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './Settings.scss'
import {deepPurple} from '@mui/material/colors';

const Settings = () => {

    return (
        <main className='Page'>
            <Container maxWidth='md'>
                <Typography variant='h4'>Settings</Typography>
                <form>
                    <Stack sx={{
                        mt: 10,
                        mb: 5,
                        width: "100%",
                    }} direction='column' spacing={5}>
                        <Stack direction="row" spacing={4}>
                            <Box>
                                <Typography sx={{mb: 1}} variant='h6'>Avatar</Typography>
                                <div className='avatar'>
                                    <Avatar sx={{width: '100px', height: '100px', bgcolor: deepPurple[500]}} alt=''
                                            src=''/>
                                    <div className='avatar-hover'>
                                        <EditIcon color='secondary'/>
                                    </div>
                                </div>
                            </Box>
                            <Box sx={{mt: 3}}>
                                <Typography sx={{mb: 1}} variant='h6'>Banner</Typography>
                                <div className='banner'>
                                    <div className='background-photo '>
                                        <img alt=''
                                             src='https://rarible.mypinata.cloud/ipfs/QmdJSCD3Wttjnrh7jhJxcxKmxwsbmUeJkRi5Q7HDvKrx9D'/>
                                    </div>
                                    <div className='background-hover'>
                                        <EditIcon color='secondary' fontSize='large'/>
                                    </div>
                                </div>
                            </Box>
                        </Stack>
                        <Stack sx={{width: "100%"}} direction="column" spacing={4}>
                            <TextField
                                label="Name"
                                color="primary"
                                focused
                            />
                            <TextField
                                label="Bio"
                                color="primary"
                                focused
                                multiline
                                rows={4}/>
                        </Stack>
                    </Stack>
                    <Button type="submit" size={'large'} variant='contained'>Save</Button>
                </form>
            </Container>
        </main>
    );
};

export default Settings;
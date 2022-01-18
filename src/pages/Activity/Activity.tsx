import {Container, Typography} from '@mui/material';
import React from 'react';
import './Activity.scss'

const Activity = () => {
    return (
        <main className='Page'>
            <Container maxWidth='md'>
                <Typography variant='h4'>Activity</Typography>
            </Container>
        </main>
    );
};

export default Activity;
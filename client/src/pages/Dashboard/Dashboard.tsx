import React, {memo, useState} from 'react';
import {
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField
} from "@mui/material";
import './Dashboard.scss'
import Art from "../../components/Art/Art";
import Search from "../../components/Search/Search"

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

const Dashboard = () => {
    return (
        <main className='Page'>
            <Container maxWidth="xl">
                <Search/>
                <Filter/>
                <Grid
                    container
                    spacing={6}
                    columns={{xs: 1, sm: 4, md: 8, lg: 12, xl: 16}}
                >
                    {
                        Array(12).fill(0).map((card, index) =>
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
            </Container>
        </main>

    );
};

export default memo(Dashboard);
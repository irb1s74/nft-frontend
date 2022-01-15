import React from 'react';
import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%', m: "auto"}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search NFT"
            />
            <IconButton type="submit" sx={{p: '10px'}}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
};

export default Search;
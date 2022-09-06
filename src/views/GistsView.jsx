
import React, {useEffect, useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import * as GistService from '../services/GIstService';

function GistsView(){

    const[username,setUserName]=useState("");


    const handleUsernameChange = e =>{
        setUserName(e.target.value);
    }

    const handleSearch = () =>{
        GistService.getListGistsForUser(username)
            .then(result=>{
                console.log("Result: ",result);
            })
            .catch(err=>{
                console.log("ERR: ",err);
            })
    }


    return(
        <Grid container sx={{paddingTop:5}} justifyContent="center">
            <Grid item sx={{bgcolor:'#FFFFFF', padding:2, alignItems:"center" , display:'flex', borderRadius:6, border:5, borderColor: '#268991'}} >
                <TextField
                    inputProps={{bgcolor:'#FFFFFF'}}
                    variant="outlined"
                    label="Username"
                    name="search"
                    value={username}
                    sx={{width:400, marginRight:8, borderRadius:10}}
                    onChange={handleUsernameChange}
                />
                <Button variant="contained" size="large" sx={{textTransform:'none', bgcolor:"#268991"}} onClick={handleSearch}>
                    Search
                </Button>
            </Grid>
        </Grid>
    );
}

export default GistsView;
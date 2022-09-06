
import React, {useEffect, useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import * as GistService from '../services/GistService';
import GistCard from "../components/GistCard";

function GistsView(){

    const [username,setUserName]=useState("");
    const [gistList,setGistList]=useState([]);

    const handleUsernameChange = e =>{
        setUserName(e.target.value);
    }

    const handleSearch = () =>{
        GistService.getListGistsForUser(username)
            .then(result=>{
                if(result.status === 200){
                    result.data.map(item=>{
                        let languages=[];
                        Object.entries(item.files).map(file=>{
                            if(!languages.includes(file[1].language))
                            {

                                languages.push(file[1].language);
                            }
                            return file;
                        })
                        item.languages=languages;
                        return item;
                    })
                    setGistList(result.data);
                }
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

            <Grid container item xs={12} spacing={2}  sx={{padding:10}}>
                {
                    gistList.length>0 ?
                        gistList.map(element=>{
                            return  <Grid item xs={12} md={6} lg={3} sx={{maxHeight:479}}>
                                        <GistCard gist={element} />
                                    </Grid>

                        })
                        : null
                }
            </Grid>
        </Grid>
    );
}

export default GistsView;
import React, {useEffect, useState} from 'react';
import {Avatar, Badge, Box, Card, CardContent, Chip, Grid, Typography} from "@mui/material";

import * as GistService from '../services/GistService';

function GistCard(props){

    const [forks,setForks]=useState('');

    useEffect(()=>{
        GistService.getForksForGist(props.id)
            .then(result=>{
                if(result.data===200){
                    if(result.data.length>0){
                        result.data.sort(function(a,b) {
                            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                        });
                        let latestForks= result.data[0].owner.login;
                        if(result.data.length>1)
                            latestForks+=', '+result.data[1].owner.login;
                        if(result.data.length>2)
                            latestForks+=', '+result.data[2].owner.login;

                        setForks(latestForks);
                    }
                }
            })
            .catch(err=>{
            })
    },[])

    const handleClickView = ()=>{
        console.log("ID: ", props.id);
    }

    return(

        <Card sx={{ width:320,height:415, padding:3, "&:hover":{boxShadow: "1em 0 .9em #268991, -1em 0 .9em #268991", cursor: 'pointer' } }} onClick={handleClickView}>
            <CardContent sx={{height:150, width:'90%'}}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
                    sx={{display:'flex', justifyContent:'center'}}
                >
                    <Avatar src={props.image} sx={{
                        height:"100px",
                        width:"100px"
                    }}/>
                </Badge>
            </CardContent>
            <CardContent sx={{height:80}}>
                <Typography gutterBottom variant="subtitle1" component="div" color="primary" textAlign="center">
                    <Box sx={{ fontWeight: 'bold', m: 1 }}>{props.description!=='' ? props.description : 'No description'}</Box>

                </Typography>
            </CardContent>

            <CardContent>
                <Typography gutterBottom variant="subtitle3" component="div" color="primary" textAlign="left">
                    Latest forks: {forks!=='' ? forks : '-'}
                </Typography>
            </CardContent>

            <CardContent >
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    sx={{maxWidth:480}}
                >
                {
                    props.languages.map(language=>{
                        return  <Grid item >
                                    <Chip label={language} color="primary"/>
                                </Grid>
                    })
                }
                </Grid>

            </CardContent>

        </Card>
    )
}

export default GistCard;
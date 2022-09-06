import React, {useEffect, useState, useMemo} from 'react';
import {useLocation} from "react-router-dom";
import * as GistService from '../services/GistService';
import {Chip, Grid, Link} from "@mui/material";

function DetailedGistView(){

    const [state,setState] = useState(null)

    const { search } = useLocation();


    const query = useMemo(() => new URLSearchParams(search), [search]);

    useEffect(()=>{
        GistService.getGistById(query.get("id"))
            .then(result=>{
                if(result.status===200){
                   setState(result.data);
                }
            })
            .catch(err=>{
                console.log("ERR: ",err);
            })
    },[])

    return(
        <Grid
            container
            spacing={1}
            direction="column"
            alignItems="center"
            justify="center"
            sx={{paddingTop:10}}
        >
            {
                state!==null ?
                Object.entries(state.files).map(file=>{
                    return <Grid item >
                        <a href={file[1].raw_url}>{file[1].filename}</a>
                    </Grid>




                })

                    : <></>
            }
        </Grid>
    );
}
export default DetailedGistView;

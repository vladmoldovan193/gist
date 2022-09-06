import * as React from 'react';
import {Avatar, Badge, Card, CardContent, Typography} from "@mui/material";


function GistCard(props){


    const handleClickView = ()=>{
        console.log('VIEW');
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
                <Typography gutterBottom variant="subtitle3" component="div" color="primary" textAlign="center">
                    {props.description!=='' ? props.description : 'No description'}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default GistCard;
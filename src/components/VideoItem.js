import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({video, onVideoSelect }) => {
    return (
        <Grid item xs={10}>
            <Paper style={{display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
                <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
            </Paper>
            <Paper style={{padding: '5px', textAlign: 'center'}}>
                <Typography variant="subtitle1">
                    <b>{video.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;
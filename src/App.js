import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components';
import youtube from './apis/youtube';

class App extends Component{

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.handleSubmit('Reactjs');
    }

    handleSubmit = async (searchItem) => {
        try {
            const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    key: 'AIzaSyCsRD8DHkJbr0REhp4XIHVf3LTiJcv_CgU',
                    q: searchItem,
                }
            });
            console.log(response);
            this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
        } catch (err) {
            console.log(err);
        }
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <Grid container spacing={10} justify='center'>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={8}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    };
};

export default App;
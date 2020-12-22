import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {

    state = {
        searchItem: ''
     }
    
    handleChange = (e) => this.setState({ searchItem: e.target.value });
    

    handleSubmit = (e) => {

        const { searchItem } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchItem);

        e.preventDefault();
    }
    

    render() {
        return (
            <Paper elevation={6} style={{padding: '20px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth onChange={this.handleChange} label="Search..." />
                </form>
            </Paper>
        );
    };
};

export default SearchBar;
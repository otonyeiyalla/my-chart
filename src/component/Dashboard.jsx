import React, { Component } from 'react';
import CardComponent from './CardComponent';
import {Grid} from '@material-ui/core';


class Dashboard extends Component {
    render() { 
        return (<div><h1>Dashboard</h1>
        <Grid container spacing={3} alignItems={'center'}>
            <Grid item><CardComponent ctitle= {'Card 1'}/></Grid>
            <Grid item><CardComponent ctitle={'Card 2'}/></Grid>
            <Grid item><CardComponent ctitle={'Card 3'}/></Grid>
            <Grid item><CardComponent ctitle={'Card 4'}/></Grid>
            <Grid item><CardComponent ctitle={'Card 5'}/></Grid>
        </Grid>

        </div>  );
    }
}
 
export default Dashboard;
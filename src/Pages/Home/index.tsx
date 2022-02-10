import React from 'react';
import { Grid } from '@material-ui/core';
import AgeingStatement from './../AgeingStatement/index';
import ColumnChart from './../ColumnChart/index';
import RoundChart from './../RoundChart/index';
import ForgetPassword from './../ForgetPassword/index';

const Home = () => {
    return (
        <>
           <Grid container spacing={2}>
               <Grid xs={4}><AgeingStatement/></Grid>
               <Grid xs={4}> <ColumnChart/></Grid>
               <Grid xs={4}><RoundChart/></Grid>
               </Grid> 
               <Grid container spacing={2}>
               <Grid xs={4}><ForgetPassword/></Grid>
               <Grid xs={4}> </Grid>
               <Grid xs={4}></Grid>
               </Grid> 
        </>
    );
};

export default Home;
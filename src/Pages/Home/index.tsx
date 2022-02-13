import React from 'react';
import { Grid } from '@material-ui/core';
import AgeingStatement from './../AgeingStatement/index';
import ColumnChart from './../ColumnChart/index';
import RoundChart from './../RoundChart/index';
import ForgetPassword from './../ForgetPassword/index';
import NewBarChart from '../NewBarChart';
import ChartGraph from './../ChartGraph/index';
import PhoneBuy from './../PhoneBuy/index';
import PointsTable from '../PointsTable/index';

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
               <Grid xs={4}> <NewBarChart/></Grid>
               <Grid xs={4}><PhoneBuy/></Grid>
               </Grid> 
               <Grid container spacing={2}>
<Grid><PointsTable/> </Grid>

               </Grid>
        </>
    );
};

export default Home;
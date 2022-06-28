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
import CoolData from './../CoolData/index';
import CantSign from '../CantSign';
import NewForm from './../NewForm/index';
import PopUpForm from './../PopUpForm/index';
import OverForm from '../OverForm';
import FormStep1 from './../FormStep1/index';
import FormStep2 from './../FormSpep2';
import AreaCharts from './../AreaCharts/index';

const Home = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={4}><AgeingStatement /></Grid>
                <Grid xs={4}> <ColumnChart /></Grid>
                <Grid xs={4}><RoundChart /></Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={4}><ForgetPassword /></Grid>
                <Grid xs={4}> <NewBarChart /></Grid>
                <Grid xs={4}><PhoneBuy /></Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid xs={12}><PointsTable /> </Grid>
                <Grid xs={4}><CoolData /> </Grid>

            </Grid>
            <Grid container spacing={2}>
                {/* <Grid xs={6}><CantSign/> </Grid> */}
                <Grid xs={6}> <NewForm /></Grid>

            </Grid>
            <Grid container spacing={2}>
                <Grid xs={12}><NewForm /> </Grid>
                <Grid xs={6}> <PopUpForm /></Grid>
                <Grid xs={6}> <OverForm /></Grid>
                <Grid xs={6}> <FormStep1 /></Grid>
                <Grid xs={6}> <FormStep2 /></Grid>
                <Grid xs={6}> <AreaCharts /></Grid>
            </Grid>
        </>
    );
};

export default Home;
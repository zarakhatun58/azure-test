import React from 'react';
import { ApexOptions } from "apexcharts";
import { useTheme } from "@mui/material";
import { useStyles } from './Styles';
import { Grid, Typography } from '@material-ui/core';
import  ReactApexChart  from 'react-apexcharts';

interface ApexChartProps { }

const coolData = () => {
    const classes = useStyles();
    const theme = useTheme();
  
    const options: ApexOptions = {
      colors: ["#21C1CE",'#1BAAB5','#19929B', "#157880"],
  
         labels: [" 2019", "2020", "2021"],
         chart: {
           id: "apexchart-example",
           foreColor: theme.palette.grey[700],
           type: 'bar',
           
         },
  
         yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
        },
         plotOptions: {
           bar: {
             distributed: true,
            
             dataLabels: {
               position: "",
             },
             
             // style: {
             //   colors: "#fff",
             //   background: "#ffeb3b",
             // },
             
           
           },
          
         },
   
         xaxis: {
           categories: [
             "Q1",
             "Q2",
             "Q3",
            "Q4",
           ],
         },
         fill: {
          colors: ["#21C1CE",'#1BAAB5','#19929B', "#157880"],
         },
       }
  
  const series= [
           {
             
           data: [20, 40, 50,60, ],
          
           fill: {
            colors: ["#21C1CE",'#1BAAB5','#19929B', "#157880"],
          },
         
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
          },
          labels: {
            showAlways: false,
           
          },
          legend:{
            show: false,
          }
         },
         
       
         
       
       ]
   
    return (
        <>
         <Grid className={classes.Header}>
        <Typography component="div" className={classes.HeaderText}>
          Aging statement
        </Typography>

        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={170}
          width={270}
          padding="10px"
        />
      </Grid> 
        </>
    );
};

export default coolData;
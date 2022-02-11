import React from 'react';
import { useState } from 'react';
import  ReactApexChart  from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import { useTheme } from "@mui/material";

const ColumnChart = () => {
    const theme = useTheme();

    const options: ApexOptions = {
       colors: ['#1BAAB5', '#ABB1B5', '#606C74'],

        
          chart: {
            id: "apexchart-example",
            type: 'bar',
           
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
             
            ],
            labels:{
              show:false
            }
          },
          fill: {
            colors: ["#1BAAB5",'#ABB1B5','#606C74'],
          },
        }

 const series= [
            {
              
            data: [44, 55, 41, ],
            fill: {
              colors: ['#1BAAB5', ],
           },
          },
           {
            data: [53, 32, 13,],
            fill: {
              colors: [ '#ABB1B5', ],
           },
          },
           {
            data: [31, 23, 30, ],
             fill: {
              colors: ['#606C74'],
                  },
          },
           {
            data: [13, 33, 43,],
            fill: {
              colors: ['#1BAAB5',],
              },
             
          },
     
           
       
        
        ]
      
    return (
        <div>
         <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={170}
          width={250}
          padding="1px"
        />    
        </div>
    );
};

export default ColumnChart;
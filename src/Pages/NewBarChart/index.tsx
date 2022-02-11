import React from 'react';
import  ReactApexChart  from 'react-apexcharts';
import { useTheme } from '@mui/material';
import { ApexOptions } from 'apexcharts';

const NewBarChart = () => {
    const theme = useTheme();

    const options: ApexOptions = {
      labels: [" 10", "20", "30", "40"],
      chart: {
        id: "ApexChartProps",
        foreColor: theme.palette.grey[400],
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: "40%",
  
          dataLabels: {
            position: "top",
            // style: {
            //   fontSize: "18px",
            // },
          },
        },
      },
  
      xaxis: {
        categories: ["Q1", "Q2", "Q3", "Q4"],
        position: "bottom",
        labels: {
          show: true,
          style: {
            colors: ["#ABB1B5"],
            fontSize: "13px",
          },
        },
      },
      fill: {
        colors: ["#ABB1B5"],
      },
    };
    const series = [
      {
        data: ["9k", "21k", "31k", "45k"],
      },
    ];
  
    return (
        <div>
             <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={186}
        padding="3px"
        width="330px"
        fontSize="12px"
        Overflow="hidden"
      />
        </div>
    );
};

export default NewBarChart;
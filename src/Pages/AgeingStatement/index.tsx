
/* eslint-disable */
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useStyles } from "./Styles";


interface ApexChartProps { }

const AgeingStatement = () => {
  const classes = useStyles();

  const [chartData, setChartData] = useState({
    options: {
      labels: [" 2019", "2020", "2021"],
      chart: {
        id: "apexchart-example",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "",
          },
          style: {
            color: "#fff",
            background: "#ffeb3b",
          },
        },
      },

      xaxis: {
        categories: [
          "Q1",
          "Q2",
          "Q3",
          "Q4",
          "Q1",
          "Q2",
          "Q3",
          "Q4",
          "Q1",
          "Q2",
        ],
      },
      fill: {
        colors: ["#1BAAB5"],
      },
    },
    series: [
      {
        data: [2, 4, 6, 10, 18, 12, 17, 21, 30, 45],
      },
    ],
  });

  return (
    <>
      <Grid className={classes.Header}>
        <Typography component="div" className={classes.HeaderText}>
          Ageing Statement
        </Typography>

        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={170}
          width={310}
          padding="1px"
        />
      </Grid>
    </>
  );
};

export default AgeingStatement;



import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Styles';
import { Typography } from '@mui/material';
import { Cell, Label, Pie, PieChart } from 'recharts';


const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 180 },
  ];
  const COLORS = ["#1BAAB5", "#ABB1B5"];
const RoundChart = () => {
    const classes = useStyles();
    return (
      <>
        <Box className={classes.Header}>
          <Box>
            <Typography component="div" className={classes.HeaderText}>
              all Product
            </Typography>
            <Box>
              <PieChart width={200} height={140}>
                <Pie
                  data={data}
                  cx={80}
                  cy={60}
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  textAnchor="middle"
                >
                  {/*  <Label
                    value="Total"
                    position="centerTop"
                    style={{ fontSize: "12px",color:"#666666", }}
                 /> */ }
                  <Label
                    value="423"
                    position="center"
                    style={{ fontSize: "25px" }}
                  />
                  {/* <Label
                    value="no's"
                    position="centerBottom"
                    style={{ fontSize: "12px", fontWeight:"bold" }}
                  /> */}
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Typography component="div" className={classes.GeneralColor}>
                <h3>  75 <span>Dollar</span> </h3> <p><span></span> Quantity </p>
              </Typography>
              <Typography component="div" className={classes.MediaColor}>
                <h3>  150 <span>Dollar</span> </h3> <p> <span></span>Quality</p>
              </Typography>
            </Box>
          </Box>
        </Box>
        </>
    );
};

export default RoundChart;
import React from 'react';
import { CartesianGrid, XAxis, Label, YAxis, AreaChart, Tooltip, Legend, Area } from 'recharts';
import  Box  from '@mui/material/Box';
import { useStyles } from './Styles';

const AreaCharts = () => {
 const classes=useStyles()
    const data = [
        {
          name: "Jan",
          InvoiceAmount: 900,
      
          amt: 1000,
        },
        {
          name: "Feb",
          InvoiceAmount: 1450,
      
          amt: 2210,
        },
        {
          name: "Mar",
          InvoiceAmount: 1650,
      
          amt: 2290,
        },
        {
          name: "Apr",
          InvoiceAmount: 1400,
      
          amt: 2000,
        },
        {
          name: "May",
          InvoiceAmount: 1200,
      
          amt: 2181,
        },
        {
          name: "Jun",
          InvoiceAmount: 1650,
      
          amt: 2500,
        },
        {
          name: "Jul",
          InvoiceAmount: 1950,
      
          amt: 2100,
        },
        {
          name: "Aug",
          InvoiceAmount: 2000,
      
          amt: 2100,
        },
        {
          name: "Sep",
          InvoiceAmount: 1750,
      
          amt: 110,
        },
        {
          name: "Oct",
          InvoiceAmount: 1650,
      
          amt: 2100,
        },
        {
          name: "Nov",
          InvoiceAmount: 1800,
      
          amt: 2100,
        },
        {
          name: "Dec",
          InvoiceAmount: 2100,
      
          amt: 2100,
        },
      ];  
    return (
        <div>
        <Box className={classes.PaymentRight}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" >
            <Label value="" offset={0} position="bottom"  />
          </XAxis>
          
          <YAxis 
          label={{value: "", angle: -90, position:"left", textAnchor:"middle", padding:"20"}} 
          />
              
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="InvoiceAmount"
            stackId="0"
            stroke="#90caf9"
            // fill="#e3f2fd"
            fill="#CFECEE"
          />
        </AreaChart>
      </Box>
        </div>
    );
};

export default AreaCharts;
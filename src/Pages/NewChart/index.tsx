
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid, Link, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CoolPointsIcon from "../../Assets/Images/CoolPointsIcon.svg";
import g1 from "../../Assets/Images/g1.png";
import g2 from "../../Assets/Images/g2.png";
import g3 from "../../Assets/Images/g3.png";
import g4 from "../../Assets/Images/g4.png";
import Iphone from "../../Assets/Images/Iphone.png";
import Group365 from "../../Assets/Images/Group 365.png";
import Group366 from "../../Assets/Images/Group 366.png";
import Image39 from "../../Assets/Images/Image 39.png";
import Image40 from "../../Assets/Images/Image 40.png";
import Image42 from "../../Assets/Images/Image 42.png";


import { Button } from '@mui/material';
import { useStyles } from './Styles';

const NewChart = () => {
  const classes = useStyles();

  return (<>
    <Grid className={classes.Header}>
      
      <Box className={classes.ContainerBox}>
        <Box>
          
        </Box>
        <Box>
          <Box>
            <Box className={classes.points}>
              <Typography className={classes.pointsText}>Gifts and Rewards</Typography>
              <Typography component="span" className={classes.totalEarned}>
                Total Cool Points Earned: <span>4152373 </span>

              </Typography>
            </Box>
            <Box> <Typography className={classes.newHeadText}>COINS <span>From 500,000 to 2,250,000</span></Typography></Box>
            <Grid xs={12} className={classes.FullContain}>
              <Grid style={{ padding: "0px 15px",}}>

                <Grid className={classes.CardContainer}>
                  <Typography className={classes.newText}>PTS 500,000</Typography>
                  <Grid><img src={g1} alt="...." className={classes.Coin} /></Grid>
                  <Typography className={classes.gold}>GOLD</Typography>
                  <Typography className={classes.TText}>2 Gram Gold Coin</Typography>
                  <Typography className={classes.priceSecond}>24k(999.9)</Typography>
                  <Typography className={classes.priceText}>476.97 <span>AED</span></Typography>
                  <Button type="submit"   className={classes.redeemBtn}>REDEEM NOW</Button>
                </Grid>
              </Grid>

              <Grid style={{ padding: "0px 15px",}} >

                <Grid className={classes.CardContainer}>
                  <Typography className={classes.newText}>PTS 950,000</Typography>
                  <Grid><img src={g2} alt="...." className={classes.Coin} /></Grid>
                  <Typography className={classes.gold}>GOLD</Typography>
                  <Typography className={classes.TText}>4 Gram Gold Coin</Typography>
                  <Typography className={classes.priceSecond}>24k(999.9)</Typography>
                  <Typography className={classes.priceText}>937.86 <span>AED</span></Typography>
                  <Button type="submit"  className={classes.redeemBtn}>REDEEM NOW</Button>
                </Grid>
              </Grid>
              <Grid  style={{ padding: "0px 15px",}}>

                <Grid className={classes.CardContainer}>
                  <Typography className={classes.newText}>PTS 1,150,000</Typography>
                  <Grid><img src={g3} alt="...." className={classes.Coin} /></Grid>
                  <Typography className={classes.gold}>GOLD</Typography>
                  <Typography className={classes.TText}>5 Gram Gold Coin</Typography>
                  <Typography className={classes.priceSecond}>24k(999.9)</Typography>
                  <Typography className={classes.priceText}>937.86 <span>AED</span></Typography>
                  <Button type="submit"  className={classes.redeemBtn}>REDEEM NOW</Button>
                </Grid>
              </Grid>
              <Grid style={{ padding: "0px 15px",}}>

                <Grid className={classes.CardContainer}>
                  <Typography className={classes.newText}>PTS 2,250,000</Typography>
                  <Grid><img src={g4} alt="...." className={classes.Coin} /></Grid>
                  <Typography className={classes.gold}>GOLD</Typography>
                  <Typography className={classes.TText}>10 Gram Gold Coin</Typography>
                  <Typography className={classes.priceSecond}>24k(999.9)</Typography>
                  <Typography className={classes.priceText}>3799.01 <span>AED</span></Typography>
                  <Button type="submit"  className={classes.redeemBtn}>REDEEM NOW</Button>
                </Grid>
              </Grid>
             
            </Grid>
            <Box> <Typography className={classes.newHeadText}>Phones <span> From 3,000,000 to 4,000,000</span></Typography></Box>
            <Grid className={classes.FullContain}>

              <Grid style={{ padding: "0px 15px",}}>

                <Grid className={classes.middleContain}>
                  <Typography className={classes.newText}>PTS 500,000</Typography>
                  <Grid><img src={Image39} alt="...." className={classes.Coin} /></Grid>
                  <Typography className={classes.gold}>APPLE</Typography>
                  <Typography className={classes.TText}>iPhone 12</Typography>
                  <Typography className={classes.priceSecond}>123GB Midnight 6.1-inch <span>  display</span></Typography>
                 
                  <Typography className={classes.priceText}>2879.00 <span>AED</span></Typography>
                  <Button type="submit"  className={classes.redeemBtn}>REDEEM NOW</Button>
                </Grid>
              </Grid>

              <Grid style={{ padding: "0px 15px",}}>
                <Grid className={classes.middleContain}>
                  <Typography className={classes.newText}>PTS 500,000</Typography>
                  <Grid><img src={Image40} alt="...." className={classes.Coin} /></Grid>
                  <Typography className={classes.gold}>APPLE</Typography>
                  <Typography className={classes.TText}>iPhone 12</Typography>
                  <Typography className={classes.priceSecond}>123GB Midnight 6.1-inch <span>  display</span></Typography>
               
                  <Typography className={classes.priceText}>2879.00 <span>AED</span></Typography>
                  <Button type="submit"  className={classes.redeemBtn}>REDEEM NOW</Button>
                </Grid>
              </Grid>
              <Grid style={{ padding: "0px 15px",}}>
                <Grid className={classes.middleContain}>
                  <Typography className={classes.newText}>PTS 500,000</Typography>
                  <Grid><img src={Image42} alt="...." className={classes.Coin} /></Grid>
                  <Typography className={classes.gold}>APPLE</Typography>
                  <Typography className={classes.TText}>iPhone 12</Typography>
                  <Typography className={classes.priceSecond}>123GB Midnight 6.1-inch <span>  display</span> </Typography>
               
                  <Typography className={classes.priceText}>2879.00 <span>AED</span></Typography>
                  <Button type="submit"  className={classes.redeemBtn}>REDEEM NOW</Button>
                </Grid>
              </Grid>

              <Grid>
                <Typography className={classes.PText}></Typography>
                <Grid className={classes.emptyBox}>
                  <Grid>
                  </Grid>

                </Grid>
              </Grid>

            </Grid>

            <Box> <Typography className={classes.newHeadText}>STAR Ratings<span> From 4,500,000 to 6,000,000</span></Typography></Box>

            <Grid className={classes.FullContain}>


              <Grid style={{ padding: "0px 15px",}}>

                <Grid className={classes.startContain}>
                  <Typography className={classes.newText}>PTS 4,500,000</Typography>
                  <Grid><img src={Group366} alt="...." className={classes.Coin} /></Grid>
                  <Typography className={classes.startText}>4 Star </Typography>

                  <Button type="submit"  className={classes.redeemBtn}>REDEEM NOW</Button>
                </Grid>
              </Grid>
              <Grid style={{ padding: "0px 15px",}}>

                <Grid className={classes.startContain}>
                  <Typography className={classes.newText}>PTS 6000,000</Typography>
                  <Grid><img src={Group365} alt="...." className={classes.Coin} /></Grid>
                  <Typography className={classes.startText}>5 Star </Typography>

                  <Button type="submit"  className={classes.redeemBtn}>REDEEM NOW</Button>
                </Grid>
              </Grid>
              <Grid>

                <Grid className={classes.emptyBox}>

                </Grid>
              </Grid>
              <Grid>

                <Grid className={classes.emptyBox}>

                </Grid>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Box>
    </Grid>
  </>
  );
};

export default NewChart;
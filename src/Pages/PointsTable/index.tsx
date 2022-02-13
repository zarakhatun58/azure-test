import React from 'react';
import { Grid, Box, Link } from '@material-ui/core';
import { Typography } from '@mui/material';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useStyles } from './Styles';
import g1 from "../../Assets/Images/g1.png";
import g2 from "../../Assets/Images/g2.png";
import g3 from "../../Assets/Images/g3.png";
import g4 from "../../Assets/Images/g4.png";
import Iphone from "../../Assets/Images/Iphone.png";
import Group365 from "../../Assets/Images/Group 365.png";
import Group366 from "../../Assets/Images/Group 366.png";
import Image39 from "../../Assets/Images/Image 39.png";
import Image40 from "../../Assets/Images/Image 40.png";

const PointsTable = () => {
    const classes = useStyles();
    return (
        <div>
                    <Grid className={classes.Header}>
            {/* <Typography component="div" className={classes.HeaderText}>
                Cool Points
            </Typography> */}
            <Box className={classes.ContainerBox}>
                <Box>
                    <Box className={classes.boxContainer}>
                        <Box className={classes.middleText}>
                            <Box sx={{ paddingRight: '15px' }}>
                                {/* <img src={CoolPointsIcon} style={{ marginTop: '5px' }} alt="cool points" /> */}
                            </Box>
                            <Box>
                                <Typography>Total Points Earned </Typography>
                                <Typography className={classes.typeText}>45,7985</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Box className={classes.points}>
                            <Typography>Cool Points Table</Typography>
                            <Typography component="div" className={classes.TableHeaderDesc}>
                                {/* <InfoOutlinedIcon /> */}
                                <Typography component="span">
                                    You can select either gifts or dirhams
                                </Typography>
                            </Typography>
                        </Box>
                        <Table className={classes.TableDesignOne}>
                            <TableHead className={classes.TableRowDesign}>
                                <TableRow>
                                    <TableCell >#</TableCell>
                                    <TableCell >
                                        Points
                                    </TableCell>
                                    <TableCell >
                                        Gifts
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                    <TableCell >
                                        Dirhams
                                    </TableCell>
                                    <TableCell >
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell>500,000</TableCell>
                                    <TableCell>
                                        5 Grams Coin
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>450</TableCell>
                                    <TableCell>
                                        <Link href="#" underline="always" className={classes.cell}>
                                            {"Apply"}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        2
                                    </TableCell>
                                    <TableCell>800,000</TableCell>
                                    <TableCell>
                                        8 Grams Coin
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>450</TableCell>
                                    <TableCell>
                                        <Link href="#" underline="always" className={classes.cell}>
                                            {"Apply"}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        3
                                    </TableCell>
                                    <TableCell>700,000</TableCell>
                                    <TableCell>
                                        7 Grams Coin
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>450</TableCell>
                                    <TableCell>
                                        <Link href="#" underline="always" className={classes.cell}>
                                            {"Apply"}
                                        </Link>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        4
                                    </TableCell>
                                    <TableCell>200,000</TableCell>
                                    <TableCell>
                                        2 Grams Coin
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>450</TableCell>
                                    <TableCell>
                                        <Link href="#" underline="always" className={classes.cell}>
                                            {"Apply"}
                                        </Link>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Box className={classes.points}>
                            <Typography>Cool Points Table</Typography>
                            <Typography component="div" className={classes.TableHeaderDesc}>
                                {/* <InfoOutlinedIcon /> */}
                                <Typography component="span">
                                    You can select either gifts or dirhams
                                </Typography>
                            </Typography>
                        </Box>
<Grid className={classes.FullContain}>
    <Grid>
        <Typography className={classes.PText}>PTS 500,000</Typography>
<Grid  className={classes.CardContainer}>
  <Grid><img src={g1} alt="...." className={classes.Coin} /></Grid>  
<Typography className={classes.TText}>2 Grams Coins</Typography>
<Typography className={classes.TText}>Or</Typography>
<Typography className={classes.TText}>450 Dirhams</Typography>
<Link><Typography>APPLY NOW</Typography></Link>
</Grid> 
</Grid>

<Grid>
        <Typography className={classes.PText}>PTS 500,000</Typography>
<Grid  className={classes.CardContainer}>
  <Grid><img src={g2} alt="...." className={classes.Coin} /></Grid>  
<Typography className={classes.TText}>2 Grams Coins</Typography>
<Typography className={classes.TText}>-or-</Typography>
<Typography className={classes.TText}>450 Dirhams</Typography>
<Link><Typography className={classes.TText}>APPLY NOW</Typography></Link>
</Grid> 
</Grid>
<Grid>
        <Typography className={classes.PText}>PTS 500,000</Typography>
<Grid  className={classes.CardContainer}>
  <Grid><img src={g3} alt="...." className={classes.Coin} /></Grid>  
<Typography className={classes.TText}>2 Grams Coins</Typography>
<Typography className={classes.TText}>-or-</Typography>
<Typography className={classes.TText}>450 Dirhams</Typography>
<Link><Typography >APPLY NOW</Typography></Link>
</Grid> 
</Grid>
<Grid>
        <Typography className={classes.PText}>PTS 500,000</Typography>
<Grid  className={classes.CardContainer}>
  <Grid><img src={g4} alt="...." className={classes.Coin} /></Grid>  
<Typography className={classes.TText}>2 Grams Coins</Typography>
<Typography className={classes.TText}>-or-</Typography>
<Typography className={classes.TText}>450 Dirhams</Typography>
<Link><Typography >APPLY NOW</Typography></Link>
</Grid> 
</Grid>
<Grid>
        <Typography className={classes.PText}>PTS 500,000</Typography>
<Grid  className={classes.CardContainer}>
  <Grid><img src={g1} alt="...." className={classes.Coin} /></Grid>  
<Typography className={classes.TText}>2 Grams Coins</Typography>
<Typography className={classes.TText}>-or-</Typography>
<Typography className={classes.TText}>450 Dirhams</Typography>
<Link><Typography >APPLY NOW</Typography></Link>
</Grid> 
</Grid>
</Grid>
<Grid className={classes.FullContain}>
<Grid>
        <Typography className={classes.PText}>PTS 500,000</Typography>
<Grid  className={classes.CardContainer}>
  <Grid><img src={Image39} alt="...." className={classes.Coin} /></Grid>  
<Typography className={classes.TText}>Samsung</Typography>
<Typography className={classes.TText}>-or-</Typography>
<Typography className={classes.TText}>3500 Dirhams</Typography>
<Link><Typography >APPLY NOW</Typography></Link>
</Grid> 
</Grid>
<Grid>
        <Typography className={classes.PText}>PTS 500,000</Typography>
<Grid  className={classes.CardContainer}>
  <Grid><img src={Image40} alt="...." className={classes.Coin} /></Grid>  
<Typography className={classes.TText}>Huawei</Typography>
<Typography className={classes.TText}>-or-</Typography>
<Typography className={classes.TText}>4000 Dirhams</Typography>
<Link><Typography >APPLY NOW</Typography></Link>
</Grid> 
</Grid>
<Grid>
        <Typography className={classes.PText}>PTS 500,000</Typography>
<Grid  className={classes.CardContainer}>
  <Grid><img src={Group366} alt="...." className={classes.Coin} /></Grid>  
<Typography className={classes.TText}>4 Star Ratings</Typography>
<Typography className={classes.TText}>-or-</Typography>
<Typography className={classes.TText}>4500 Dirhams</Typography>
<Link><Typography >APPLY NOW</Typography></Link>
</Grid> 
</Grid>
<Grid>
        <Typography className={classes.PText}>PTS 500,000</Typography>
<Grid  className={classes.CardContainer}>
  <Grid><img src={Group365} alt="...." className={classes.Coin} /></Grid>  
<Typography className={classes.TText}>5 Star Rating</Typography>
<Typography className={classes.TText}>-or-</Typography>
<Typography className={classes.TText}>6000 Dirhams</Typography>
<Link><Typography >APPLY NOW</Typography></Link>
</Grid> 
</Grid>
<Grid>
        <Typography className={classes.PText}></Typography>
<Grid  className={classes.emptyBox}>
  <Grid></Grid>  

</Grid> 
</Grid>

</Grid>
                    </Box>
                </Box>
            </Box>
        </Grid>
        </div>
    );
};

export default PointsTable;
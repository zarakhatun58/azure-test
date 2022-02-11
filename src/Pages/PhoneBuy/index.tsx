import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Typography } from '@mui/material';
import { useStyles } from './Styles';
import { useAppContext } from '../../AppContext';

const PhoneBuy = () => {
    const app = useAppContext();
    const classes = useStyles();
    return (
        <Grid className={classes.Header}>
        <Box className={classes.firstContainer}>
             <Typography component="div" className={classes.HeaderText}>
                  Upcoming Gifts and Rewards
                    </Typography>
             <Typography component="div" className={classes.ViewText}>
                 VIEW ALL
                    </Typography>
                         
                     </Box>
                     <Box className={classes.secContainer}>
        <Grid><img className={classes.phone} src="https://i.ibb.co/p1g079s/Microsoft-Teams-image-3.png" alt=""/>
        </Grid>
        <Grid><img className={classes.phone} src="https://i.ibb.co/zbrNQdc/Microsoft-Teams-image-1.png" alt=""/>
        </Grid>
        <Grid><img className={classes.phone} src="https://i.ibb.co/bWDqPX7/Microsoft-Teams-image-2.png" alt=""/>
        </Grid>          
         </Box>
         <Box className={classes.phoneField}>
             <Typography   component="div" > iPhone 12 <span>PTS 500,000</span> </Typography>
        <Typography className={classes.GalPhone}  component="div" > Galaxy S22 <span>PTS 3,500,000</span> </Typography>
        <Typography  component="div" >P50 Pocket Premium <span>PTS 4,000,000</span> </Typography>
                
        </Box>     
                    {/* <Box>
                        <List>
                            {news &&
                                news.map((newsItem: any, index: any) => {
                                    
                                    const { fields = {} } = newsItem;
                                    let createdDate = moment(fields?.Created).format("MMM DD YYYY");
                                    return (<>
                                        <ListItem key={index} disableGutters={true} className={classes.NewsHeader}>
                                            <Typography component="div" className={classes.NewsText}>
                                                <div dangerouslySetInnerHTML={{ __html: `${fields?.Title}` }} />
                                            </Typography>
                                            <Typography component="span">
                                                <img src={CalenderIcon} /> {createdDate}
                                            </Typography>
                                        </ListItem>
                                    </>
                                    );
                                })}
                        </List>
                    </Box> */}
                </Grid>
    );
};

export default PhoneBuy;
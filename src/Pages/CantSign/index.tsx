import React from 'react';
import { useAppContext } from './../../AppContext';
import { useStyles } from './Styles';
import { UnauthenticatedTemplate } from '@azure/msal-react';
import { Grid, Typography, Button, Box, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
// import logoSymbol  from "../../Assets/Images/logo_symbol.svg";
import { Link } from 'react-router-dom';
import { Autocomplete } from '@mui/material';



interface labelType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

const CantSign = () => {
    const app = useAppContext();
    const classes = useStyles();
    const top100Films = [
        { label: 'cant sign', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
    ]


      return (
          <>
       <UnauthenticatedTemplate>
          <Grid
            container
            spacing={0} >
           
            <Grid item xs={12} className={classes.WelcomeRightContent}>
              <Typography component="div" className={classes.loginContent}>
               
                <Box className={classes.loginBackPage}> 
               
              <Grid>
              <Typography>
                  Cant Sign into your Account?
                </Typography>
                </Grid> 
              <Grid>
              <Typography>If you cant sign into your account, Follow the instructions for help getting back into your account.</Typography>


              </Grid>
               <Grid>
               <Typography   >Select the issue</Typography>
       <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
   </Grid>
              
             
   <Grid container >
       <Box >
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="sign" />}
    />
                 
  </Box>              
 <Grid>
 <Typography variant="h6" className={classes.SignInButton}>
   <Button id="modal" disableElevation={true} disableFocusRipple={true} variant="contained" disableRipple={true} onClick={app.signIn}>Submit</Button>
  </Typography>

 </Grid>
 

  
                   </Grid>
               </Box>
              </Typography>
             
            </Grid>
          </Grid>
        </UnauthenticatedTemplate>
        </>
    );
};

export default CantSign;


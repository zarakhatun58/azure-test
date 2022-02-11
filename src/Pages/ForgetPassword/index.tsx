import { FormGroup, Grid, TextField, Button } from '@material-ui/core';
import React from 'react';
import { Typography } from '@mui/material';
import { Link } from "@mui/material";


const ForgetPassword = () => {
    return (
        <>
        <FormGroup style={{marginLeft:"50px"}} >
            <Typography>Forgot Password</Typography>
      <Grid>
        <TextField
          name="Password"
         
          label="Password"
        />
      </Grid>
      <Grid>
        <TextField name="Confirm Password"  label="Confirm Password" />
      </Grid>
      <Grid>
        <TextField name="email"  label="Email" />
      </Grid>
      
     
      <Grid />
     
      <Grid>
        <Button type="submit" style={{border:"1px solid #004D77", marginTop:"20px", color:"white", backgroundColor:"#ABB1B5"}} >
          Submit
        </Button>
        <Link
                underline="none"
              
                target="_blank"
                href="mailto:jkhatun258@gmail.com"
              >
               <Button type="button"  style={{border:"1px solid black"}}>
          Clear Values
        </Button> 
              </Link>
        
      </Grid>
    </FormGroup>
        </>
    );
};

export default ForgetPassword;
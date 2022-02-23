import * as React from 'react';
import { useForm,Controller, SubmitHandler } from 'react-hook-form';
import { TextField, Checkbox, FormControl, FormGroup,FormControlLabel, Button, Grid, Slide, Radio } from "@material-ui/core";

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useStyles } from './Styles';
import { Box, RadioGroup } from '@material-ui/core';
import  InfoOutlinedIcon  from '@mui/icons-material/InfoOutlined';
import { TransitionProps } from '@mui/material/transitions';
import  FileUploadIcon  from '@mui/icons-material/FileUpload';


interface IFormInputs {
    TextField: string,
    MyCheckbox: boolean,
    firstName:string,
    email:string,
    others:boolean,
    Interests:string,
  }

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function NewForm() {
 

  const classes=useStyles();
    const [open, setOpen] = React.useState(false);
    const { handleSubmit, control,register, reset,watch } = useForm<IFormInputs>();
    const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);
    const others = watch("others");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Help
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Cant Sign into your Account?
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <Typography style={{marginBottom:"15px", fontSize:"14px", color:"#606C74"}}>If you cant sign into your account, Follow the instructions for help getting back into your account.</Typography>
          <Typography className={classes.secText}>Select the issue</Typography> 
          <Box className={classes.points}>
           
          <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="You forgot your password"
      name="radio-buttons-group"
      style={{marginLeft:"1%"}}
    >
      <FormControlLabel value="female" control={<Radio />} label="You forgot your password" />
      <FormControlLabel value="male" control={<Radio />} label="You forgot your username you see to sign in" />
      <FormControlLabel value="other" control={<Radio />} label="you know your username and password but you can't sign in" />
    </RadioGroup>         
                        </Box>
          </Typography>
          <Typography gutterBottom>
          <FormControl onSubmit={handleSubmit(onSubmit)}>
    <FormGroup aria-label="position" row>
  
   <Typography className={classes.howText}>How can you contact?</Typography>
   <Grid style={{marginLeft:"0", marginTop:"16px"}}>        
   <Grid  container spacing={2}  item xs={12} style={{justifyContent:"space-evenly", width:"100%"}}>
  

     <Grid  style={{  width:"45%"}} >
 
  <Box
      component="form"
      sx={{width: "100%"}}
     
    >
       <TextField
          id="mobile-number"
          label="Enter Your Mobile Number"
          type="phone"
          autoComplete="phone"
         
          required
       
        />
    </Box>
               
  </Grid>
  <Grid   style={{  width:"45%"}}>
  
   <Box
      component="form"
      sx={{width: "100%"}}
     
     
    >
       <TextField
          id="outlined-password-input"
          label="Enter your Email"
          type="email"
          {...register("email")}
          autoComplete="current-password"
          required
      
        />
    </Box>
  </Grid>

  </Grid>

   <Grid  container spacing={2}  item xs={12} style={{justifyContent:"space-evenly", width:"100%",marginTop:"16px"}}>
  

     <Grid  style={{  width:"45%"}} >
 
  <Box
      component="form"
      sx={{width: "100%"}}
     
      
    >
       <TextField
          id="name"
          label="Enter Dealer Name"
          type="text"
          required
       
        />
    </Box>
               
  </Grid>
  <Grid   style={{  width:"45%"}}>
  
   <Box
      component="form"
      sx={{width: "100%"}}
     
    >
       <TextField
          id="dealer-code"
          label="Enter Dealer Code"
          type="number"
          required
         
        />
    </Box>
  </Grid>

  </Grid>
  </Grid>  
  <Grid container spacing={2} item  xs={12} style={{marginTop:"15px", marginLeft:"1%"}}>
  <TextField
          label="Submit Your Request"
          id="outlined-start-adornment"
          style={{ width: '91%' }}
         
          required
        />
  </Grid>
 
   
    <Grid>
    
     
    </Grid>
      </FormGroup>
    </FormControl>
          </Typography>
          <Typography gutterBottom>
          <Grid  style={{ marginLeft:"1%"}}>
 <Typography style={{textAlign:"left", marginTop:"30px "}}> Add attachments or screenshots</Typography>
 <Grid style={{textAlign:"left",marginLeft:"0%"}}>
{/* <FileUploadIcon/> */}
<label htmlFor="upload-photo">
<Button color="primary" variant="contained" component="span">
 <FileUploadIcon/>
  </Button>
  <input type="file"
id="avatar" 
name="avatar"
required
accept="image/png, image/jpeg"/> 

</label>

 


 </Grid>
  </Grid>
          </Typography>
          <Typography  gutterBottom>
          <Typography variant="h6" className={classes.SignInButton}>
 {/* <Button id="modal" disableElevation={true} disableFocusRipple={true} variant="contained" disableRipple={true} onChange={app.signIn}>Submit</Button> */}
<Button  id="modal"  variant="contained" >Submit</Button>
</Typography>

          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

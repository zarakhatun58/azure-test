import * as React from 'react';
import { useForm,Controller, SubmitHandler } from 'react-hook-form';
import { TextField, Checkbox, FormControl, FormGroup,FormControlLabel, Button, Grid, Slide } from "@material-ui/core";

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useStyles } from './Styles';
import { Box } from '@material-ui/core';
import  InfoOutlinedIcon  from '@mui/icons-material/InfoOutlined';
import { TransitionProps } from '@mui/material/transitions';


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

export default function OverForm() {
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
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Help
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         What can you help you with?
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <Box className={classes.points}>
                            <Typography>Select the area</Typography>
                            <Typography component="div" className={classes.TableHeaderDesc}>
                                <InfoOutlinedIcon />
                                <Typography component="span">
                                    You can select either gifts or dirhams
                                </Typography>
                            </Typography>
                        </Box>
          </Typography>
          <Typography gutterBottom>
          <FormControl onSubmit={handleSubmit(onSubmit)}>
    <FormGroup aria-label="position" row>
   <Grid style={{display: "flex" ,justifyContent:"space-around", marginLeft:"30px", }}> 
   <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Account Statements"
          labelPlacement="end"
        />
         <FormControlLabel
          value="center"
          control={<Checkbox />}
          label="Deliveries"
          labelPlacement="end"
        />
         <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Gifts and Rewards"
          labelPlacement="end"
        />
   </Grid>
   <Grid style={{display: "flex" ,justifyContent:"space-around" , margin:"30px"}}>
   <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Payments"
          labelPlacement="end"
        />
         <FormControlLabel
          value="center"
          control={<Checkbox />}
          label="Invoices"
          labelPlacement="end"
        />
         <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Agreements"
          labelPlacement="end"
        />
       
   </Grid>
   <Grid style={{display: "flex" ,justifyContent:"space-around" , margin:"30px"}}>
   <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Post Dated Cheques (PDC)"
          labelPlacement="end"
        />
         <FormControlLabel
          value="center"
          control={<Checkbox />}
          label="Redeem Gift"
          labelPlacement="end"
        />
         
      
   </Grid>
   
    <Grid>
    
     
    </Grid>
      </FormGroup>
    </FormControl>
          </Typography>
          <Typography gutterBottom>
          <label htmlFor="lastName">More Details</label>
      <input type="checkbox" {...register("others")} />

      {others && (
        <div>
          <label>Interests</label>
          <input type="text" {...register("Interests")} />
        </div>
      )}
      <input type="submit" />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

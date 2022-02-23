/* eslint-disable */
//import { makeStyles } from "@mui/styles";
import { makeStyles } from '@material-ui/core';
// import logoSymbol  from "../../Assets/Images/logo_symbol.svg";
// import LogoSign  from "../../Assets/Images/LogoSign.png";


export const useStyles = makeStyles({
  Header: {
    padding: "10px",
  },
  HeaderText: {
    color: "#333333", 
    fontSize: "12px !important",
    paddingBottom: "10px",
    textAlign: "center",
  },
  WelcomeImg: {
    width: "90%",
  },
  WelcomeText: {
    position: "relative",
    height: "100vh",
    textAlign: "center",
    "& h5": {
      color: "#004D77",
    },
    "& h5:first-child": {
      color: "#004D77",
      paddingTop: "65px",
    },
    "& h5 + h5": {
      paddingBottom: "40px",
    },
  },
  WelcomeRightContent: {
    
    position: "relative",
    textAlign: "center",
    //  background: `url(${LogoSign}) no-repeat`,
    backgroundSize: "cover",
    paddingTop: "65px",
    height: "100vh",
    width: "100%",
    maxWidth: "100%",
    flexBasis: "auto",
   // backgroundImage:`url(${logoSymbol}) no-repeat`,
  },
  SignInButton: {
   
    "& p": {
      fontSize: "14px",
      padding: "20px 0",
    },
    "& button": {
      color: "#ffffff",
      background: "#606C74",
      height: "36px",
      fontSize: "14px",
      padding: "0px",
      borderRadius: "30px",
      marginTop:"30px",
      marginBottom:"30px",
      width:"84%",
      "&:hover": {
         backgroundColor: "#606C74",
        // background: "#004D77 !important",
        // backgroundColor: "#004D77 !important",
      },
    },
  },
  loginContent: {
    //backgroundImage:`url(${logoSymbol}) no-repeat`,
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& h4": {
      fontSize: "26px",
      color: "#606c74",
      marginBottom: "12px",
    },
    "& h5": {
      marginBottom: "10px",
      color: "#222222",
      fontSize: '30px',
      fontWeight:700,
    },
  },
  WelcomeLogoContent: {
    width: "100%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  buttonBox:{
    display:"flex",
     justifyContent:"space-around",
     alignItems:"center",
     margin:"auto",
paddingTop:"10px",
     width:"400px"
  },
  forgotButton:{
    // borderBottom:"1px solid #606C74",
    color:"#ABB1B5", 
    // marginRight:"30px",
    textTransform: "capitalize",
    borderRadius: "0",
    paddingLeft: "0",
    paddingRight: "0",
    paddingBottom: "5px",
    fontSize:"13px",
  },
  unableSign:{

    fontSize:"13px",
// borderBottom:"1px solid #606C74",
color:"#ABB1B5", 
// marginRight:"30px",
textTransform: "capitalize",
borderRadius: "0",
paddingLeft: "0",
paddingRight: "0",
paddingBottom: "5px",
  },

  portal:{
    color:"#222222",
    fontSize:"30px"
  },

  loginBackPage:{
display: "inline-block",
    /* width: 450px; */
    margin: "auto",
    background: "#ffffffff",
    padding: "25px",
    borderRadius: "6px",
    boxShadow:" 0px 0px 13px rgb(179 179 179 / 40%)",
  },
});

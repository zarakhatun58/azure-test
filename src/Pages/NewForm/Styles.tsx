import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  Header: {},
  HeaderText: {
    color: "#004C75",
    fontSize: "16px",
  },
  WelcomeRightContent: {
    
    position: "relative",
    textAlign: "center",
    //  background: `url(${LogoSign}) no-repeat`,
    backgroundSize: "cover",
    paddingTop: "65px",
    height: "800px",
    width: "50%",
    maxWidth: "100%",
    flexBasis: "auto",
   // backgroundImage:`url(${logoSymbol}) no-repeat`,
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

  loginBackPage:{
    display: "inline-block",
    background: "#ffffffff",
    padding: "0",
    borderRadius: "6px",
    boxShadow:" 0px 0px 13px rgb(179 179 179 / 40%)",
  },

  points: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    "& p": {
      color: "#7c7c7c",
      fontSize: "16px",
      fontWeight: 500,
    },
  },

  TableHeaderDesc: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      color: "#7c7c7c",
      paddingRight: "5px",
    },
    "& span": {
      fontSize: "12px",
      color: "#7c7c7c",
      fontWeight: 400,
    },
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

  SignInButton: {
   alignItems:"center",
   textAlign:"center",
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
      width:"30%",
      "&:hover": {
         backgroundColor: "#606C74",
        // background: "#004D77 !important",
        // backgroundColor: "#004D77 !important",
      },
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

  // loginBackPage:{
  //   display: "inline-block",
  //   background: "#ffffffff",
  //   padding: "0",
  //   borderRadius: "6px",
  //   boxShadow:" 0px 0px 13px rgb(179 179 179 / 40%)",
  // },

  textHeader:{
    textAlign:"center",
     fontSize:"26px",
      // fontWeight:"600",
      color:"#222222"
  },
  secText:{
    color:"#222222",
     fontSize:"18px",
    //  fontWeight:"600",
     marginBottom:"15px",
     marginLeft:"1%"
  },
  form:{
    textAlign:"left",
    marginTop:"0",
    width:"100%",
  //  marginLeft:"30px",
   padding:"20px"
  },

  firstHalf:{
    backgroundColor:"#F8F8F8",
     width:"100%",
     backgroundPosition:"top",   
     padding: "15px 50px",
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
    position:"relative",
  },
  close: {
    color:"#A2A2A2",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    right:" 10px",
    padding: "12px 16px",
    transform:" translate(0%, -50%)",
  },

  howText:{
textAlign:"left",
marginLeft:"0px",
padding:"10px",
color:"#222222",
     fontSize:"18px",
    //  fontWeight:"600",
     marginBottom:"10px",
  },

});
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

});
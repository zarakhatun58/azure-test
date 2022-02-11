/* eslint-disable */
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  Header: {
    padding: "15px",
  },
  HeaderText: {
    color: "#004C75",
    fontSize: "16px",
  },
  NewsHeader: {
    display: "block !important",
    "& span": {
      fontSize: "12px !important",
      color: "#999999",
      display: "flex",
      alignItems: "center",
      "& img": {
        marginRight: "7px",
      },
    },
  },
  NewsText: {
    fontSize: "14px !important",
    lineHeight: '20px',

    height: '40px',
    overflow: 'hidden',
    marginBottom: '19px',
  },
  ViewText:{
    color: "#004C75",
    fontSize: "16px",
  },
  Text:{
    color: "#004C75",
  },
  phone:{
width:"150px"

  },
  phoneField:{
     display:"flex",
    // borderTop: "1px solid #e4e4e4",
    // width:"650px",
      marginLeft:"5px",
    
    "& div": {
      flexGrow: 1,
      fontSize: "12px",
      textAlign: "center",
      // marginRight:"20px",
      color: "#999999",
      "& span": {
        display: "block",
        color: "#1BAAB5",
        textAlign: "center",
         marginLeft:"15px",
      },
    },
   
  },
  GalPhone:{
    marginRight:"10px",
    marginLeft:"15px",
  },
  firstContainer:{
    display:"flex",
     justifyContent:"space-between",
      width:"100%"
  },
  secContainer:{
    display:"flex",
    justifyContent:"space-between", 
    width:"93%",
    marginTop:"30px"
  },
  Ifield:{
    marginLeft:"15px",
  }
});

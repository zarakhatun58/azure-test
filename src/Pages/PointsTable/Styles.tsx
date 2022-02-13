/* eslint-disable */
//import { makeStyles } from "@mui/styles";
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  Header: {},
  HeaderText: {
    color: "#004C75",
    fontSize: "16px",
  },
  ContainerBox: {
    padding: "15px 40px",
  },
  boxContainer: {
    height: "auto",
    width: "100%",
    border: "1px dashed #99ccff",
    borderRadius: "10px",
    marginBottom: "50px",
    alignItems: "center",
  },
  middleText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0 5px 0",
  },
  cool: {
    textAlign: "left",
  },
  typeText: {
    fontSize: "30px",
    color: "#004C75",
    lineHeight: "30px",
    paddingTop: "5px",
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
  cell: {
    color: "#004C75",
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
  TableDesignOne: {
    border: "1px solid #dedede ",
    background: "#faf0e7",
  },
  TableRowDesign: {
    "& th": {
      color: "#004C75",
      fontSize: "16px",
      background: "#ffffff",
    },
  },

  
  CardContainer: {
    background: "#fff",
    borderRadius: "5px",
    display: "inline-block",
    height: "280px",
    margin: "1rem",
    position: "relative",
    width: "200px",
    border:"2ps solid red",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    textAlign:"center",
  },
  FullContain:{
   display:"flex",
   justifyContent:"space-around"
  },
  Coin:{
width:"50%",
alignItems:"center",
textAlign:"center",
paddingTop:"20px",

  },
  PText:{
    textAlign:"left",
    paddingLeft:"15px",
    color:"#606C74",
  },
 
//   h6:{
//   //   width: "70%",
//   //   textAlign:"center",
//   //   borderBottom: "1px solid #000", 
//   //   lineHeight:" 0.1em",
//   //   margin: "10px 0 20px",
//   //  "span":{
//   //   padding:"0 10px",
//   display: "flex",
//   flexDirection: "row",
//  "h6:before":{
//   content: "",
//   flex: "1 1",
//   borderBottom: "1px solid",
//   margin: "auto",
//   marginRight: "10px",
//  },
//  "h6:after":{
//   content: "",
//   flex: "1 1",
//   borderBottom: "1px solid",
//   margin: "auto",
//   marginLeft: "10px",
//  }
//   },
   
  
TText:{
  color:"#606C74",
  paddingBottom:"10px",

},

emptyBox:{
  height: "250px",
  margin: "1rem",
  position: "relative",
  width: "200px",
  border:"1px solid white",
},
});

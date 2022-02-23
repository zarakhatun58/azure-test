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
    fontFamily: " 'DM Sans', 'sans-serif'!important",
  },
  boxContainer: {
    height: "auto",
    width: "100%",
    border: "1px dashed #99ccff",
    borderRadius: "10px",
    marginBottom: "50px",
    alignItems: "center",
    fontFamily: " 'DM Sans', 'sans-serif'!important",
  },
  middleText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0 5px 0",
    fontFamily: " 'DM Sans', 'sans-serif'!important",
  },
  cool: {
    textAlign: "left",
  },
  typeText: {
    fontSize: "30px",
    color: "#004C75",
    lineHeight: "30px",
    paddingTop: "5px",
    fontFamily: " 'DM Sans', 'sans-serif'!important",
  },

  points: {
    display: "flex",
    justifyContent: "space-between",
    // marginBottom: "20px",
    "& p": {
      color: "#7c7c7c",
      fontSize: "16px",
      fontWeight: 500,
    },
  },

  pointsText: {
    color: "#7c7c7c",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: " 'DM Sans', 'sans-serif'!important",
  },
  cell: {
    color: "#004C75",
  },
  // TableHeaderDesc: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   "& svg": {
  //     color: "#7c7c7c",
  //     paddingRight: "5px",
  //   },
  //   "& span": {
  //     fontSize: "12px",
  //     color: "#7c7c7c",
  //     fontWeight: 400,
  //   },
  // },
  // TableDesignOne: {
  //   border: "1px solid #dedede ",
  //   background: "#faf0e7",
  // },
  // TableRowDesign: {
  //   "& th": {
  //     color: "#004C75",
  //     fontSize: "16px",
  //     background: "#ffffff",
  //   },
  // },

  totalEarned: {
    color: "#606C74",
    fontSize: "15px",
    fontFamily: " 'DM Sans', 'sans-serif'!important",

    "& span": {
      fontSize: "25px",
      color: "#1BAAB5",
      fontWeight: 500,
    },
  },

  CardContainer: {
    background: "#fff",
    borderRadius: "5px",
    display: "inline-block",
    // height: "390px",
    //  margin: "0 -10px",
    position: "relative",
    width: "100%",
    // border: "2ps solid gray",
    boxShadow:"0px 0px 10px lightgrey",
    //boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    textAlign: "center",
    // padding: "0px 10px", 
  },
  FullContain: {
    //  display:"flex",
    //justifyContent:"space-around",
    //justifyContent:"space-evenly",
    //  justifyContent:"space-between",
     margin: "0 -15px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    paddingBottom:"25px",

  },
  Coin: {
    width: "50%",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "20px",

  },
  PText: {
    textAlign: "left",
    paddingTop: "15px",
    color: "#1BAAB5",
    fontSize: "20px",
    paddingLeft: "20px",
  },


  TText: {
    color: "#606C74",
    paddingBottom: "10px",
    fontSize:"18px",
    textAlign: "left",
    paddingLeft: "20px",
    fontWeight: 600,
    fontFamily: " 'DM Sans', 'sans-serif'!important",
  },

  emptyBox: {
    height: "330  px",
    margin: "1rem",
    position: "relative",
    width: "200px",
    border: "1px solid white",
  },
  redeemBtn: {
    // display: "block",
    // borderTop: "1px solid white",

    // font-size: 16px;
    // cursor: " pointer",
    textAlign: "center",
    backgroundColor: "#1BAAB5",
    color: "white",
    width: "100%",
    "&:hover":{
      backgroundColor: "#1BAAB5",
      color: "white",
    }

    // marginTop:"5px",
  },
  gold: {
    color: "#606C74",
    paddingBottom: "0",
    textAlign: "left",
    paddingLeft: "20px",
    fontSize: "12px",
    fontFamily: " 'DM Sans', 'sans-serif'!important",
  },
  priceText: {
    color: "#1BAAB5",
    fontSize: "24px",
    paddingBottom: "14px",
    textAlign: "left",
    paddingLeft: "20px",
    "& span": {
      fontSize: "12px",
      color: "#1BAAB5",
      fontWeight: 500,
      textAlign: "left",
    },
    TypePrice: {
      color: "#606C74",

      textAlign: "left",
      paddingLeft: "0",
      fontWeight: 100,
      fontFamily: " 'DM Sans', 'sans-serif'!important",
      "& span": {

        // paddingLeft:"20px",
      },
    },

  },

  newHeadText: {
    color: "black",
    fontSize: "18px",
    paddingBottom: "10px",
    paddingTop: "20px",
    textAlign: "left",
    "& span": {
      fontSize: "12px",
      color: "#606C74",
      fontWeight: 500,
    },
  },

  middleContain: {
    background: "#fff",
    borderRadius: "5px",
    display: "inline-block",
    // height: "374px",
   // margin: "1rem",
    position: "relative",
    width: "100%",
   // border: "2ps solid red",
    boxShadow:"0px 0px 10px lightgrey",
    //boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    textAlign: "center",
  },
  startContain: {
    background: "#fff",
    borderRadius: "5px",
    display: "inline-block",
    // height: "280px",
    // margin: "1rem",
    position: "relative",
    width: "100%",
    // border: "2ps solid red",
    boxShadow:"0px 0px 10px lightgrey",
    textAlign: "center",
  },

  displayText: {
    textAlign: "left",
    paddingLeft: "20px",
    paddingBottom: "10px",

  },
  priceSecond: {
    textAlign: "left",
    paddingLeft: "20px",
    color: "#606C74",
    paddingBottom: "20px",
  },

  startText: {
    textAlign: "center",

    fontWeight: 600,
    fontFamily: " 'DM Sans', 'sans-serif'!important",
    color: "#606C74",

    padding: "20px",
  },

  newText: {
    background: "#f6fcfc",
    textAlign: "center",
    padding: "10px 0px",
    fontSize: "18px",
    color: "#1BAAB5",
  }


});

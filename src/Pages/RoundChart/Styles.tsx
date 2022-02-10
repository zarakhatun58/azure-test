/* eslint-disable */
//import { makeStyles } from "@mui/styles";

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  Header: {
    padding: "15px",
  },
  HeaderText: {
    color: "#004C75",
    fontSize: "16px",
  },
  GeneralColor: {
    flexGrow: 1,
    paddingTop:"0px",
    textAlign: "center",
    borderRight: "1px solid #e4e4e4",
    "& h3": {
      margin: 0,
      fontWeight: "300",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      "& span": {
        fontSize: "12px",
        color: "#666666",
        marginLeft: "7px",
      },
    },
    "& p": {
      margin: 0,
      fontSize: "14px",
      "& span": {
        width: "12px",
        height: "12px",
        display: "inline-block",
        borderRadius: "50%",
        backgroundColor: "#1BAAB5",
        verticalAlign: "middle",
        marginRight: "3px",
      },
    },
  },
  MediaColor: {
    flexGrow: 1,
    textAlign: "center",
    "& h3": {
      margin: 0,
      fontWeight: "300",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      "& span": {
        fontSize: "12px",
        color: "#666666",
        marginLeft: "7px",
      },
    },
    "& p": {
      margin: 0,
      fontSize: "14px",
      "& span": {
        width: "12px",
        height: "12px",
        display: "inline-block",
        borderRadius: "50%",
        backgroundColor: "#ABB1B5",
        verticalAlign: "middle",
        marginRight: "3px",
      },
    },
  },
});


import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    PaymentHeader: {
      display: "flex",
      padding: "15px",
    },
    HeaderText: {
      color: "#004C75",
      fontSize: "16px",
      paddingBottom: "20px",
    },
    Wallet: {
      paddingBottom: "10px",
    },
    PaymentLeft: {
      width: "20%",
      "& h5": {
        margin: 0,
        fontSize: "14px",
        fontWeight: 400,
      },
      "& h2": {
        margin: 0,
        fontSize: "32px",
        fontWeight: 400,
        padding: 0,
      },
      "& p": {
        margin: 0,
        color: "#82C25E",
        fontSize: "10px",
      },
    },
    PaymentRight: {
      width: "80%",
    },
    
  });
  
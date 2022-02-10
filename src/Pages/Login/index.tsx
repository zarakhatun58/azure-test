import { Button, Grid } from '@material-ui/core';
import React from 'react';

const Login = () => {
  
     
    return (
        <div>
        <button id="loginButton">Login</button>
        <button id="logoutButton" style={{visibility: "hidden"}}>Logout</button>
        <button id="tokenButton" style={{visibility: "hidden"}}>Get Token</button>
      </div>
    );
};

export default Login;

/*
const msalConfig = {
        auth: {
          clientId: "0dd4cd65-7969-4b63-80b4-6f6af996e573",
        },
        cache: {
          cacheLocation: "sessionStorage", // This configures where your cache will be stored
          storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
        },
      };
      const myMSALObj = new Msal.UserAgentApplication(msalConfig);
      const loginRequest = {
        scopes: ["openid", "profile"],
        prompt: "select_account"
      };
      const modal = document.getElementById("myModal");
      window.onclick = function(event) {
        const popUps = getMsalPopups();
        if (event.target == modal && popUps) {
          popUps.forEach((element) => {
            element.focus();
          });
        }
      };
     
      function getMsalPopups() {
        // internal msal api: this may change in a future release
        if (!window.openedWindows) {
          window.openedWindows = [];
        }
     
        return window.openedWindows;
      }
     
      function buttonClick() {
        modal.style.display = "block";
     
        myMSALObj
          .loginPopup(loginRequest)
          .then((loginResponse) => alert(JSON.stringify(loginResponse)))
          .catch((e) => alert(e))
          .finally(() => modal.style.display = "none");
      }
*/
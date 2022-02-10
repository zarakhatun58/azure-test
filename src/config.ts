/* eslint-disable */
const config = {
    appId: "", //  
    redirectUri: "http://localhost:3000/", 
    postLogoutRedirectUri: "https://login.microsoftonline.com/",
    scopes: ["user.read", "mailboxsettings.read", "calendars.readwrite"],
  };
  
  export default config;
  const msalConfig = {
    auth: {
      clientId: "",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  };
  
  
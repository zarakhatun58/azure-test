/* eslint-disable */
const config = {
    appId: "0894f314-54e6-4f51-bb28-8397283c79fa", //  
    redirectUri: "http://localhost:3000/", 
    postLogoutRedirectUri: "https://login.microsoftonline.com/",
    scopes: ["user.read", "mailboxsettings.read", "calendars.readwrite"],
  };
  
  export default config;
  const msalConfig = {
    auth: {
      clientId: "0dd4cd65-7969-4b63-80b4-6f6af996e573",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  };
  
  
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "./App";
import { IPublicClientApplication } from "@azure/msal-browser/dist/app/IPublicClientApplication";
import config from "./config";
import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";
type AppProps = {
  pca: IPublicClientApplication;
};
  


const msalInstance = new PublicClientApplication({
  auth: {
    clientId: config.appId,
    redirectUri: config.redirectUri,
    navigateToLoginRequestUrl: true,
    postLogoutRedirectUri: config.postLogoutRedirectUri,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
});

const accounts = msalInstance.getAllAccounts();
if (accounts && accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const authResult = event.payload as AuthenticationResult;
    msalInstance.setActiveAccount(authResult.account);
  }
});


test('renders learn react link', () => {
  render(<App pca={msalInstance}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

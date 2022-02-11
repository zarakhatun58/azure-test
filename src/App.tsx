import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Pages/Login';
import ProvideAppContext from './AppContext';
import { BrowserRouter, BrowserRouter as Router, Route ,Switch, } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AuthenticatedTemplate, MsalProvider as MealProvider  } from '@azure/msal-react'
import { IPublicClientApplication } from '@azure/msal-browser';
import ErrorMessage from './Pages/ErrorMessage/index';
import Welcome from './Pages/Welcome/index';
import NavBar from './Pages/Login/Navbar/index';

import Home from './Pages/Home/index';
import { Typography } from '@mui/material';



type AppProps = {
pca: IPublicClientApplication,

};

function App({ pca }: AppProps) {
  return (
    <>
        <React.Fragment>
      <Typography style={{ display: "none" }}>learn react</Typography>
      <Router>
        <MealProvider instance={pca}>
          <ProvideAppContext >
            {/* <ThemeProvider > */}
              <Container className='Container'>
               
                <Switch>
                <Route exact path="/"
            render={(props) =>
              <Welcome {...props} />
            } />
                  <Route exact path="/" render={(props) => <Welcome {...props} />} /> 
                </Switch>
              </Container>
            {/* </ThemeProvider> */}
          </ProvideAppContext>
        </MealProvider>
      </Router>
    </React.Fragment >
     {/* <ProvideAppContext>
      <Router>
        <NavBar />
        <Container>
          <ErrorMessage />
          <Route exact path="/"
            render={(props) =>
              <Welcome {...props} />
            } />
        </Container>
      </Router>
     
    </ProvideAppContext> */}
    <Home/>
    
   
    {/* <GroupedGraph/> */}
    
    </>
  );
}

export default App;

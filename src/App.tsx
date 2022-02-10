import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Pages/Login';
// import ProvideAppContext from './AppContext';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import { MsalProvider } from '@azure/msal-react'
// import { IPublicClientApplication } from '@azure/msal-browser';
// import ErrorMessage from './Pages/ErrorMessage/index';
// import Welcome from './Pages/Welcome/index';
// import NavBar from './Pages/Login/Navbar/index';
import AgeingStatement from './Pages/AgeingStatement';
import ColumnChart from './Pages/ColumnChart';
import GroupedGraph from './Pages/GroupedGraph';





function App() {
  return (
    <div className="App">
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
    <AgeingStatement/>
    <ColumnChart/>
    {/* <GroupedGraph/> */}
     
    </div>
  );
}

export default App;

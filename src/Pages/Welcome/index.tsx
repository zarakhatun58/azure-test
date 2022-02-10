import React from 'react';
import {
    Button,
    Container
  } from 'react-bootstrap';
  import { RouteComponentProps } from 'react-router-dom';
  import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
  import { useAppContext } from './../../AppContext';


const Welcome = (props: RouteComponentProps) => {
    const app = useAppContext();
    return (
        <div>
         <div className="p-5 mb-4 bg-light rounded-3">
      <Container fluid>
        <h1>React Graph Tutorial</h1>
        <p className="lead">
        how to use the Microsoft Graph API to access a user's data from React
        </p>
        <AuthenticatedTemplate>
          <div>
            <h4>Welcome {app.user?.displayName || ''}!</h4>
            <p>Use the navigation bar at the top of the page to get started.</p>
          </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Button color="primary" onClick={app.signIn!}> sign in</Button>
        </UnauthenticatedTemplate>
      </Container>
    </div>   
        </div>
    );
};

export default Welcome;
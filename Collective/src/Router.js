import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SigninEmailForm from './components/SigninEmailForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 1 }}>

      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Sign in / create account" initial />
        <Scene key="signinEmailForm" component={SigninEmailForm} title="Create account" />
      </Scene>

    </Router>
  );
};

export default RouterComponent;

import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SigninEmailForm from './components/SigninEmailForm';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 1 }}>
      <Scene>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Sign in / create account" initial />
          <Scene key="signinEmailForm" component={SigninEmailForm} title="Create account" />
        </Scene>

        <Scene key="main" renderBackButton={() => (<View />)}>
          <Scene

            key="home"
            component={Home}
            title="Home"
          />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;

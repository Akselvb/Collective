import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import Home from './components/Home/Home';

const RouterComponent = () => (
  <Router>
    <Scene hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} hideNavBar />
        <Scene key="register" component={SignupForm} title="Create account" />
      </Scene>

      <Scene key="main" renderBackButton={() => <View />}>
        <Scene key="home" component={Home} title="Home" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;

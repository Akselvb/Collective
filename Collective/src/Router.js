import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 1 }}>
    <Scene hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Sign in / create account" initial />
        <Scene key="signup" component={SignupForm} title="Create account" />
      </Scene>

      <Scene key="main" renderBackButton={() => <View />}>
        <Scene key="home" component={Home} title="Home" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;

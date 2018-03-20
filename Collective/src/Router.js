import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import CollectiveManager from './components/CollectiveManager';
import JoinCollective from './components/JoinCollective';
import CreateCollective from './components/CreateCollective';


const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 1 }}>
    <Scene hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Sign in / create account" initial />
        <Scene key="signup" component={SignupForm} title="Create account" />
      </Scene>

      <Scene key="manager">
        <Scene key="collectiveManager" component={CollectiveManager} title="Not in collective" renderBackButton={() => <View />} />
        <Scene key="joinCollective" component={JoinCollective} title="Join Collective" />
        <Scene key="createCollective" component={CreateCollective} title="Create new Collective" />
      </Scene>

      <Scene key="main" renderBackButton={() => <View />}>
        <Scene key="home" component={Home} title="Home" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;

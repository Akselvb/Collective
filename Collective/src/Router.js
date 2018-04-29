import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import Home from './components/Home/Home';
import CollectiveManager from './components/CollectiveManager/CollectiveManager';
import JoinCollective from './components/CollectiveManager/JoinCollective';
import CreateCollective from './components/CollectiveManager/CreateCollective';
import UpcomingEvents from './components/Events/UpcomingEvents';
import CreateEvent from './components/Events/CreateEvent';
import Expenses from './components/Expenses/Expenses';
import Notifications from './components/Notifications/Notifications';
import Settings from './components/Settings/Settings';

const RouterComponent = () => (
  <Router>
    <Scene hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} hideNavBar />
        <Scene key="register" component={SignupForm} title="Create account" />
      </Scene>

      <Scene key="manager">
        <Scene
          key="collectiveManager"
          component={CollectiveManager}
          title="Not in collective"
          renderBackButton={() => <View />}
        />
        <Scene key="joinCollective" component={JoinCollective} title="Join Collective" />
        <Scene key="createCollective" component={CreateCollective} title="Create new Collective" />
      </Scene>

      <Scene key="main" renderBackButton={() => <View />}>
        <Scene key="home" component={Home} title="Home" hideNavBar />
        <Scene key="upcomingEvents" component={UpcomingEvents} title="UpcomingEvents" hideNavBar />
        <Scene key="createEvent" component={CreateEvent} title="CreateEvent" hideNavBar />
        <Scene key="expenses" component={Expenses} title="Expenses" hideNavBar />
        <Scene key="notifications" component={Notifications} title="Notifications" hideNavBar />
        <Scene key="settings" component={Settings} title="Settings" hideNavBar />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;

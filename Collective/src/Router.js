import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import CollectiveManager from './components/CollectiveManager/CollectiveManager';
import JoinCollective from './components/CollectiveManager/JoinCollective';
import CreateCollective from './components/CollectiveManager/CreateCollective';
import Home from './components/Home/Home';
import UpcomingEvents from './components/Events/UpcomingEvents';
import Expenses from './components/Expenses/Expenses';
import Settings from './components/Settings/Settings';


export default class Route extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home' },
      { key: 'events', title: 'Events' },
      { key: 'expenses', title: 'Expenses' },
      { key: 'settings', title: 'Settings' }
    ],
  };

  handleIndexChange = index => this.setState({ index });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          home: Home,
          events: UpcomingEvents,
          expenses: Expenses,
          settings: Settings
        })}
        onIndexChange={this.handleIndexChange}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}


// const RouterComponent = () => (
//   <Router>
//     <Scene hideNavBar>
//       <Scene key="auth">
//         <Scene key="login" component={LoginForm} hideNavBar />
//         <Scene key="register" component={SignupForm} title="Create account" />
//       </Scene>
//
//       <Scene key="manager">
//         <Scene
//           key="collectiveManager"
//           component={CollectiveManager}
//           title="Not in collective"
//           renderBackButton={() => <View />}
//         />
//         <Scene key="joinCollective" component={JoinCollective} title="Join Collective" />
//         <Scene key="createCollective" component={CreateCollective} title="Create new Collective" />
//       </Scene>
//
//       <Scene key="main" renderBackButton={() => <View />}>
//         <Scene key="home" component={Home} title="Home" hideNavBar />
//         <Scene key="upcomingEvents" component={UpcomingEvents} title="UpcomingEvents" hideNavBar />
//         <Scene key="createEvent" component={CreateEvent} title="CreateEvent" hideNavBar />
//         <Scene key="expenses" component={Expenses} title="Expenses" hideNavBar />
//         <Scene key="notifications" component={Notifications} title="Notifications" hideNavBar />
//         <Scene key="settings" component={Settings} title="Settings" hideNavBar />
//       </Scene>
//     </Scene>
//   </Router>
// );
//
// export default RouterComponent;

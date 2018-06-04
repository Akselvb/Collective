import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Home from './components/Home/Home';
import UpcomingEvents from './components/Events/UpcomingEvents';
import Expenses from './components/Expenses/Expenses';
import Settings from './components/Settings/Settings';


export default class RouterPostLogin extends Component {
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

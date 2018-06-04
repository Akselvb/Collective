import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View, Animated, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Home from './components/Home/Home';
import UpcomingEvents from './components/Events/UpcomingEvents';
import Expenses from './components/Expenses/Expenses';
import Settings from './components/Settings/Settings';


export default class RouterPostLogin extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: '1' },
      { key: 'events', title: '2' },
      { key: 'expenses', title: '3' },
      { key: 'settings', title: '4' }
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderScene = SceneMap({
    home: Home,
    events: UpcomingEvents,
    expenses: Expenses,
    settings: Settings
  });


  renderTabBar = props => {
  const inputRange = props.navigationState.routes.map((x, i) => i);

  return (
    <View style={{ backgroundColor: '#6495ed' }}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>TITTEL HER DA</Text>
      </View>

      <View style={styles.tabBar}>

      {props.navigationState.routes.map((route, i) => {
        const color = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(
            inputIndex => (inputIndex === i ? '#D6356C' : '#222')
          ),
        });
        return (
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => this.setState({ index: i })}
          >
            <Animated.Text style={{ color }}>{route.title}</Animated.Text>
          </TouchableOpacity>
        );
      })}
      </View>
    </View>
  );
};

  render() {
    return (
        <TabView
          navigationState={this.state}
          renderTabBar={this.renderTabBar}
          renderScene={this.renderScene}
          onIndexChange={this.handleIndexChange}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
    );
  }
}

const styles = ({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 20,
    fontSize: 16,
    alignItems: 'center'
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 4
  },
});
import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View, Animated, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import CreateEvent from './components/Events/CreateEvent';
import ShoppingList from './components/Events/ShoppingList';
import WashingList from './components/Events/ShoppingList';

class RouterEvents extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'eventList', title: 'Hendelse' },
      { key: 'shoppingList', title: 'Handeliste' },
      { key: 'washingList', title: 'Vaskeliste' }
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderScene = SceneMap({
    eventList: CreateEvent,
    shoppingList: ShoppingList,
    washingList: WashingList
  });

  renderTitle() {
    return (
      <View style={styles.title}>
        <Text style={{ fontSize: 20, color: '#72BA6F' }}>Opprett ny hendelse</Text>
      </View>
    );
  }

  renderTabBar = props => {
  const inputRange = props.navigationState.routes.map((x, i) => i);

  return (
    <View style={{ backgroundColor: '#f5f5f5' }}>
      {this.renderTitle()}

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
  }
});

const mapStateToProps = ({
  events: { collectiveId, collectiveName, otherUsers } }) =>
  ({ collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(RouterEvents);

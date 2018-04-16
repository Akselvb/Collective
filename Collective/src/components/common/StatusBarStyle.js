import React, { Component } from 'react';
import { View, StatusBar, Platform, Dimensions } from 'react-native';

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

class StatusBarStyle extends Component {
  render() {
    return (
      <MyStatusBar backgroundColor="#1DA0B0" barStyle="light-content" />
    );
  }
}

let STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

//iPhone X brings trouble...
const isIphoneX = () => {
  const { height, width } = Dimensions.get('window');
  return (
    Platform.OS === 'ios' && (height === 812 || width === 812)
  );
};

if (isIphoneX()) {
  STATUSBAR_HEIGHT = 42;
}

const styles = {
  statusBar: {
    height: STATUSBAR_HEIGHT,
  }
};

export { StatusBarStyle };

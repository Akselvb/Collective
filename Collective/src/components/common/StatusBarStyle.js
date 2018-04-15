import React, {
  Component,
} from 'react';
import {
  View,
  StatusBar,
  Platform,
} from 'react-native';

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

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const styles = {
  statusBar: {
    height: STATUSBAR_HEIGHT,
  }
};

export { StatusBarStyle };

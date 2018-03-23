import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, color }) => (
  <View style={styles.container}>
    <ActivityIndicator style={styles.spinner} size={size || 'large'} color={color} />
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15
  }
};

export { Spinner };

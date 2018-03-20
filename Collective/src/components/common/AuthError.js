import React from 'react';
import { Text, View } from 'react-native';

const AuthError = ({ children }) => {
  const { errorView, errorHeader, errorText } = styles;
  return (
    <View style={errorView}>
      <Text style={errorHeader}>There was a problem</Text>
      <Text style={errorText}>{children}</Text>
    </View>
  );
};

const styles = {
  errorView: {
    backgroundColor: '#fff',
    borderColor: 'darkred',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    flex: 1,
    borderRadius: 3
  },
  errorHeader: {
    padding: 5,
    color: 'darkred',
    fontWeight: 'bold'
  },
  errorText: {
    fontSize: 14,
    alignSelf: 'stretch',
    padding: 5
  }
};

export { AuthError };

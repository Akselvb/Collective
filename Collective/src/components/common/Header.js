// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    paddingTop: 20,
    fontSize: 16,
    alignItems: 'center',
    minHeight: 40,
    backgroundColor: '#f5f5f5'
  },
  textStyle: {
    fontSize: 16,
    color: '#72BA6F',
    marginBottom: 10
  }
};

// Make the component available to other parts of the app
export { Header };

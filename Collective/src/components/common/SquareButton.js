import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SquareButton = ({ onPress, children }) => {
  const { buttonStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#30C5D2',
    width: 45,
    height: 45
  }
};

export { SquareButton };

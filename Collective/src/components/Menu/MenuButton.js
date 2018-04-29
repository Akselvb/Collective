import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const MenuButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress} style={buttonStyle} />
      <Text style={textStyle}> {children} </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50
  },
  viewStyle: {
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 65
  }
};

export { MenuButton };

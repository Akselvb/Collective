import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 1
  },
  buttonStyle: {
    backgroundColor: '#1F627E',
    opacity: 0.9,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: '#ACCFCB'
  }
});

export { Button };

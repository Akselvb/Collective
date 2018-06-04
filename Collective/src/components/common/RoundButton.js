import React from 'react';
import { TouchableOpacity } from 'react-native';

const RoundButton = ({ onPress }) => {
  const { roundButtonStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={roundButtonStyle} />
  );
};

const styles = {
  roundButtonStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#5887E1',
    borderRadius: 30
  }
};

export { RoundButton };

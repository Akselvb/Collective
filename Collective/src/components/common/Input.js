import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({
  input: { onChange, ...restInput },
  meta: { touched, error },
  label,
  placeholder,
  secureTextEntry
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      autoCorrect={false}
      autoCapitalize="none"
      {...restInput}
    />
    {touched && error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = {
  label: {
    fontSize: 12
  },
  input: {
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 3
  },
  error: { fontSize: 12, color: 'red' },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10
  }
};

export { Input };

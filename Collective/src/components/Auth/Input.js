import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-fontawesome-pro';

const Input = ({
  input: { onChange, ...restInput },
  meta: { touched, error },
  placeholder,
  secureTextEntry,
  icon
}) => (
  <View style={styles.container}>
    <View style={[styles.inputContainer, error && touched && styles.inputContainerError]}>
      {icon && (
        <View style={styles.icon}>
          <Icon name={icon} type="light" size={20} color="#777" />
        </View>
      )}
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor="#777"
        {...restInput}
      />
      {error &&
        touched && (
          <View style={styles.errorIcon}>
            <Icon name="exclamation-circle" type="light" size={20} color="#B33A3A" />
          </View>
        )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 0,
    marginBottom: 15
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.9)',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20
  },
  inputContainerError: {
    borderWidth: 1,
    borderColor: '#B33A3A'
  },
  icon: {
    alignSelf: 'center',
    paddingLeft: 13
  },
  input: {
    color: '#222',
    fontSize: 18,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1
  },
  errorIcon: {
    alignSelf: 'center',
    paddingRight: 13
  }
});

export { Input };

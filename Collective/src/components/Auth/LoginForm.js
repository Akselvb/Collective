import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native-animatable';

import { Input } from './Input';
import { loginUser } from '../../actions';
import { Button } from './Button';
import { Spinner } from '../common';

const bg = require('../../img/bg.jpeg');

class LoginForm extends Component {
  loginPressed({ email, password }) {
    this.props.loginUser({ email, password });
  }
  registerPressed() {
    Actions.register();
  }
  renderButton() {
    const { handleSubmit, loading } = this.props;

    if (loading) {
      return <Spinner size="large" color="#fff" />;
    }

    return <Button onPress={handleSubmit(this.loginPressed.bind(this))}>login</Button>;
  }
  renderError() {
    const { error } = this.props;
    if (error) {
      return (
        <View style={styles.errorTextContainer}>
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      );
    }
  }
  render() {
    return (
      <ImageBackground source={bg} style={styles.image}>
        <View animation={'zoomIn'} delay={0} duration={600} style={styles.scene}>
          <Text
            animation="pulse"
            duration={5000}
            easing="linear"
            iterationCount="infinite"
            style={styles.logo}
          >
            collective
          </Text>
          <View animation={'zoomIn'} delay={600} duration={600} style={styles.inputs}>
            <Field name="email" placeholder="Email" component={Input} icon="user-alt" />
            <Field
              name="password"
              placeholder="Password"
              component={Input}
              icon="unlock"
              secureTextEntry
            />
            {this.renderButton()}
            {this.renderError()}
          </View>
          <View animation={'zoomIn'} delay={600} duration={600} style={styles.bottom}>
            <Button onPress={this.registerPressed}>register</Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: '100%'
  },
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  inputs: {},
  logo: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 3,
    fontSize: 44,
    paddingTop: 100
  },
  bottom: {
    paddingBottom: 30
  },

  errorTextContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    borderColor: '#B33A3A',
    borderWidth: 1
  },
  errorText: {
    color: '#B33A3A',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

const validate = ({ email, password }) => {
  const errors = {};

  if (!email || email.trim() === '') {
    errors.email = 'Please enter an email';
  }
  if (!password || password.trim() === '') {
    errors.password = 'Please enter a password';
  }

  return errors;
};

const mapStateToProps = ({ auth: { error, loading } }) => ({ error, loading });

export default reduxForm({ form: 'login', validate })(
  connect(mapStateToProps, {
    loginUser
  })(LoginForm)
);

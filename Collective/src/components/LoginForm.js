import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
  loginEmailChanged,
  loginPasswordChanged,
  createAccountButtonPressed,
  loginUser }
from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.loginEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.loginPasswordChanged(text);
  }

  onCreateAccountButtonPress() {
    this.props.createAccountButtonPressed();
  }

  onLoginButtonPress() {
    const { loginEmail, loginPassword } = this.props;

    this.props.loginUser({ loginEmail, loginPassword });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onLoginButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <CardSection style={{ paddingTop: 240 }} />

        <CardSection>
          <Button>
            Sign in with Facebook
          </Button>
        </CardSection>

        <CardSection>
          <Button>
            Sign in with Google
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onCreateAccountButtonPress.bind(this)}>
            Create an Account
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { loginEmail, loginPassword, error, loading } = auth;

  return { loginEmail, loginPassword, error, loading };
};

export default connect(mapStateToProps, {
  loginEmailChanged, loginPasswordChanged, createAccountButtonPressed, loginUser
})(LoginForm);

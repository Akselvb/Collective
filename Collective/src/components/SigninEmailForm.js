import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
  signinEmailChanged,
  signinPasswordChanged,
  signinConfirmPasswordChanged,
  signinUser
} from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class SigninEmailForm extends Component {

  onEmailChange(text) {
    this.props.signinEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.signinPasswordChanged(text);
  }

  onConfirmPasswordChange(text) {
    this.props.signinConfirmPasswordChanged(text);
  }

  onButtonPress() {
    const { signinEmail, signinPassword, signinConfirmPassword } = this.props;

    this.props.signinUser({ signinEmail, signinPassword, signinConfirmPassword });
  }

  renderButton() {
    console.log(this.props.loading);
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Create an Account
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

        <CardSection>
          <Input
            secureTextEntry
            label="Confirm Password"
            placeholder="password"
            onChangeText={this.onConfirmPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
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
  const { signinEmail, signinPassword, signinConfirmPassword, error, loading } = auth;

  return { signinEmail, signinPassword, signinConfirmPassword, error, loading };
};

export default connect(mapStateToProps, {
  signinEmailChanged, signinPasswordChanged, signinConfirmPasswordChanged, signinUser
})(SigninEmailForm);

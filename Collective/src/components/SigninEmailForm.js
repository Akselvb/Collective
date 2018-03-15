import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  signinEmailChanged,
  signinPasswordChanged,
  signinConfirmPasswordChanged
} from '../actions';
import { Card, CardSection, Input, Button } from './common';

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

  renderButton() {
    return (
      <Button>
        Sign In
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

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { signinEmail, signinPassword, signinConfirmPassword } = auth;

  return { signinEmail, signinPassword, signinConfirmPassword };
};

export default connect(mapStateToProps, {
  signinEmailChanged, signinPasswordChanged, signinConfirmPasswordChanged
})(SigninEmailForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginEmailChanged, loginPasswordChanged, createAccountButtonPressed } from '../actions';
import { Card, CardSection, Input, Button } from './common';

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
          <Button>
            Login
          </Button>
        </CardSection>

        <CardSection style={{ paddingTop: 270 }} />

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

const mapStateToProps = ({ auth }) => {
  const { loginEmail, loginPassword } = auth;

  return { loginEmail, loginPassword };
};

export default connect(mapStateToProps, {
  loginEmailChanged, loginPasswordChanged, createAccountButtonPressed
})(LoginForm);

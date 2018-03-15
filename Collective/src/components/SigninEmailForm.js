import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinEmailChanged, signinPasswordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class SigninEmailForm extends Component {

  onEmailChange(text) {
    this.props.signinEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.signinPasswordChanged(text);
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
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { signinEmail, signinPassword } = auth;

  return { signinEmail, signinPassword };
};

export default connect(mapStateToProps, {
  signinEmailChanged, signinPasswordChanged
})(SigninEmailForm);

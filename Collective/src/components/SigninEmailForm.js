import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class SigninEmailForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }


  onPasswordChange(text) {
    this.props.passwordChanged(text);
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
  const { email, password } = auth;

  return { email, password };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged
})(SigninEmailForm);

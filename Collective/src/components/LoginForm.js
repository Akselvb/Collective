import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }


  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onCreateAccountButtonPress() {
    Actions.signinEmailForm();
  }

  renderCreateAccountButton() {
    return (
      <Button onPress={this.onCreateAccountButtonPress.bind(this)}>
        Create Account
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
          <Button>
            Login
          </Button>
        </CardSection>

        <CardSection>
          <Button>
            Facebook
          </Button>
        </CardSection>

        <CardSection>
          <Button>
            Google
          </Button>
        </CardSection>

        <CardSection>
          {this.renderCreateAccountButton()}
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
})(LoginForm);

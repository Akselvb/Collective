import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Actions } from 'react-native-router-flux';
import { loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner, AuthError } from './common';

class LoginForm extends Component {
  onCreateAccountPress() {
    Actions.signup();
  }

  onLoginPress({ email, password }) {
    this.props.loginUser({ email, password });
  }

  renderErrorText() {
    const error = this.props.error;

    if (error) {
      return <AuthError>{error}</AuthError>;
    }
  }

  renderLoginButton() {
    const { handleSubmit } = this.props;

    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={handleSubmit(this.onLoginPress.bind(this))}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Field name="email" label="Email" placeholder="email@gmail.com" component={Input} />
        </CardSection>

        <CardSection>
          <Field
            name="password"
            secureTextEntry
            label="Password"
            placeholder="password"
            component={Input}
          />
        </CardSection>

        <CardSection>{this.renderLoginButton()}</CardSection>

        <CardSection>{this.renderErrorText()}</CardSection>

        <CardSection style={{ paddingTop: 180 }} />

        <CardSection>
          <Button>Sign in with Facebook</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.props.loginWithGoogle}>Sign in with Google</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onCreateAccountPress}>Create an Account</Button>
        </CardSection>
      </Card>
    );
  }
}

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

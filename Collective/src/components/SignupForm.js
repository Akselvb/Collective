import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signupUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner, AuthError } from './common';

class SignupForm extends Component {
  onPress({ email, password }) {
    this.props.signupUser({ email, password });
  }

  renderButton() {
    const { handleSubmit } = this.props;

    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={handleSubmit(this.onPress.bind(this))}>Create an Account</Button>;
  }

  renderErrorText() {
    const error = this.props.error;

    if (error) {
      return (
        <AuthError>{error}</AuthError>
      );
    }
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

        <CardSection>
          <Field
            name="confirmPassword"
            secureTextEntry
            label="Confirm Password"
            placeholder="password"
            component={Input}
          />
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>

        <CardSection>{this.renderErrorText()}</CardSection>

        <CardSection style={{ paddingTop: 350 }} />
      </Card>
    );
  }
}

const mapStateToProps = ({ auth: { error, loading } }) => ({ error, loading });

const validate = ({ email, password, confirmPassword }) => {
  const errors = {};

  if (!email || email.trim() === '') {
    errors.email = 'Please enter an email';
  }
  if (!password || password.trim() === '') {
    errors.password = 'Please enter a password';
  }

  if (!confirmPassword || password.trim() === '') {
    errors.confirmPassword = 'Please confirm password';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
};

export default reduxForm({ form: 'signup', validate })(
  connect(mapStateToProps, {
    signupUser
  })(SignupForm)
);

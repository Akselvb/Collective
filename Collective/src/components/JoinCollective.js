import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Text } from 'react-native';
import { joinCollective } from '../actions';
import { Card, CardSection, Input, Button, Spinner, AuthError } from './common';

class JoinCollective extends Component {

  onJoinCollectivePress({ collectiveId }) {
    const user = this.props.user;
    console.log(user);

    this.props.joinCollective({ user, collectiveId });
  }

  renderErrorText() {
    const error = this.props.error;

    if (error) {
      return (
        <AuthError>{error}</AuthError>
      );
    }
  }

  renderButton() {
    const { handleSubmit } = this.props;

    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={handleSubmit(this.onJoinCollectivePress.bind(this))}>
        Join Collective
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={{ fontSize: 26 }}>Join Collective</Text>
        </CardSection>

        <CardSection>
          <Text>Simply enter the collective code in the box below and click 'Join Collective'</Text>
        </CardSection>

        <CardSection>
          <Field
            name="collectiveId"
            label="Collective ID"
            placeholder="1234-5678"
            component={Input}
          />
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>

        <CardSection>{this.renderErrorText()}</CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, error, loading } }) =>
  ({ user, collectiveId, error, loading });

export default reduxForm({ form: 'collectiveId' })(
  connect(mapStateToProps, {
    joinCollective
  })(JoinCollective)
);

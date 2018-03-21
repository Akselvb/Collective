import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCollective } from '../actions';
import { Card, CardSection, Input, Spinner, Button } from './common';

class CreateCollective extends Component {

  onCreateCollectivePress(collectiveName) {
    const user = this.props.user;

    this.props.createCollective({ user }, collectiveName);
  }

  renderButton() {
    const { handleSubmit } = this.props;

    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={handleSubmit(this.onCreateCollectivePress.bind(this))}>
        Create Collective
      </Button>
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Text style={{ fontSize: 26 }}>Create new Collective</Text>
        </CardSection>

        <CardSection>
          <Field name="collectiveName" label="Collective name" placeholder="My Awesome Collective" component={Input} />
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>

      </Card>
    );
  }
}

const validate = ({ collectiveName }) => {
  const errors = {};

  if (!collectiveName || collectiveName.trim() === '') {
    errors.empty = 'Please enter an email';
  }

  return errors;
};

const mapStateToProps = ({
  manager: { user, collectiveId, error, loading } }) =>
  ({ user, collectiveId, error, loading });

  export default reduxForm({ form: 'collectiveName', validate })(
    connect(mapStateToProps, {
      createCollective
    })(CreateCollective)
  );

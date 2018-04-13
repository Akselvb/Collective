import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../common';
import { sendMessage } from '../../actions';
import Messages from './Messages';

class Chat extends Component {

  sendMessage({ chatInput }) {
    const { collectiveId, user } = this.props;

    this.props.sendMessage({ collectiveId, user }, chatInput);
  }

  renderButton() {
    const { handleSubmit } = this.props;

    return (
      <Button onPress={handleSubmit(this.sendMessage.bind(this))}>Send Message!</Button>
    );
  }

  render() {
    return (
      <Card>

        <Messages />

        <CardSection>
          <Field
            name="chatInput"
            label="Chat Input"
            placeholder="Write something cool"
            component={Input}
          />
        </CardSection>

        <CardSection>{this.renderButton()}</CardSection>

      </Card>
    );
  }
}


const mapStateToProps = ({
  chat: { isFetching, height, user, collectiveId } }) =>
  ({ isFetching, height, user, collectiveId });

export default reduxForm({ form: 'chatInput' })(
  connect(mapStateToProps, {
    sendMessage
  })(Chat)
);

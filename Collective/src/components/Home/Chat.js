import React, { Component } from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input, RoundButton, Card, CardSection } from '../common';
import { sendMessage } from '../../actions';
import Messages from './Messages';


class Chat extends Component {

  /*
    Called when Send Message button is pressed.
    Calls sendMessage in ChatActions.
  */
  sendMessage({ chatInput }) {
    const { collectiveId, user } = this.props;

    this.props.sendMessage({ collectiveId, user }, chatInput);
  }

  /*
    Send Message button.
  */
  renderButton() {
    const { handleSubmit } = this.props;

    return (
      <RoundButton onPress={handleSubmit(this.sendMessage.bind(this))} />
    );
  }

  render() {
    return (
      <Card>
          <Messages />
            <CardSection>
              <Field
                name="chatInput"
                placeholder="Aa"
                component={Input}
              />
            {this.renderButton()}
          </CardSection>
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

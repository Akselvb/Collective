import React, { Component } from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { CardSection, Input, Button } from '../common';
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
      <View style={{ flex: 1, backgroundColor: '#fff', borderColor: 'black', borderWidth: 1 }}>

          <Messages />

          <View style={{ borderColor: 'black', borderWidth: 1 }}>

            <CardSection>
              <Field
                name="chatInput"
                placeholder="Write something cool"
                component={Input}
              />
            </CardSection>

            <CardSection>{this.renderButton()}</CardSection>

          </View>

      </View>
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

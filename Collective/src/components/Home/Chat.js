import React, { Component } from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          ref="scroll"
          onLayout={this.onScrollViewLayout}
        >
          <Messages />
        </KeyboardAwareScrollView>

          <CardSection>
            <Field
              name="chatInput"
              placeholder="Write something cool"
              component={Input}
            />
          </CardSection>

          <CardSection>{this.renderButton()}</CardSection>


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

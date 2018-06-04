import React, { Component } from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { CardSection, Input, Button } from '../common';
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
      <Button onPress={handleSubmit(this.sendMessage.bind(this))}>Send Message!</Button>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
          <Messages />
          <View style={{ borderColor: 'lightgray', borderWidth: 0.5 }}>
            <CardSection>
              <Field
                name="chatInput"
                placeholder="Skriv noe kult!"
                component={Input}
              />
            </CardSection>
            <CardSection>{this.renderButton()}</CardSection>
          </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  }
};

const mapStateToProps = ({
  chat: { isFetching, height, user, collectiveId } }) =>
  ({ isFetching, height, user, collectiveId });

export default reduxForm({ form: 'chatInput' })(
  connect(mapStateToProps, {
    sendMessage
  })(Chat)
);

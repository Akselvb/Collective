import React, { Component } from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input, RoundButton } from '../common';
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
      <View style={styles.containerStyle}>
          <Messages />

            <View style={styles.containerStyle1}>

              <Field
                name="chatInput"
                placeholder="Aa"
                component={Input}
              />

            {this.renderButton()}
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
  },
  containerStyle1: {
    backgroundColor: '#fefefe',
    justifyContent: 'flex-start',
    flexDirection: 'row',
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

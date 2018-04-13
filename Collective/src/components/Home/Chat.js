import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import Messages from './Messages';

class Chat extends Component {

  render() {
    return (
      <CardSection>

        <CardSection>
          <Text style={{ fontSize: 26 }}>Chat</Text>
          <Text> {this.props.isFetching} </Text>
        </CardSection>

        <Messages />

        <CardSection>
          <TextInput style={{ height: 40, width: 150, borderColor: 'gray', borderWidth: 1 }} />
        </CardSection>

      </CardSection>
    );
  }
}


const mapStateToProps = ({
  chat: { isFetching, height } }) =>
  ({ isFetching, height });

export default connect(mapStateToProps)(Chat);

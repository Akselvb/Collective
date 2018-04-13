import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';


class Chat extends Component {

  render() {
    return (
        <CardSection>
          <Text style={{ fontSize: 26 }}>Chat</Text>
        </CardSection>
    );
  }
}


const mapStateToProps = ({
  chat: { isFetching, height } }) =>
  ({ isFetching, height });


export default connect(mapStateToProps)(Chat);

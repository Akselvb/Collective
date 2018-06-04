import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Chat from './Chat';

class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Chat />
      </View>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Home);

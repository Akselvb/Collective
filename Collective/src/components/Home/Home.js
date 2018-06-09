import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card } from '../common';
import Chat from './Chat';
import Notifications from './Notifications';

class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card>
          <Notifications />
        </Card>

        <Chat />
      </View>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Home);

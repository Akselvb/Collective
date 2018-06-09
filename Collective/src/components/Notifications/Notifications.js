import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card } from '../common';

class Notifications extends Component {
  render() {
    return (
      <Card>
          <View style={{ flexDirection: 'row' }}>
            {this.renderCollectiveName()}
          </View>
        <Text> NOTIFICATIONS </Text>
      </Card>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Notifications);

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class CreateEvent extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 22, backgroundColor: '#f5f5f5' }} />

        <Text> Her kommer det masse alternativ </Text>

      </View>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(CreateEvent);

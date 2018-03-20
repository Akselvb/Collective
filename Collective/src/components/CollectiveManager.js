import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';

class CollectiveManager extends Component {

  onJoinCollectivePress() {
    Actions.joinCollective();
  }

  onCreateCollectivePress() {
    Actions.createCollective();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>You are not in a collective yet!</Text>
        </CardSection>

        <CardSection>
          <Button onPress={this.onCreateCollectivePress}>Create new Collective</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onJoinCollectivePress}>Join Collective</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null)(CollectiveManager);

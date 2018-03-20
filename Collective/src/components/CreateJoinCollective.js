import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';

class CreateJoinCollective extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Text>You are not in a collective yet!</Text>
        </CardSection>

        <CardSection>
          <Button>Create new Collective</Button>
        </CardSection>

        <CardSection>
          <Button>Join Collective</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null)(CreateJoinCollective);

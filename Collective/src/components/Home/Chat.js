import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';

class Chat extends Component {

  render() {
    return (
      <Card>

        <CardSection>
          <Text style={{ fontSize: 26 }}>Chat</Text>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({
  manager: { collectiveName } }) =>
  ({ collectiveName });

export default connect(mapStateToProps)(Chat);

import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card } from '../common';

class Settings extends Component {

  render() {
    return (
      <Card>
        <Text> Innstillinger. Få på no knapper her. </Text>
      </Card>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Settings);

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from '../common';

class Notifications extends Component {

  render() {
    return (
        <CardSection>
          <Button> Notifications </Button>
        </CardSection>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Notifications);

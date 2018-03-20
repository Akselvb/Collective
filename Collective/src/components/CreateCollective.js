import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';

class CreateCollective extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Text>Create new Collective</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ home: { user, collectiveId, error, loading } }) =>
  ({ user, collectiveId, error, loading });

export default connect(mapStateToProps)(CreateCollective);

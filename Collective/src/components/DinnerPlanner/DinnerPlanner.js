import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';

class DinnerPlanner extends Component {

  renderCollectiveName() {
    return (
      <CardSection>
        <Text>You are part of collective: </Text>
        <Text style={{ fontWeight: 'bold' }}>{this.props.collectiveName}</Text>
      </CardSection>
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Text style={{ fontSize: 26 }}>DinnerPlanner</Text>
        </CardSection>

        {this.renderCollectiveName()}

      </Card>
    );
  }
}

const mapStateToProps = ({
  manager: { collectiveName } }) =>
  ({ collectiveName });

export default connect(mapStateToProps)(DinnerPlanner);

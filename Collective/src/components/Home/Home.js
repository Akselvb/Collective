import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';

class Home extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Welcome, {this.props.email}!</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ email: auth.user.email });

export default connect(mapStateToProps)(Home);

import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { userFetch } from '../actions';
import { Card, CardSection } from './common';

class Home extends Component {
  componentWillMount() {
  this.props.userFetch();
}


  render() {
    return (
      <Card>
        <CardSection>
            <Text>Welcome, {this.props.user}!</Text>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ home }) => {
  const { user } = home;

  return { user };
};

export default connect(mapStateToProps, { userFetch })(Home);

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, StatusBarStyle, Header } from '../common';
import Chat from './Chat';

class Home extends Component {

  /*
    Get name of the collective. Return header home.
  */
  renderCollectiveName() {
    return (
      <Header backgroundColor='#30C5D2' headerText={this.props.collectiveName} />
    );
  }

  /*

  */

  /*
    Get id of collective.
  */
  renderCollectiveId() {
    return (
      <CardSection>
        <Text>with Collective ID: </Text>
        <Text style={{ fontWeight: 'bold' }}>{this.props.collectiveId}</Text>
      </CardSection>
    );
  }

  /*
    Get other users.
  */
  renderOtherUsers() {
    return (
      <CardSection>
        <Text>Other users in collective: </Text>
        <Text style={{ fontWeight: 'bold' }}>
          {this.props.otherUsers}
        </Text>
      </CardSection>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarStyle />
        <View>


          {this.renderCollectiveName()}

          {this.renderCollectiveId()}

          {this.renderOtherUsers()}

        </View>

        <Chat />

      </View>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Home);

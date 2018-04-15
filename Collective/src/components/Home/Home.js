import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, StatusBarStyle, Header, SquareButton } from '../common';
import Chat from './Chat';
import LibraryList from './LibraryList';

class Home extends Component {

  /*
    Get name of the collective. Return header home.
  */
  renderCollectiveName() {
    return (
      <View style={{ flex: 1 }}>
        <Header backgroundColor='#30C5D2' headerText={this.props.collectiveName} />
      </View>
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
          <View style={{ flexDirection: 'row' }}>
            <SquareButton> Icon1 </SquareButton>
            {this.renderCollectiveName()}
            <SquareButton> Icon2 </SquareButton>
          </View>

        <LibraryList />
        <Chat />

      </View>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Home);

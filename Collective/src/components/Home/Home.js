import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { StatusBarStyle, Header, SquareButton } from '../common';
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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarStyle />
          <View style={{ flexDirection: 'row' }}>
            <SquareButton> Menu </SquareButton>
            {this.renderCollectiveName()}
            <SquareButton> Noti </SquareButton>
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

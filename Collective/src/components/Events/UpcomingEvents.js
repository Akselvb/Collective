import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { StatusBarStyle, Header } from '../common';
import Menu from '../Menu/Menu';
import LibraryList from './LibraryList';

class UpcomingEvents extends Component {
  renderCollectiveName() {
    return (
      <View style={{ flex: 1 }}>
        <Header backgroundColor='#30C5D2' headerText={this.props.collectiveName} />
      </View>
    );
  }

  renderMenu() {
    return <Menu />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarStyle />
          <View style={{ flexDirection: 'row' }}>
            {this.renderCollectiveName()}
          </View>

        {this.renderMenu()}

        <LibraryList />

      </View>
    );
  }
}

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(UpcomingEvents);

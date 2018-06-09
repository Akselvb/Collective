import React, { Component } from 'react';
import { Text, Modal } from 'react-native';
import { connect } from 'react-redux';
import LibraryList from './LibraryList';
import RouterEvents from '../../RouterEvents';
import { Card, CardSection, Button } from '../common';
import { setModalVisibilityEvents } from '../../actions';

class UpcomingEvents extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.isModalVisible}
          >
            <RouterEvents />
          </Modal>
        </CardSection>

        <CardSection>
          <Button onPress={() => { this.props.setModalVisibilityEvents(true); }}>
            Opprett ny hendelse
          </Button>
        </CardSection>

        <CardSection>
          <Text>{this.props.user.email}</Text>
          <Text>{this.props.otherUsers}</Text>
        </CardSection>

        <LibraryList />

      </Card>
    );
  }
}

const mapStateToProps = ({
  events: { user, collectiveName, otherUsers, isModalVisible } }) =>
  ({ user, collectiveName, otherUsers, isModalVisible });

export default connect(mapStateToProps, {
  setModalVisibilityEvents
})(UpcomingEvents);

import React, { Component } from 'react';
import { Text, Modal, ListView } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import LibraryList from './LibraryList';
import RouterEvents from './RouterEvents';
import { Card, CardSection, Button } from '../common';
import EventsListItem from './EventsListItem';
import {
  setModalVisibilityEvents,
  eventsFetch,
  testEvents
} from '../../actions';

let isCalled = false;

class UpcomingEvents extends Component {

  /*
    Can only fetch events when collectiveId is retrieved.
    We only want to call eventsFetch once.
  */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState);
    if (nextProps.collectiveId && !isCalled) {
      isCalled = true;
      nextProps.eventsFetch(nextProps.collectiveId);
    }
  }

/*
  Renders events list. Call only when events are successfully fetched.
*/
  renderEventsList() {
    if (this.props.events) {
      const eventsArray = _.map(this.props.events, (val) => ({ ...val }));

      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(eventsArray);

      return (
        <CardSection>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </CardSection>
      );
    }
  }

/*
  Each row in events list.
*/
  renderRow(event) {
    return <EventsListItem event={event} />;
  }

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

        {this.renderEventsList()}

      </Card>
    );
  }
}

const mapStateToProps = ({
  events: { user, collectiveName, collectiveId, otherUsers, isModalVisible, events } }) =>
  ({ user, collectiveName, collectiveId, otherUsers, isModalVisible, events });

export default connect(mapStateToProps, {
  setModalVisibilityEvents, eventsFetch, testEvents
})(UpcomingEvents);

import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from '../common';

class EventListItem extends Component {
  render() {
    const { title, description, startDate, endDate } = this.props.event;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {title} | {startDate} - {endDate}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EventListItem;

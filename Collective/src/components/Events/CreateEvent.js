import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from '../common';
import {
  setModalVisibilityEvents,
  onTitleChangeText,
  onDescriptionChangeText,
  onStartDateChange,
  onEndDateChange,
  saveEvent
 } from '../../actions';

class CreateEvent extends Component {

  onPress() {
    const { collectiveId, title, description, startDate, endDate } = this.props;
    this.props.saveEvent({ collectiveId }, title, description, startDate, endDate);
    this.setModalVisibility(false);
  }

  setModalVisibility(isVisible) {
    this.props.setModalVisibilityEvents(isVisible);
  }

  render() {
    const { textInputStyle } = styles;

    return (
      <Card>

        <CardSection>
          <Text>Tittel</Text>
          <TextInput
            style={textInputStyle}
            onChangeText={(text) => this.props.onTitleChangeText({ text })}
          />
        </CardSection>

        <CardSection>
          <Text>Beskrivelse</Text>
          <TextInput
            style={textInputStyle}
            onChangeText={(text) => this.props.onDescriptionChangeText({ text })}
          />
        </CardSection>

        <CardSection>
          <Text>Dato start</Text>
          <TextInput
            style={textInputStyle}
            onChangeText={(text) => this.props.onStartDateChange({ text })}
          />
        </CardSection>

        <CardSection>
          <Text>Dato slutt</Text>
          <TextInput
            style={textInputStyle}
            onChangeText={(text) => this.props.onEndDateChange({ text })}
          />
        </CardSection>

        <CardSection>
          <Text>Knapper der man kan legge til de andre i kollektivet også</Text>
        </CardSection>

        <CardSection>
          <Button onPress={this.onPress.bind(this)}>Legg til</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => { this.setModalVisibility(false); }}
          >
            Avbryt
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textInputStyle: {
    height: 40,
    width: 100,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10
  }
};

const mapStateToProps = ({
  events: { user, collectiveName, collectiveId, otherUsers, title, description, startDate, endDate } }) =>
  ({ user, collectiveName, collectiveId, otherUsers, title, description, startDate, endDate });

export default connect(mapStateToProps, {
  setModalVisibilityEvents,
  onTitleChangeText,
  onDescriptionChangeText,
  onStartDateChange,
  onEndDateChange,
  saveEvent
})(CreateEvent);

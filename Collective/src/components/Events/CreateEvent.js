import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection } from '../common';
import {
  setModalVisibilityEvents,
  onTitleChangeText,
  onDescriptionChangeText,
  onDateChange,
  saveEvent
 } from '../../actions';

class CreateEvent extends Component {

  onPress() {
    const { collectiveId, title, description, date } = this.props;
    this.props.saveEvent({ collectiveId }, title, description, date);
    this.setModalVisibility(false);
  }

  setModalVisibility(isVisible) {
    this.props.setModalVisibilityEvents(isVisible);
  }

  renderButton() {
    return <Button onPress={this.onPress.bind(this)}>Legg til</Button>;
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
          <Text>Dato</Text>
          <TextInput
            style={textInputStyle}
            onChangeText={(text) => this.props.onDateChange({ text })}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
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
  events: { collectiveName, collectiveId, otherUsers, title, description, date } }) =>
  ({ collectiveName, collectiveId, otherUsers, title, description, date });

export default connect(mapStateToProps, {
  setModalVisibilityEvents,
  onTitleChangeText,
  onDescriptionChangeText,
  onDateChange,
  saveEvent
})(CreateEvent);

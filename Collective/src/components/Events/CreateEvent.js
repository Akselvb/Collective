import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { Button } from '../common';
import {
  closeModal,
  onTitleChangeText,
  onDescriptionChangeText,
  onDateChange,
  saveEvent
 } from '../../actions';

class CreateEvent extends Component {

  onPress() {
    const { collectiveId, title, description, date } = this.props;
    this.props.saveEvent({ collectiveId }, title, description, date);
    this.setModalVisible(false);
  }

  setModalVisible(visible) {
    this.props.closeModal(visible);
  }

  renderButton() {
    return <Button onPress={this.onPress.bind(this)}>Legg til</Button>;
  }

  render() {
    const { containerStyle, textStyle, createNewStyle, textInputStyle } = styles;

    return (
      <View style={containerStyle}>

      <View>
        <Text>Tittel</Text>
        <TextInput
          style={textInputStyle}
          onChangeText={(text) => this.props.onTitleChangeText({ text })}
        />
      </View>

      <View>
        <Text>Beskrivelse</Text>
        <TextInput
          style={textInputStyle}
          onChangeText={(text) => this.props.onDescriptionChangeText({ text })}
        />
      </View>

      <View>
        <Text>Dato</Text>
        <TextInput
          style={textInputStyle}
          onChangeText={(text) => this.props.onDateChange({ text })}
        />
      </View>

      <View style={{ minHeight: 40 }}>
        {this.renderButton()}
      </View>

        <TouchableOpacity
          onPress={() => { this.setModalVisible(false); }}
          style={createNewStyle}
        >
          <Text style={textStyle}>Avbryt</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = {

  containerStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fdfdfd'
  },

  textStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  createNewStyle: {
    maxHeight: 40,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    borderColor: 'lightgray',
    borderBottomWidth: 0.5,
  },

  textInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10
  }

};

const mapStateToProps = ({
  events: { collectiveName, collectiveId, otherUsers, modalVisible, title, description, date } }) =>
  ({ collectiveName, collectiveId, otherUsers, modalVisible, title, description, date });

export default connect(mapStateToProps, {
  closeModal,
  onTitleChangeText,
  onDescriptionChangeText,
  onDateChange,
  saveEvent
})(CreateEvent);

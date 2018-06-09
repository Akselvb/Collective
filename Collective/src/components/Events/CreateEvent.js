import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { closeModal } from '../../actions';

class CreateEvent extends Component {

  setModalVisible(visible) {
    this.props.closeModal(visible);
  }

  render() {
    const { containerStyle, textStyle, createNewStyle, textInputStyle } = styles;

    return (
      <View style={containerStyle}>

      <View>
        <Text>Tittel</Text>
        <TextInput
          style={textInputStyle}
          // onChangeText={(text) => this.setState({ text })}
          // value={this.state.text}
        />
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
  events: { collectiveName, otherUsers, modalVisible } }) =>
  ({ collectiveName, otherUsers, modalVisible });

export default connect(mapStateToProps, {
  closeModal
})(CreateEvent);

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { closeModal } from '../../actions';

class CreateEvent extends Component {

  setModalVisible(visible) {
    this.props.closeModal(visible);
  }

  render() {
    const { titleTextStyle, titleContainerStyle } = styles;
    return (
      <View style={{ flex: 1 }}>

        <View style={titleContainerStyle}>
          <Text style={titleTextStyle}>Opprett ny hendelse</Text>
        </View>

        <Text> Her kommer det masse alternativ EVENTS</Text>

        <TouchableOpacity onPress={() => { this.setModalVisible(false); }} style={styles.createNewStyle} >
          <Text style={styles.textStyle}>Avbryt</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = {
  titleContainerStyle: {
    paddingTop: 20,
    fontSize: 16,
    alignItems: 'center',
    minHeight: 40,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1
  },
  titleTextStyle: {
    fontSize: 16,
    color: '#72BA6F',
    marginBottom: 10
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
  }

};

const mapStateToProps = ({
  events: { collectiveName, otherUsers, modalVisible } }) =>
  ({ collectiveName, otherUsers, modalVisible });

export default connect(mapStateToProps, {
  closeModal
})(CreateEvent);

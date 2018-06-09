import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import { connect } from 'react-redux';
import LibraryList from './LibraryList';
import CreateEvent from './CreateEvent';

import { openModal, closeModal } from '../../actions';

class UpcomingEvents extends Component {

  setModalVisible(visible) {
    console.log(this.props);
    this.props.openModal(visible);
  }

  getOtherUsers() {
    return this.props.otherUsers;
  }

  render() {
    const { createNewStyle, textStyle, filterStyle, containerStyle } = styles;

    return (
      <View style={containerStyle}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
        >
          <CreateEvent />
        </Modal>

        <TouchableOpacity onPress={() => { this.setModalVisible(true); }} style={createNewStyle}>
          <Text style={textStyle}>Opprett ny hendelse</Text>
        </TouchableOpacity>

        <View style={filterStyle}>
          <Text style={textStyle}>
            {this.getOtherUsers()}
          </Text>
        </View>

        <LibraryList />
      </View>
    );
  }
}

const styles = {
  createNewStyle: {
    maxHeight: 40,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    borderColor: 'lightgray',
    borderBottomWidth: 0.5,
  },

  textStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  filterStyle: {
    maxHeight: 40,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    borderColor: 'lightgray',
    borderBottomWidth: 0.5,
    backgroundColor: '#f5f5f5'
  },

  containerStyle: {
    flex: 10,
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
  }
};

const mapStateToProps = ({
  events: { user, collectiveName, otherUsers, modalVisible } }) =>
  ({ user, collectiveName, otherUsers, modalVisible });

export default connect(mapStateToProps, {
  openModal, closeModal
})(UpcomingEvents);

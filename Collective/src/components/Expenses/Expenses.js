import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
import CreateExpense from './CreateExpense';

class Expenses extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {
    const { createNewStyle, textStyle, filterStyle, containerStyle } = styles;

    return (
      <View style={containerStyle}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <CreateExpense />
        </Modal>

        <TouchableOpacity onPress={() => { this.setModalVisible(true); }} style={createNewStyle}>
          <Text style={textStyle}>Legg til ny utgift</Text>
        </TouchableOpacity>

        <View style={filterStyle}>
          <Text style={textStyle}>De andre i kollektivet</Text>
        </View>

        <View>
          <Text>Her er en liste over alle innkjøp som har blitt gjort.</Text>
        </View>

        <View style={{ marginTop: 100 }}>
          <Text>Her er en liste over oppgjør, hvem som skylder hvem.</Text>
        </View>

        <View style={{ marginTop: 100 }}>
          <Text>Nederst kan det være en knapp: Jeg har gjort opp for meg (eller lignende).</Text>
        </View>

        <View style={{ marginTop: 100 }}>
          <Text>Hadde vært sykehus med api til vipps også.</Text>
        </View>

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
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(Expenses);

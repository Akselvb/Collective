import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { closeModal } from '../../actions';

class ShoppingList extends Component {

  setModalVisible(visible) {
    this.props.closeModal(visible);
  }

  render() {
    const { textStyle, createNewStyle } = styles;
    return (
      <View style={{ flex: 1 }}>

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
})(ShoppingList);

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class CreateEvent extends Component {

  render() {
    const { titleTextStyle, titleContainerStyle } = styles;
    return (
      <View style={{ flex: 1 }}>

        <View style={titleContainerStyle}>
          <Text style={titleTextStyle}>Opprett ny hendelse</Text>
        </View>

        <Text> Her kommer det masse alternativ EVENTS</Text>

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
  }
};

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps)(CreateEvent);

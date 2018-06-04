import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Settings extends Component {

  render() {
    const { containerStyle } = styles;

    return (
      <View style={containerStyle}>
        <Text> Innstillinger. Få på no knapper her. </Text>
      </View>
    );
  }
}

const styles = {
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

export default connect(mapStateToProps)(Settings);

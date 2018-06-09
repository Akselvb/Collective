import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setModalVisibilityNotifications } from '../../actions';
import { Card, Button, CardSection } from '../common';

class Notifications extends Component {

  render() {
    const { viewStyle, textStyle } = styles;

    return (
      <View style={{ flex: 1 }}>

        <View style={viewStyle}>
          <Text style={textStyle}>Notifikasjoner</Text>
        </View>

        <Card>
          <CardSection>
            <Button
              onPress={() => { this.props.setModalVisibilityNotifications(false); }}
            >
              Avbryt
            </Button>
          </CardSection>
        </Card>

      </View>
    );
  }
}

const styles = {
  viewStyle: {
    paddingTop: 20,
    alignItems: 'center',
    minHeight: 40,
    backgroundColor: '#f5f5f5'
  },
  textStyle: {
    fontSize: 20,
    color: '#72BA6F',
    marginBottom: 10
  }
};

const mapStateToProps = ({
  manager: { user, collectiveId, collectiveName, otherUsers } }) =>
  ({ user, collectiveId, collectiveName, otherUsers });

export default connect(mapStateToProps, {
  setModalVisibilityNotifications
})(Notifications);

import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import Chat from './Chat';
import { setModalVisibilityNotifications } from '../../actions';
import Notifications from './Notifications';

class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.isModalVisible}
        >
          <Notifications />

        </Modal>

        <Card>
          <CardSection>
            <Button onPress={() => { this.props.setModalVisibilityNotifications(true); }}>
              Notifikasjoner
            </Button>
          </CardSection>
        </Card>

        <Chat />

      </View>
    );
  }
}

const mapStateToProps = ({
  home: { isModalVisible } }) =>
  ({ isModalVisible });

export default connect(mapStateToProps, {
  setModalVisibilityNotifications
})(Home);

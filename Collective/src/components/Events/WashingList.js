import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import { setModalVisibilityEvents } from '../../actions';

class WashingList extends Component {

  setModalVisible(isVisible) {
    this.props.setModalVisibilityEvents(isVisible);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button
            onPress={() => { this.setModalVisible(false); }}
          >
            Avbryt
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({
  events: { user, collectiveName, otherUsers } }) =>
  ({ user, collectiveName, otherUsers });

export default connect(mapStateToProps, {
  setModalVisibilityEvents
})(WashingList);

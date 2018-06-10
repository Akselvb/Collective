import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import { setModalVisibilityEvents } from '../../actions';

class ShoppingList extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Button
            onPress={() => { this.props.setModalVisibilityEvents(false); }}
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
})(ShoppingList);

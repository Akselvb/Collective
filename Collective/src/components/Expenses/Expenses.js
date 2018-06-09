import React, { Component } from 'react';
import { Text, Modal } from 'react-native';
import { connect } from 'react-redux';
import CreateExpense from './CreateExpense';
import { Card, CardSection, Button } from '../common';
import { setModalVisibilityExpenses } from '../../actions';

class Expenses extends Component {

  getOtherUsers() {
    return this.props.otherUsers;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.isModalVisible}
          >
            <CreateExpense />
          </Modal>
        </CardSection>

        <CardSection>
          <Button onPress={() => { this.props.setModalVisibilityExpenses(true); }}>
            Legg til ny utgift
          </Button>
        </CardSection>

        <CardSection>
          <Text>De andre i kollektivet</Text>
        </CardSection>

        <CardSection>
          <Text>Her er en liste over alle innkjøp som har blitt gjort.</Text>
        </CardSection>

        <CardSection>
          <Text>Her er en liste over oppgjør, hvem som skylder hvem.</Text>
        </CardSection>

        <CardSection>
          <Text>Nederst kan det være en knapp: Jeg har gjort opp for meg (eller lignende).</Text>
        </CardSection>

        <CardSection>
          <Text>Hadde vært sykehus med api til vipps også.</Text>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({
  expenses: { collectiveId, otherUsers, isModalVisible } }) =>
  ({ collectiveId, otherUsers, isModalVisible });

export default connect(mapStateToProps, {
  setModalVisibilityExpenses
})(Expenses);

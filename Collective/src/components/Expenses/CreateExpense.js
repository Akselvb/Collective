import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Header, Button } from '../common';
import { setModalVisibilityExpenses } from '../../actions';

class CreateExpense extends Component {

  render() {
    return (
      <View>

        <Header>
          Hvordan får man denne til å synes?
        </Header>

        <Card>
          <CardSection>
            <Text> Her kommer det masse alternativ EXPENSES</Text>
          </CardSection>
        </Card>

        <CardSection>
          <Button
            onPress={() => { this.props.setModalVisibilityExpenses(false); }}
          >
            Avbryt
          </Button>
        </CardSection>

      </View>
    );
  }
}

const mapStateToProps = ({
  expenses: { collectiveId, otherUsers } }) =>
  ({ collectiveId, otherUsers });

export default connect(mapStateToProps, {
  setModalVisibilityExpenses
})(CreateExpense);

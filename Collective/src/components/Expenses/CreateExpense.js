import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from '../common';
import { setModalVisibilityExpenses } from '../../actions';

class CreateExpense extends Component {

  render() {
    const { viewStyle, textStyle } = styles;
    return (
      <View style={{ flex: 1 }}>

        <View style={viewStyle}>
          <Text style={textStyle}>Legg til utlegg</Text>
        </View>

        <Card>
          <CardSection>
            <Button
              onPress={() => { this.props.setModalVisibilityExpenses(false); }}
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
  expenses: { user, collectiveId, otherUsers } }) =>
  ({ user, collectiveId, otherUsers });

export default connect(mapStateToProps, {
  setModalVisibilityExpenses
})(CreateExpense);

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MenuButton } from './MenuButton';

class Menu extends Component {

  onHomeButtonPressed() {
    Actions.home();
  }

  onUpcomingEventsButtonPressed() {
    Actions.upcomingEvents();
  }

  onCreateEventButtonPressed() {
    Actions.createEvent();
  }

  onExpensesButtonPressed() {
    Actions.expenses();
  }

  onNotificationsButtonPressed() {
    Actions.notifications();
  }

  onSettingsButtonPressed() {
    Actions.settings();
  }

  render() {
    return (
      <View style={{ backgroundColor: '#30C5D2', flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MenuButton onPress={this.onHomeButtonPressed}> Home </MenuButton>
          <MenuButton onPress={this.onUpcomingEventsButtonPressed}> Upcoming Events </MenuButton>
          <MenuButton onPress={this.onCreateEventButtonPressed}> Create Event </MenuButton>
          <MenuButton onPress={this.onExpensesButtonPressed}> Expenses </MenuButton>
          <MenuButton onPress={this.onNotificationsButtonPressed}> Notifications </MenuButton>
          <MenuButton onPress={this.onSettingsButtonPressed}> Settings </MenuButton>
        </ScrollView>
      </View>
    );
  }
}

export default Menu;

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { MenuButton } from './MenuButton';

class Menu extends Component {

  render() {
    return (
      <View style={{ backgroundColor: '#30C5D2', flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MenuButton> Home </MenuButton>
          <MenuButton> Upcoming Events </MenuButton>
          <MenuButton> Create Event </MenuButton>
          <MenuButton> Expenses </MenuButton>
          <MenuButton> Notifications </MenuButton>
          <MenuButton> Settings </MenuButton>
        </ScrollView>
      </View>
    );
  }
}

export default Menu;

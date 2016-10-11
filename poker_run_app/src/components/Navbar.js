import React, {Component} from 'react';
import {View } from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import LoginForm from './LoginForm';
import CheckPoints from './CheckPoints';
import Logout from './Logout';
import MainPage from './MainPage'


class NavBar extends Component {
  render() {
    return (
      <ScrollableTabView style={{marginTop: 20}} renderTabBar={() => <DefaultTabBar />} >
        <MainPage tabLabel="Event Details" />
        <CheckPoints tabLabel="Check Points" />
        <Logout tabLabel="Logout" />
      </ScrollableTabView>

    );
  }
}
export default NavBar;

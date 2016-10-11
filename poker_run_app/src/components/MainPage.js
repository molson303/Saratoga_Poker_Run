import React, {Component} from 'react';
import {Text, View, Image,ScrollView} from 'react-native';
import firebase from 'firebase';
import { Button, ProfileCard, CardTwo, CardSectionLogOutButton, Header } from './common';
//redux
import LibraryList from './LibraryList';
import reducers from '../reducers';
import  { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginForm from './LoginForm';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

class MainPage extends Component {
state = {};



  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <View style={{ flex: 1}}>
          <Provider store={createStore(reducers)}>
            <LibraryList />
          </Provider>
        </View>
      </ScrollView>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize:20,
    alignSelf: 'center',
    color: 'red',
    fontWeight: "bold",
    backgroundColor: "#E6DAC7"
  },
  background: {
    backgroundColor: "#7CB3E8",
    flex: 1,
    width: null,
    height: 490
  },
  cardStyle: {
    marginTop: 70,
  },
  container: {
    backgroundColor: "#7CB3E8",
    paddingBottom: 140,
  },

}

export default MainPage;

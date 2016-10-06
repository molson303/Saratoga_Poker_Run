import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import NavigationBar from 'react-native-navbar';
import firebase from 'firebase';
import { Button, ProfileCard, CardTwo, CardSectionLogOutButton } from './common';
//redux
import LibraryList from './LibraryList';
import reducers from '../reducers';
import  { createStore } from 'redux';
import { Provider } from 'react-redux';
import LoginForm from './LoginForm';




class MainPage extends Component {
state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1}}>
          <Provider store={createStore(reducers)}>
            <LibraryList />
          </Provider>
        </View>

          <CardSectionLogOutButton>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
        </CardSectionLogOutButton>

      </View>
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
    paddingBottom: 20,
  }


}

export default MainPage;

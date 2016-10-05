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


const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};
const leftButtonConfig = {
  title:'Back',
  handler: () => alert('Back')
}

const titleConfig = {
  title: 'Event Info',
};

class MainPage extends Component {

  state = {};
  render() {
    return (
      <View>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={leftButtonConfig}
          />
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
    backgroundColor: "#2273EB",
    flex: 1,
    width: null,
    height: 490
  },
  cardStyle: {
    marginTop: 70,
  },


}

export default MainPage;

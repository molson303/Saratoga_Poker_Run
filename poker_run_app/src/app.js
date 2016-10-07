import React, {Component} from 'react';

import {View, Image, Text, ScrollView, Navigator} from 'react-native';
import NavigationBar from 'react-native-navbar';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Events from './components/Events'
class App extends Component {
   state = { loggedIn : null};

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyC8XSti02w4B0Jlbdn2dJsKQHpqt1vKMvI",
    authDomain: "authentication-6efb4.firebaseapp.com",
    databaseURL: "https://authentication-6efb4.firebaseio.com",
    storageBucket: "authentication-6efb4.appspot.com",
    messagingSenderId: "456466240829"
  });

  firebase.auth().onAuthStateChanged((user)=> {
    if (user){
      this.setState({ loggedIn: true });
    }else{
      this.setState({ loggedIn: false })
    }
  });
}
renderContent() {
  switch (this.state.loggedIn){
    case true:
      return <MainPage />;
    case false:
      return <LoginForm />;
    default:
      return <Spinner size='large' />;
  }
}

  render() {
    return(
      <ScrollView>
        <Header />
        {this.renderContent()}
      </ScrollView>

    );
  }
}


const styles = {
  tab_text: {
    fontSize: 8,
  },
}

export default App;

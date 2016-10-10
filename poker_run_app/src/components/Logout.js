import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Button, ProfileCard, CardTwo, CardSectionLogOutButton } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm'

class Logout extends Component{

  render (){
    return (
    <View style={styles.container}>
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
  container: {
    backgroundColor: "#7CB3E8",
    paddingBottom: 50,
  },
}

export default Logout;

import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, CardTwo, CardSectionButton } from './common';



class MainPage extends Component {
  state = {};

  render() {
    return (
    <Image source={require('./common/img/sled.jpg')} style={styles.background}>
    <CardTwo>
    <Button onPress={() => firebase.auth().signOut()}>
      Log Out
    </Button>
    </CardTwo>

    </Image>
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
    flex: 1,
    width: null,
    height: 490
  }

}

export default MainPage;

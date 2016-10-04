import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import NavigationBar from 'react-native-navbar';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, CardTwo, CardSectionButton } from './common';



class MainPage extends Component {
  state = {};

  render() {
    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    };
    const leftButtonConfig = {
      title:'Back',
      handler: () => alert('Back')
    }

    const titleConfig = {
      title: 'Profile',
    };


    return (
    <View style={styles.background}>
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={leftButtonConfig} />
      </View>
    <CardTwo>
    <Button onPress={() => firebase.auth().signOut()}>
      Log Out
    </Button>
    </CardTwo>

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
  }

}

export default MainPage;

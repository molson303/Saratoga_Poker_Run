import React, {Component} from 'react';
import {View, Text, Linking} from 'react-native';
import { Button, ProfileCard, CardTwo, CardSectionLogOutButton, Header } from './common';
import firebase from 'firebase';

class CheckPoints extends Component{

// LAST ADDED THIS TO THE CODE AND IT DOESNT WORK WTF
componentDidMount() {
  var url = Linking.getInitialURL().then((url) => {
    if (url) {
      console.log('Initial url is: ' + url);
    }
  }).catch(err => console.error('An error occurred', err));
}


  render (){
    return (
        <View style={styles.container}>
          <Header />
          <Text>Insert Content Here</Text>
          {this.componentDidMount()}
        </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "#7CB3E8",
    paddingBottom: 400,
  },
}



export default CheckPoints;

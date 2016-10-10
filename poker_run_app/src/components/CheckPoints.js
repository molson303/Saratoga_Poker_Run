import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button, ProfileCard, CardTwo, CardSectionLogOutButton, Header } from './common';
import firebase from 'firebase';

class CheckPoints extends Component{
  render (){
    return (
        <View style={styles.container}>
          <Header />
          <Text>Insert Content Here</Text>
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



export default CheckPoints;

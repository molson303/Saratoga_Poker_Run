import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button, ProfileCard, CardTwo, CardSectionLogOutButton } from './common';
import firebase from 'firebase';

class Events extends Component{
  render (){
    return (
        <View style={styles.container}>
          <Text>These are the events</Text>
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



export default Events;

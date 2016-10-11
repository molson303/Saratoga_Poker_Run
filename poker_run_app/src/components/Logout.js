import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import { Button, ProfileCard, CardTwo, CardSectionLogOutButton, CardSectionImage, CardSection } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm'

class Logout extends Component{

  render (){
    return (
    <ScrollView style={styles.container}>
        <Text style={styles.text}>We Hope To See You Again!</Text>
      <CardSectionImage>
        <Image source={require('./common/img/pool.jpg')} style={styles.mainImage}></Image>
      </CardSectionImage>
      <CardSectionLogOutButton>
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      </CardSectionLogOutButton>
    </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "#7CB3E8",
    paddingBottom: 500,
    // justifyContent: 'center',
    // alignItems: 'center',
    },
    mainImage: {
      marginTop: 5,
      flex: 1,
      width: null,
      height: 350,
    },
    text: {
      fontSize: 50,
      color: "black",
      marginLeft: 10,


    }
  }


export default Logout;

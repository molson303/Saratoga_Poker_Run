import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import { Button, ProfileCard, CardTwo, CardSectionLogOutButton, CardSectionImage, CardSection } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm'

class Logout extends Component{

  render (){
    return (
    <ScrollView style={styles.container}>
      <CardSection>
        <Text style={styles.text}>We Hope To See You Again!</Text>
      </CardSection>
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
    },
    mainImage: {
      marginTop: 10,
      flex: 1,
      width: null,
      height: 400,
    },
    text: {
      fontSize: 25,
      color: "black",
      marginLeft: 10,

    }
  }


export default Logout;

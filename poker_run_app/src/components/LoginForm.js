import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, CardTwo, CardSectionButton, CardSectionImage } from './common';



class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false };

  onButtonPress(){
    const {email, password } = this.state;

    this.setState({error: '', loading: true});

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    });
  }


onLoginFail(){
  this.setState({ error: 'Authentication Failed - Password Must be at Least 6 Characters', loading: false});
  }


onLoginSuccess() {
  this.setState({

    email: '',
    password: '',
    loading: false,
    error: ''
  });
}

renderButton(){
  if (this.state.loading){
    return <Spinner size="small" />;
  }
  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Log In
    </Button>
  );
}
  render() {
    return (
      <View style={styles.background}>
      <Card>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
            <Input
              placeholder = "user@gmail.com"
              label="Email"
              value = {this.state.email}
              onChangeText={email => this.setState({email})}

              />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder = "password"
              label="Password"
              value = {this.state.password}
              onChangeText={password => this.setState({password})}
            />
          </CardSection>
        </Card>
        <CardSectionImage>
          <Image source={require('./common/img/janssen_sled.jpg')} style={styles.mainImage}></Image>
        </CardSectionImage>
        <CardTwo>
          <CardSectionButton>
            {this.renderButton()}
          </CardSectionButton>
        </CardTwo>
    </View>
    );
  }
}
// #113A79
const styles = {
  errorTextStyle: {
    fontSize:20,
    alignSelf: 'center',
    color: 'red',
    backgroundColor: "#F8F8F8"
  },
  mainImage: {
    flex: 1,
    width: null,
    height: 250
  },
  background:{
    backgroundColor: "#113A79"
  }

}

export default LoginForm;

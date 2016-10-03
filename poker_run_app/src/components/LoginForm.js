import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, CardTwo } from './common';



class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false };

  onButtonPress(){
    const { email, password } = this.state;

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
  this.setState({ error: 'Authentication Failed', loading: false});
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
    <Image source={require('./common/img/hotSprings.jpg')} style={styles.background}>
      
        <Card>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection style={styles.container}>
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
        <CardTwo>
          <CardSection>
            {this.renderButton()}
          </CardSection>
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
    height: 600
  }

}

export default LoginForm;

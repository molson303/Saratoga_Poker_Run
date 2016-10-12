import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Header, CardSection, UserCardSection } from './common';

class CheckPoints extends Component{

  render (){
    return (
        <ScrollView style={styles.container}>
          <Header />
          <CardSection>
            <Text style={styles.text}>1st Stop: Rendezvous Lodge</Text>
          </CardSection>
            <UserCardSection>
              <Text  style={styles.text}>mike@hired.com - Checked-In</Text>
            </UserCardSection>
            <UserCardSection>
              <Text  style={styles.text}>rick@gmail.com - Checked-In</Text>
            </UserCardSection>
          <CardSection>
            <Text>2nd Stop: Nelson Park Safety Hut</Text>
          </CardSection>
          <UserCardSection>
            <Text  style={styles.text}>sarah@gmail.com - Checked-In</Text>
          </UserCardSection>
          <UserCardSection>
            <Text  style={styles.text}>rick@gmail.com - Checked-In</Text>
          </UserCardSection>
          <UserCardSection>
            <Text  style={styles.text}>samantha@gmail.com - Checked-In</Text>
          </UserCardSection>
          <UserCardSection>
            <Text  style={styles.text}>mike@hired.com - Checked-In</Text>
          </UserCardSection>
          <CardSection>
            <Text>3rd Stop: Lake Marie via snowmobile trail</Text>
          </CardSection>
          <UserCardSection>
            <Text  style={styles.text}>christopher@gmail.com - Checked-In</Text>
          </UserCardSection>
          <UserCardSection>
            <Text  style={styles.text}>jack@gmail.com - Checked-In</Text>
          </UserCardSection>
          <UserCardSection>
            <Text  style={styles.text}>mike@hired.com - Checked-In</Text>
          </UserCardSection>
          <CardSection>
            <Text>4th Stop: Quealy Safety Hut</Text>
          </CardSection>
          <UserCardSection>
            <Text  style={styles.text}>mike@hired.com - Checked-In</Text>
          </UserCardSection>
          <CardSection>
            <Text>5th Stop: Saratoga Hot Springs Resort</Text>
          </CardSection>
          <UserCardSection>
            <Text  style={styles.text}>mike@hired.com - Finished</Text>
          </UserCardSection>
        </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "#7CB3E8",
    paddingBottom: 400,
  },
  text: {
    color:"black",
  }
}



export default CheckPoints;

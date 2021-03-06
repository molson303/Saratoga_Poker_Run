import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
      <View style={styles.containerStyle}>
      {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#F2F2ED',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#F8F8F8',
    borderWidth: 2,
    position: 'relative',
    marginTop:5

  }
};

export { CardSection };

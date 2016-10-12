import React from 'react';
import { View } from 'react-native';

const UserCardSection = (props) => {
  return (
      <View style={styles.containerStyle}>
      {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#1D65D4',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#F8F8F8',
    borderWidth: 2,
    position: 'relative',
    marginTop:5,
    marginLeft: 15,
    marginRight: 15,

  }
};

export { UserCardSection };

import React from 'react';
import { View } from 'react-native';

const CardSectionLogOutButton = (props) => {
  return (
      <View style={styles.containerStyle}>
      {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    borderRadius: 7,
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
    position: 'relative',
    marginTop: 20,
  }
};

export { CardSectionLogOutButton };

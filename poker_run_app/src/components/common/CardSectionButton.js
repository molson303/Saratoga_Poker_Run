import React from 'react';
import { View } from 'react-native';

const CardSectionButton = (props) => {
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
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-start',
    elevation: 2,
    flexDirection: 'row',
    borderColor: '#154792',
    borderWidth: 2,
    position: 'relative',
    marginTop: 50,
  }
};

export { CardSectionButton };

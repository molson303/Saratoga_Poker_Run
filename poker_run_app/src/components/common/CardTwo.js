import React from 'react';
import { View } from 'react-native';

const CardTwo = (props) => {
  return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
  }
};

export { CardTwo };

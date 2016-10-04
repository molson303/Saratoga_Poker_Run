import React from 'react';
import { View } from 'react-native';

const CardSectionImage = (props) => {
  return (
      <View style={styles.containerStyle}>
      {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    paddingTop: 1,
    paddingBottom: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  }
};

export { CardSectionImage };

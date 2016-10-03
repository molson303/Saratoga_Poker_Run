//import libraries to make a component
import React from 'react';
import { Text, View} from 'react-native'

//make a component
const Header = (props) =>{
  const {textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 4,
    position: 'relative',

  },
  textStyle: {
    fontSize: 30
  }

};

//make the component available to other parts of the app
export { Header };

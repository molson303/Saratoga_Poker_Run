//import libraries to make a component
import React from 'react';
import { Text, View, Image} from 'react-native'

//make a component
const Header = (props) =>{
  const {textStyle, viewStyle, imgStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image style={imgStyle}
        source={require('./img/poker_run.png')}
        />
    </View>
  );
};
// <Text style={textStyle}>{props.headerText}</Text>

const styles = {
  viewStyle: {
    backgroundColor: '#7CB3E8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 4,
    position: 'relative',

  },
  textStyle: {
    fontSize: 30
  },
  imgStyle: {
    height: 130,
    width: 450,
    // position: "relative"
  }

};

//make the component available to other parts of the app
export { Header };

import React from "react";
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children}) => {

const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>

  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#8F622E',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F8F8F8',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#8F622E',
    marginLeft: 5,
    marginRight:5,


  }
};
export { Button };
// #F8F8F8

import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return(
    <View style = {containerStyle}>
      <Text style = {labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry = {secureTextEntry}
        placeholder = {placeholder}
        autoCorrect={false}
        style = {inputStyle}
        value={value}
        onChangeText={onChangeText}

      />
    </View>
  );
};

const styles = {
  inputStyle: {
    fontFamily: "sans-serif",
    color: 'black',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 30,
    flex: 2
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 1,
    color: 'black',
    fontWeight: 'bold'
  },
  containerStyle: {
    height: 45,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'

  }
};

export { Input };

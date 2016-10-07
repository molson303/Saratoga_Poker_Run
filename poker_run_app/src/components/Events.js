import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';





class Events extends Component{
  render (){
    return (
      <View>
      <TouchableOpacity>
      <Text>
        Click ME
      </Text>
    </TouchableOpacity>
  </View>
  )
  }
}




export default Events;

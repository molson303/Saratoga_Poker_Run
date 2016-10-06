import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderDescription() {

    const { library, expanded} = this.props;
    if (expanded){
      return(
        <CardSection>
          <View style = {styles.container}>
            <View style = {styles.item}>
              <Text>{library.description}</Text>
            </View>
            <View style = {styles.item}>
              <Text>{library.description1}</Text>
            </View>
            <View style = {styles.item}>
              <Text>{library.description2}</Text>
            </View>
            <View style = {styles.item}>
              <Text>{library.description3}</Text>
            </View>
            <View style = {styles.item}>
              <Text>{library.description4}</Text>
            </View>




          </View>
        </CardSection>
      );
    }
  }

render() {
    const { titleStyle, bodyStyle, headerStyle } = styles;
    const {id, title } = this.props.library;


    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          <View style={bodyStyle}>
            {this.renderDescription()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  header: {
    color: "black"
  },

  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
    color: "black",
  },
  bodyStyle: {
    backgroundColor: "#7CB3E8",
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    paddingBottom:50,
  },
  item: {
    flex: 1,
    marginTop: 5,
  }

};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id
  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);

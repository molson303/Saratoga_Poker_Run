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
    const { library, expanded } = this.props;
    if (expanded){
      return(
        <CardSection>
          <Text style ={{flex: 1}}>
          {library.description}
          {library.description1}
          </Text>
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
        <View style={headerStyle}>
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
  headerStyle: {
    backgroundColor: "#F6E8CD"
  },
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
    color: "black",
  },
  bodyStyle: {
    backgroundColor: "#F6E8CD",
    }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id
  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);

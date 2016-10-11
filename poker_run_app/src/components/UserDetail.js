import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import CheckPointCard from './Card';
import CheckPointCardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  const {thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
        }= styles;
  return (
  <CheckPointCard>
    <CheckPointCardSection>
      <View style={thumbnailContainerStyle}>
        <Image
          style={thumbnailStyle}
          source={{ uri: thumbnail_image}}
          />
      </View>

      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CheckPointCardSection>
    <CheckPointCardSection>
      <Image
        style={imageStyle}
        source={{uri: image}} />
    </CheckPointCardSection>
    <CheckPointCardSection>
      <Button onPress={() => Linking.openURL(url)}>
        Buy Now
      </Button>
    </CheckPointCardSection>
  </CheckPointCard>
  );
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;

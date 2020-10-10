import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView, Dimensions, Platform, StyleSheet } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { NEWS } from '../shared/news';
import { LATEST } from '../shared/latest';

const { width: screenWidth } = Dimensions.get('window');

class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        news: NEWS,
        latest: LATEST
      };
    }

    render () {
        const renderItem = ({item, index}, parallaxProps) => {
            return (
              <View style={styles.item}>
                <ParallaxImage
                  source={{uri: item.illustration}}
                  containerStyle={styles.imageContainer}
                  style={styles.image}
                  parallaxFactor={0.4}
                  {...parallaxProps}
                />
                <Text style={styles.title} numberOfLines={2}>
                  {item.title}
                </Text>
              </View>
            );
        };

        const renderLatest = ({ item, index }) => {
            return(
                <ListItem key = {index}>
                    <Avatar source={{uri: item.image}} />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.review}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Rating
                      style={{alignItems: 'left'}}
                      readonly
                      ratingCount={5}
                      imageSize={12}
                      startingValue={item.rating}
                    />
                </ListItem>
            );
        };

        return (
            <ScrollView>
                <Carousel
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 60}
                    data={this.state.news}
                    renderItem={renderItem}
                    hasParallaxImages={true}
                />
                <Card title = "New Releases">
                    <FlatList
                        data = {this.state.latest}
                        renderItem = {renderLatest}
                        keyExtractor = {(item) => item.id.toString()}
                    />
                </Card>
            <ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  }
});

export default Home;

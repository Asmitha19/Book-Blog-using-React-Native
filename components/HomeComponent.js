import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView, Dimensions, Platform, StyleSheet, Linking } from 'react-native';
import { Card, ListItem, Avatar, Rating, Badge } from 'react-native-elements';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { NEWS } from '../shared/news';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const { width: screenWidth } = Dimensions.get('window')

const mapStateToProps = state => {
    return {
      latest: state.latest
    }
}

class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        news: NEWS
      };
    }

    render() {
        const renderItem = ({item, index}, parallaxProps) => {
            return (
              <View style={styles.item}>
                <ParallaxImage
                  source={{uri: item.uri}}
                  containerStyle={styles.imageContainer}
                  style={styles.image}
                  parallaxFactor={0.4}
                  {...parallaxProps}
                />
                <Badge
                  status="success"
                  value="Click to learn more"
                  onPress={() => Linking.openURL(item.link)}
                  containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                />
              </View>
            );
        };

        const renderLatest = ({ item, index }) => {
            return(
                <View>
                    <ListItem key = {index}>
                        <Avatar size="large" source={{uri: baseUrl + item.image}} />
                        <ListItem.Content>
                            <ListItem.Title>
                                {item.name}
                                <Rating
                                  style={{alignItems: 'right'}}
                                  readonly
                                  ratingCount={5}
                                  imageSize={12}
                                  startingValue={item.rating}
                                />
                            </ListItem.Title>
                            <ListItem.Subtitle>{item.review}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </View>
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
                <Card title = "New Releases" >
                    <FlatList
                        data = {this.props.latest.latest}
                        renderItem = {renderLatest}
                        keyExtractor = {(item) => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
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

export default connect(mapStateToProps)(Home);

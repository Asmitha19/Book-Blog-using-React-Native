import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import {Bookdetail} from './BookdetailComponent';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      reviews: state.reviews
    }
  }

class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    /*static navigationOptions = {
        title: 'Menu'
    };*/

    render() {

      const renderCommentItem = ({item, index}) => {
          /*return (
                  <ListItem
                      key={index}
                      title={item.name}
                      subtitle={item.title}
                      hideChevron={false}
                      //onPress={() => navigate('Dishdetail', { dishId: item.id })}
                      leftAvatar={{ source: require('./images/review1.jpg')}}
                    />
          );*/
           //version 2.3.2
          return (
                  <ListItem
                      key={index}
                      onPress={() => navigate('Bookdetail', { reviewId: item.id })}
                  >
                      <Avatar size="large" source={{uri: baseUrl + item.image}} />
                      <ListItem.Content>
                          <ListItem.Title>{item.name}</ListItem.Title>
                          <ListItem.Subtitle>{item.title}</ListItem.Subtitle>
                      </ListItem.Content>
                      <ListItem.Chevron />
                  </ListItem>
          );

      };

      const { navigate } = this.props.navigation;
      return (
          <FlatList
              data={this.props.reviews.reviews}
              renderItem={renderCommentItem}
              keyExtractor={item => item.id.toString()}
              />
      );

    }

}


export default connect(mapStateToProps)(Review);

import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import {Bookdetail} from './BookdetailComponent';
import { Loading } from './LoadingComponent';
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

    render() {

        const renderCommentItem = ({item, index}) => {
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

        if (this.props.reviews.isLoading) {
            return(
                <Loading />
            );
        }
        else if (this.props.reviews.errMess) {
            return(
                <View>
                    <Text>{this.props.reviews.erreMess}</Text>
                </View>
            );
        }
        else {
            return (
                <FlatList
                    data={this.props.reviews.reviews}
                    renderItem={renderCommentItem}
                    keyExtractor={item => item.id.toString()}
                    />
            );
        }
    }
}


export default connect(mapStateToProps)(Review);

import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      reviews: state.reviews,
      comments: state.comments
    }
}

function RenderReview(props) {

    const review = props.review;

    if (review != null) {
        return(
            <Card>
                <Card.Title>{review.name}</Card.Title>
                <Card.Image source={{uri: baseUrl + review.image}} />
                <Text style={{margin: 10}}>
                    {review.review}
                </Text>
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
}

function RenderComments(props) {

    const comments = props.comments;

    const renderCommentItem = ({item, index}) => {

        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Rating
                  style={{alignItems: 'left'}}
                  readonly
                  ratingCount={5}
                  imageSize={12}
                  startingValue={item.rating}
                />
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };

    return (
        <Card title='Comments' >
        <FlatList
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


class Bookdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const reviewId = this.props.route.params.reviewId;
        return(
            <ScrollView>
            <RenderReview review={this.props.reviews.reviews[+reviewId]} />
            <RenderComments comments={this.props.comments.comments.filter((comment) => comment.reviewId === reviewId)} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Bookdetail);

import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const fetchReviews = () => (dispatch) => {

    dispatch(reviewsLoading());

    return fetch(baseUrl + 'reviews')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(reviews => dispatch(addReviews(reviews)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

export const reviewsLoading = () => ({
    type: ActionTypes.REVIEWS_LOADING
});

export const reviewsFailed = (errmess) => ({
    type: ActionTypes.REVIEWS_LOADING_FAILED,
    payload: errmess
});

export const addReviews = (reviews) => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: dishes
});

export const fetchLatest = () => (dispatch) => {

    dispatch(latestLoading());

    return fetch(baseUrl + 'latest')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(latest => dispatch(addPromos(latest)))
    .catch(error => dispatch(promosFailed(error.message)));
};

export const latestLoading = () => ({
    type: ActionTypes.LATEST_LOADING
});

export const latestFailed = (errmess) => ({
    type: ActionTypes.LATEST_FAILED,
    payload: errmess
});

export const addLatest = (latest) => ({
    type: ActionTypes.LATEST_PROMOS,
    payload: promos
});

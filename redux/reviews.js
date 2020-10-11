import * as ActionTypes from './ActionTypes';

export const reviews = (state = { isLoading: true,
                                 errMess: null,
                                 reviews:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REVIEWS:
            return {...state, isLoading: false, errMess: null, reviews: action.payload};

        case ActionTypes.REVIEWS_LOADING:
            return {...state, isLoading: true, errMess: null, reviews: []}

        case ActionTypes.REVIEWS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};

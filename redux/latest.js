import * as ActionTypes from './ActionTypes';

export const latest = (state = { isLoading: true,
                                 errMess: null,
                                 latest:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LATEST:
            return {...state, isLoading: false, errMess: null, latest: action.payload};

        case ActionTypes.LATEST_LOADING:
            return {...state, isLoading: true, errMess: null, latest: []}

        case ActionTypes.LATEST_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};

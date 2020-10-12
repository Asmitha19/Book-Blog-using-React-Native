import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { comments } from './comments';
import { reviews } from './reviews';
import { latest } from './latest';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments,
            reviews,
            latest
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}

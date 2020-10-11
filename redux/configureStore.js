import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { news } from './dishes';
import { comments } from './comments';
import { reviews } from './promotions';
import { latest } from './latest';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            news,
            comments,
            reviews,
            latest
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}

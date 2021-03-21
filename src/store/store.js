import {createStore, compose} from 'redux';
import {userReducer} from './reducers/reducer';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
        })
        : compose

export const store = createStore(userReducer, composeEnhancers());

import {createStore, applyMiddleware, compose} from 'redux'

//process async action
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function InitStore(rootReducer, initialState) {
    let finalCreateStore;
    if(process.env.NODE_ENV === 'production') {
        finalCreateStore = compose(applyMiddleware(thunk))(createStore);
    } else {
        finalCreateStore = compose(applyMiddleware(thunk, logger))(createStore);
    }
    return finalCreateStore(rootReducer, initialState);
}

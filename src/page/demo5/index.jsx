import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app';
import InitStore from './initStore';
import Reducers from './reducers';

// import Promise from 'es6-promise';

// Promise.polyfill();

let store = InitStore(Reducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

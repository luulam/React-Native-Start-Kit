import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers';

import RouterWithRedux from './router';
import App from './app'
const store = createStore(reducers, applyMiddleware(thunk))

const Setup = () => {
    return (
        <Provider store={store}>
            <App>
                <RouterWithRedux />
            </App>
        </Provider>
    );
}
export default Setup
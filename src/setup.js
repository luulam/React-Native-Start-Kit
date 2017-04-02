import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers';

import RouterWithRedux from './router';
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
    return (
        <Provider store={store}>
            <RouterWithRedux />
        </Provider>
    );
}
export default App
import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import Router from './router';
import { StyleProvider } from 'native-base';
// import getTheme from '../native-base-theme/components';
// import platform from '../native-base-theme/variables/platform';

const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
    return (
        // <StyleProvider style={getTheme(platform)}>
            <Provider store={store}>
                <Router />
            </Provider>
        // </StyleProvider>
    );
}
export default App
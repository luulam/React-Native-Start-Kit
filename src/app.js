import React ,{Component}from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Setup from './Setup'
import reducers from './redux/reducers';
import Navigation from './Navigation'
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
    return (
        <Provider store={store}>
            <Setup>
                <Navigation/>
            </Setup>
        </Provider>
    );
}
export default App
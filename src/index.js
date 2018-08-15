import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import 'tachyons';

import App from './containers/App';
import { searchRobotsReducer, requestRobotsReducer } from './reducers';

import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();

const rootReducer = combineReducers({
    searchRobots: searchRobotsReducer,
    requestRobots: requestRobotsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

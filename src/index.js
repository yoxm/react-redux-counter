import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux'
import CounterContainer from './containers/CounterContainer'
import rootReducer from '../src/reducers/index'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} key='provider'>
        <CounterContainer  />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();

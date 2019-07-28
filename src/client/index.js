import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.jsx';

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
, document.querySelector('#root'));
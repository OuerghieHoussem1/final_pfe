import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reducers from './reducers';

import { Provider } from 'react-redux';

import {createStore, applyMiddleware} from "redux"

import thunk from "redux-thunk"


const root = ReactDOM.createRoot(document.getElementById('root'));



const store = createStore(reducers,applyMiddleware(thunk))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


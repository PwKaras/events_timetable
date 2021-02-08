import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';


// const store = createStore();

ReactDOM.render(
    <App />
    ,
  document.getElementById('root')
);


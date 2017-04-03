import React from 'react';
import ReactDOM from 'react-dom';
import SuperConntainer from './super-container'
import './Super-common.css'
import {createStore} from 'redux';
import{Provider}from 'react-redux';
import todo from './reducer';

let store = createStore(todo);

ReactDOM.render(
    <Provider store={store}>
        <SuperConntainer />
    </Provider>
    ,
    document.getElementById('root')
);
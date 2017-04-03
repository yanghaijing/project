import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './container/container';
import Content from './componment/content';
import Content1 from './componment/content1';
import Login from './Login-js/login';
import Super1 from './super/super1';
import SuperLeft from './super--component/superLeft';
import LeftSelect from "./super--component/left_select";
import Look from './componment/chakanxiangqing';
import { Router, Route, hashHistory,IndexRoute,Redirect,IndexRedirect} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import totalReducer from './reducers';
let store =createStore(totalReducer);
console.log(store.props);
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Redirect from="/" to="/super"/>
             <Route path="/teacher" component={Container}>
                <IndexRoute component={Content}/>
                <Route path="index" component={Content}/>
                <Route path="look" component={Look}/>
                <Route path="content1" component={Content1}/>
            </Route>

            <Route path="/login" component={Login}></Route>

            <Route path="/super" component={Super1}>
                <IndexRoute component={LeftSelect}/>
                <Route path="index1" component={LeftSelect}/>
                <Route path="index2" component={SuperLeft}/>
            </Route>
        </Router>
    </Provider>
    ,
  document.getElementById('root')
);

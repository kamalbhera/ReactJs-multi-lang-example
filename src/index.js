
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap';
import './App.css'
//redux
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers';
import promiseMW from 'redux-promise'
//----------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import All from './components/All'
import UnderReview from './components/Under_Review'
import IntialAcceptance from './components/Intial_Acceptance'
import ConditionalAcceptance from './components/Conditional_Acceptance'
import Rejected from './components/Rejected'
import NavigationBar from './components/Navigation_Bar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
///----------------------------thems
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';
import theme from './themesDirections/direction'
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const createStoreWM = applyMiddleware(promiseMW)(createStore)
ReactDOM.render(
    <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
            <Provider store={createStoreWM(rootReducer)}>  
    <Router>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col ">
                <NavigationBar/>
                    <Switch>
                        <Route path="/UnderReview" component={UnderReview} />
                        <Route path="/IntialAcceptance" component={IntialAcceptance}/>
                        <Route path="/ConditionalAcceptance" component={ConditionalAcceptance} />
                        <Route path="/Rejected" component={Rejected} />
                        <Route exact path="/" component={All} />
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
</Provider>
        </ThemeProvider>
    </StylesProvider>
,document.getElementById('root'))


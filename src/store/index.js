import {applyMiddleware, combineReducers} from '@reduxjs/toolkit';
import {authReducer} from "../reducer/auth";
import {compose, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import thunk from "redux-thunk";
import {appReducer} from "../reducer/app";
import {profileReducer} from "../reducer/profile";
import {greenhouseReducer} from "../reducer/grenngouse";

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    profile: profileReducer,
    greenhouse: greenhouseReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
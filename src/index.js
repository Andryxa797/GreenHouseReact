import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import store from './store'

import 'antd/dist/antd.css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
                <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
reportWebVitals();

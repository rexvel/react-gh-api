import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import AppRoot from './view/components/AppRoot';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line import/prefer-default-export
export const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <AppRoot />
        </Router>
    </Provider>,

    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

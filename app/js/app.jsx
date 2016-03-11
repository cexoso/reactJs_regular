import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import App from './components/App';
import Index from './containers/Index';
import Exquisite from './containers/Exquisite';
import './base.scss';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reduce from './reduces';
let store = createStore(reduce);
let rootElement = document.getElementById('container');
render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/exquisite" component={Exquisite}></Route>
        <Route path="/index" component={Index}></Route>
      </Route>
    </Router>
  </Provider>
), rootElement)

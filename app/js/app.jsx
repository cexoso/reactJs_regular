import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import loading from "./hoc/loading.jsx";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reduce from './reduce.jsx';
class container extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
// window.setInterval(function(){
//     console.log(JSON.stringify(store.getState()));
// },2000);
let store = createStore(reduce);
let rootElement = document.getElementById('container');
render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={container}>
        <Route path="/app1" component={loading("app1")}></Route>
        <Route path="/index" component={loading("index")}></Route>
      </Route>
    </Router>
  </Provider>
), rootElement)

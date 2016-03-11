import React,{Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Footer from '../Components/Footer'
import cn from './css/App.scss';
class App extends Component{
  render() {
    return (
      <div className={`${cn.c_app}`}>
        <div className={`${cn.container}`}>
          {this.props.children}
        </div>
        <div className={`${cn.footer}`}>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
export default App;

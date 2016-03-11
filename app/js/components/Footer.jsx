import React, {Component} from 'react'
import {Router, Route, Link, IndexLink} from 'react-router'
import cn from './css/Footer.scss'
class Footer extends Component {
  render() {
    return (
      <div className={`${cn.c_footer}`}>
        <div className={`${cn.item}`}>
          <Link to="/index" className={`${cn.link}`} activeClassName={`${cn.active}`}>首页</Link>
        </div>
        <div className={`${cn.item}`}>
          <IndexLink to="/exquisite" className={`${cn.link}`} activeClassName={`${cn.active}`}>精品汇</IndexLink>
        </div>
        <div className={`${cn.item}`}>3</div>
        <div className={`${cn.item}`}>4</div>
        <div className={`${cn.item}`}>5</div>
      </div>
    )
  }
}
export default Footer;

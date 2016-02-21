'use strict';
const React = require("react");
const cn=require('./text.css');
var Picture = React.createClass({
  componentDidMount:function(){
    console.log(this.props.src)
  },
  // getInitialState: function() {
  // },
  render: function() {
    return (
      <img className={cn.q} src={this.props.src}/>
    );
  }
});
module.exports = Picture;

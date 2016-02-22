'use strict';
const React = require("react");
const Picture=require("../Picture/Picture");
var App = React.createClass({
  componentDidMount:function(){
  },
  // getInitialState: function() {
  // },
  render: function() {
    return <div style={{"height":"800px","width":"533px"}}>
      <Picture className="" row="1" col="2" src="resource/p1.jpg"/>      
    </div>

  }
});
module.exports = App;

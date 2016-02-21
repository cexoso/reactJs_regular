'use strict';
const React = require("react");
const Picture=require("./Picture");
var App = React.createClass({
  componentDidMount:function(){
  },
  // getInitialState: function() {
  // },
  render: function() {
    return <Picture src="resource/p1.jpg"/>;
  }
});
module.exports = App;

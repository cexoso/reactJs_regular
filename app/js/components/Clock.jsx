'use strict';
const React = require("react");
const setIntervalMixin=require("../mixin/setIntervalMixin");
var Clock = React.createClass({
  mixins:[setIntervalMixin],
  componentDidMount:function(){
    this.setInterval(this._tick,250);
  },
  _tick:function(){
    this.setState({currentTime:new Date()});
  },
  getInitialState: function() {
    var currentTime = new Date();
    return {currentTime}
  },
  render: function() {
    var ct=this.state.currentTime;
    return (
      <div className="qwe">
        {ct.getHours()}:{ct.getMinutes()}:{ct.getSeconds()}
      </div>
    );
  }
});
module.exports = Clock;

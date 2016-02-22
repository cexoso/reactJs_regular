'use strict';
const React = require("react");
const cn=require("./Picture.scss");

var Picture = React.createClass({
  componentDidMount:function(){
    console.log(this.props.src)
  },
  getInitialState: function() {
    return {
      src:this.props.src
    }
  },
  render: function() {
    console.log(cn)
    var style={
      "backgroundImage":"url("+this.state.src+")"
    };
    return (
      <div className={cn.container}>
        <div className={cn.img+" "+cn.i1} style={style}/>
        <div className={cn.img+" "+cn.i2} style={style}/>
        <div className={cn.img+" "+cn.i3} style={style}/>
        <div className={cn.img+" "+cn.i4} style={style}/>
        <div className={cn.img+" "+cn.i5} style={style}/>
        <div className={cn.img+" "+cn.i6} style={style}/>
        <div className={cn.img+" "+cn.i7} style={style}/>
        <div className={cn.img+" "+cn.i8} style={style}/>
        <div className={cn.img+" "+cn.i9} style={style}/>
      </div>
      // <div className={cn["container"+this.props.col]}>
      //123
      // </div>
    );
  }
});
module.exports = Picture;

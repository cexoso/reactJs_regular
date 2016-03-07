import React, { Component, PropTypes } from 'react'
// var App=React.createClass({
//   clickHandle:function(){
//     console.log(this);
//   },
//   render:function(){
//     return (
//       <div>
//       <button onClick={this.clickHandle}>click</button>
//       </div>
//     )
//   }
// });
class App extends Component {
  constructor(props) {
    super(props);
  }
  clickHandle(){
    console.log(this);
  }
  render() {
    return (
      <div>
      <button onClick={this.clickHandle}>click</button>
      </div>
    )
  }
}

export default App

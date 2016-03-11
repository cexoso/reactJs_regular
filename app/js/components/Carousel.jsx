import React, {Component, PropTypes} from 'react';
import Enhance from "../hoc/interval";
import {connect} from 'react-redux';
const containerStyle = {
  paddingBottom: "30%",
  overflow: "hidden",
  backgroundColor: "red"
};
const ulStyle = {
  fontSize: "0",
  overflow: "hidden"
}

const imgStyle = {
  width: "100%",
  height: "auto"
}

class Carousel extends Component {
  componentDidMount() {
    var next=this.props.next;
    this.props.setInterval(function(){
      next();
    },2000);
  }
  render() {
    console.log(this.props)
    return (
      <div style={containerStyle}>
        <ul style={ulStyle}>
          {this.props.imgs.map((value, k) => {
            const liStyle = {
              overflow: "hidden",
              float: "left",
              position: "absolute",
              transform: `translate(${k * 100}%,0)`
            };
            return (
              <li style={liStyle} key={value}>
                <img src={value} style={imgStyle}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
Carousel.PropTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}
Carousel.defaultProps = {
  ms: 2000,
  current:0
}

var enhance = Enhance(Carousel);

export default enhance

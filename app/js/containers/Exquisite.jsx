import {connect} from 'react-redux';
import {D} from '../actions/exquisiteAction';
import Carousel from './Carousel';
import React, {Component} from 'react';

class Exquisite extends Component {
    render() {
        const imgs = ["resource/mm1.jpg", "resource/mm2.jpg"];
        var t = this.props.exquisite;
        return (
            <div onClick={this.props.D}>
                <span style={{
                    color: "red"
                }}>
                    {JSON.stringify(t)}
                </span>
                <Carousel imgs={imgs}/>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
                <h1>Exquisite.html</h1>
            </div>
        )
    }
}
export default Exquisite;

function mapStateToProps(state) {
    console.log(`Exquisite map ${JSON.stringify(state)}`);
    return {exquisite: state.exquisite};
}
function mapDispatchToProps(dispatch) {
    return {
        D: function() {
            dispatch(D)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exquisite);

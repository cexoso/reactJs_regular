import React, {Component} from 'react';
import Promise from 'bluebird';
import {connect} from 'react-redux';
import "css/loading.scss";
import changeState, {FINISH} from "../loadingAction.jsx";
class LoadingAnimate extends Component {
    render() {
        return (
            <div className="container">
                <div className="loading">
                    <span className="l">l</span>
                    <span className="o">o</span>
                    <span className="a">a</span>
                    <span className="d">d</span>
                    <span className="i">i</span>
                    <span className="n">n</span>
                    <span className="g">g</span>
                </div>
            </div>
        )
    }
}
function _loading(moduleId) {
    switch (moduleId) {
        case "app1":
            return new Promise(function(resolve, reject) {
                require.ensure([], function() {
                    let m = require("../pages/app1/app.jsx");
                    resolve(m.default);
                });
            })
        case "index":
            require.ensure([], function() {
                let m = require("../pages/index/app.jsx");
            });
            break;
        default:
            console.error("can't find moduleId registed");
            break;
    }
}
function _(moduleId) {
    class loading extends Component {
        constructor(props) {
            super(props)
        }
        componentWillMount() {}
        componentDidMount() {
            const changeState = this.props.changeState;
            setTimeout(function() {
                _loading(moduleId).timeout(500).then(function(d) {
                    changeState(FINISH, d);
                }).catch(Promise.TimeoutError, function(e) {
                    console.log("promise timeout");
                });
            }, 1000);
        }
        componentWillUnmount() {}
        render() {
            let Component = this.props.state.component || LoadingAnimate;

            return (
                <div>
                    <Component/>
                </div>
            )
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(loading);
}

function mapStateToProps(state) {
    return {state: state.loading};
}
function mapDispatchToProps(dispatch) {
    return {
        changeState: function(s, c) {
            dispatch(changeState(s, c));
        }
    }
}
export default _;

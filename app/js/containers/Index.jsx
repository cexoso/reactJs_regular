import React, {Component} from 'react';
import Carousel from '../containers/Carousel';
class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            value:props.value||0
        }
    }
    onChangeHandle(e) {
        var value=e.target.value;
        value=String.prototype.toUpperCase.call(value);
        this.setState({value:value})
    }
    render() {
        let value=this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.onChangeHandle.bind(this)}/>
            </div>
        )
    }
}
class Index extends Component {
    render() {
        const imgs = ["resource/mm1.jpg", "resource/mm2.jpg"];
        return (
            <div>
                <Carousel imgs={imgs}/>
                <Input value="123" />
            </div>
        )
    }
}
export default Index;

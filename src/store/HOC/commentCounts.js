import { Component } from "react";
import HOC from "./HOC";

class CommentsCount extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            Total Comments:{this.props.counterNumber} <br/>
            <button onClick={this.props.handleClick}>Add Comment!</button>
            </div>
        )
    }
}
const EnhanceComments = HOC(CommentsCount,10);
export default EnhanceComments;
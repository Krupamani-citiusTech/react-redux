import { Component } from "react";
import HOC from "./HOC";

class LikesCount extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>{this.props.counterNumber} <br/>
            <button onClick={this.props.handleClick}>Likes</button>
            </div>
        )
    }
}
const EnhanceLikes = HOC(LikesCount,5);
export default EnhanceLikes;
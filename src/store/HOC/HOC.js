import React,{Component} from "react";

const HOC = (Component,data)=>{
    return class extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                count:data
            }
        }
        handleClick = ()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        render(){
            return <div>
                Hello<Component
                counterNumber = {this.state.count} handleClick={this.handleClick}
                />
            </div>
        }
    }
}
export default HOC;
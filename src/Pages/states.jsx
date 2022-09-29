import React,{ Component, useState } from "react";
import { SUBMITVALS } from "../store/action/formAction";
import { connect } from "react-redux";
import {SubmitVals} from "../store/action/formAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


// const mapStateToProps=(props)=>{
//     return{
//         submitForm:props.formReducer
//     }
// }
// const mapDispatchToProps=()=>{
//     return{
//         formReducer:()=>dispatch(SubmitVals())
//     }
// }

// class FormExample extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             username : '',
//             password:''
//         }
      
//     }
    // submitForm = (e)=>{
    //     console.log('e--->',this.state.username,this.state.password);
    //     const { dispatch } = this.props; 
    //     // dispatch({type:SUBMITVALS,payload:{username:this.state.username,password:this.state.password}})
    //     this.props.store.dispatch({type:SUBMITVALS,payload:{username:this.state.username,password:this.state.password}})
    //         }
            
// render(){
const FormExample = ()=>{
   
    
    // const result = useSelector(state=>state.)
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const dispath = useDispatch();
    const userDetals = useSelector(state=>state.formReducer);
    console.log('userDetals',userDetals);
    const submitFun = (e)=>{
      dispath({type:SUBMITVALS,payload:{userName:userName,password:password}})
        
         }
return(
    <div>
        <label>User Name </label>
        <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
        <label>Password</label>
        <input value= {password} type="password" onChange = {(e)=> setPassword(e.target.value)}></input>
        <button type="submit" onClick={submitFun}>Submit</button>
    </div>
);
}

// }
export default FormExample;

//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(FormExample);

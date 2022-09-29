import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
// import {IncAction,DecAction} from './store/action/action';
import {INCREMENT,DECREMENT} from './store/action/action';
import Content from './Pages/userDetails';
import FormExample from './Pages/states'; 
import Catagoriesdetails from './Pages/catagories';
import EnhanceLikes from './store/HOC/likesCounts';
import EnhanceComments from './store/HOC/commentCounts';
// import FunctionalStates from './Pages/states';
function App() {
const dispatch = useDispatch();
const counter = useSelector(state=>state.counter.count)
console.log('counter',counter);
const [count,setCount] = React.useState(0);

return (
    <div>
    <div>
      <center>
        <h1>{counter}</h1>
      <button onClick={()=>(dispatch({type:INCREMENT}))}>Increment</button>
      
      <button onClick={()=>dispatch({type:DECREMENT})}>Decrement</button>
      </center>
    </div>
    <Content/>
    {/* <FunctionalStates/> */}
    <FormExample/>
    <Catagoriesdetails/>
    <EnhanceLikes/>
    <EnhanceComments/>
  </div>
  );
}
export default App;
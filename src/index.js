import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store'
import {Provider} from 'react-redux';
// const intialState = {
//   count : 0
// }
// const rootReducer = (state=intialState,action)=>{
//   if(action.type === 'increment'){
//     return {...state,count:state.count+1}
//   } else if(action.type === 'derement'){
//     return {...state,count:state.count-1}
//   } else {
//     return state
//   }
// }
// const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//action
// const Increment = ()=>{
//   return{
//     type : 'INCREMENT'
//   }
// }
// const Decrement = ()=>{
//   return {
//     type:'DECREMENT'
//   }
// }
// const counterReducer = (state=0,action)=>{
//   switch(type){
//       case INCREMENT : 
//       return {...state,count:state.count+1};
//       case DECREMENT : 
//       return {...state,count:state.count-1};
//       default:
//           return state;
//   }
// }
// let store = createstore(couter)

reportWebVitals();

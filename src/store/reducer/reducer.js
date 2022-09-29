

import { INCREMENT,DECREMENT } from "../action/action";
export const counterIntialState = {
count : 0,
data:'null'
}
const counterReducer = (state = counterIntialState, {type,payload})=> {
switch(type) {
case INCREMENT :
return { ...state,count:state.count + 1 };
case DECREMENT :
return {  ...state,count:state.count - 1 };
default:
return state;
}
};
 export default counterReducer;
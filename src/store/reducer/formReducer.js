import { SUBMITVALS } from "../action/formAction";


const formState = {
userName : '',
password: ''
}
const formReducer = (state = formState, {type,payload})=> {
switch(type) {
case SUBMITVALS :
    console.log('payload',payload);
return { 
    ...state,userName:payload.userName,password:payload.password
};
default:
return state;
}
};
 export default formReducer;
import {
    GET_USER_LIST_STARTED, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE
  } from '../action/userAction';
  
  // define initial state of user
  const initialState = {
    data: null,
    error: null
  }
  
  // update store based on type and payload and return the state
  export default function common(state = initialState, action) {
    switch (action.type) {
      case GET_USER_LIST_STARTED:
        return {
          ...state,
        }
      case GET_USER_LIST_SUCCESS:
        const { data } = action.payload;
        console.log('action-data',action.payload);
        return {
          ...state,
          data,
        }
      case GET_USER_LIST_FAILURE:
        const { error } = action.payload;
        return {
          ...state,
          error
        }
      default:
        return state
    }
  }
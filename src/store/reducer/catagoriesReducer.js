import {
    GET_CATAGERIES_STARTED, GET_CATAGORIES_SUCCESS, GET_CATAGERIES_FAILURE} from '../action/catagoriesAction'
  
  // define initial state of user
  const initialState = {
    data: null,
    error: null
  }
  
  // update store based on type and payload and return the state
  export default function common(state = initialState, action) {
    switch (action.type) {
  
      case GET_CATAGORIES_SUCCESS:
        const { data } = action.payload;
        console.log('action-data',action.payload);
        return {
          ...state,
          data,
        }
   
      default:
        return state
    }
  }
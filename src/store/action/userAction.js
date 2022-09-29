
export const GET_USER_LIST_STARTED = 'GET_USER_LIST_STARTED';
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';
export const GET_USER_LIST_FAILURE = 'GET_USER_LIST_FAILURE';

export const getUserListStarted = () => {
    return {
      type: GET_USER_LIST_STARTED
    }
  }
export const getUserListSuccess = data => {
    return {
      type: GET_USER_LIST_SUCCESS,
      payload: {
        data
      }
    }
  }
  export const getUserListFailure = error => {
    return {
      type: GET_USER_LIST_FAILURE,
      payload: {
        error
      }
    }
  }
export const getUserList = (page = 1) => async dispatch => {
    dispatch(getUserListStarted()); 
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`);
      const data = await res.json();
      console.log('data--->',data)
      dispatch(getUserListSuccess(data));
    } catch (err) {
      dispatch(getUserListFailure(err.message));
    }
  }

  
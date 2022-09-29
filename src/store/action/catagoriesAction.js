
export const GET_CATAGORIES_SUCCESS = 'GET_CATAGORIES_SUCCESS';

export const getCatagoriesSuccess = data => {
    return {
      type: GET_CATAGORIES_SUCCESS,
      payload: {
        data
      }
    }
  }

export const getCatagoriesList = () => async dispatch => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();
      console.log('Catageries-data--->',data)
      dispatch(getCatagoriesSuccess(data));
   
  }
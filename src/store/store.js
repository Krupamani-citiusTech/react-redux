import {combineReducers, createStore} from 'redux'
// import reducer from './reducer/user';
import thunk from 'redux-thunk';
import counterReducer from './reducer/reducer';
import { applyMiddleware,compose } from 'redux';
import useReducer  from '../store/reducer/userReducer';
import formReducer from '../store/reducer/formReducer';
import CatagoriesReducer from './reducer/catagoriesReducer';
const rootReducer = combineReducers({
    counter: counterReducer,
    user: useReducer,
    formReducer:formReducer,
    catagoriesReducer:CatagoriesReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middlewares = [thunk];
  
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );




export default store;
// export default rootReducer;
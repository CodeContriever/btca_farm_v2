// store.js (Redux store setup)

import { createStore, combineReducers } from 'redux';
import signupReducer from './signup';
import signinReducer from './signin';
import roleReducer from "./role";
import franchisorReducer from './franchisor';
import resellerReducer from './reseller';

// Combine reducers
const rootReducer = combineReducers({
  signup: signupReducer,

  signin: signinReducer,

  role: roleReducer,

  franchisor: franchisorReducer,

  reseller: resellerReducer
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;

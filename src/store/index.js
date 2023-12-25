// store.js (Redux store setup)

import { createStore, combineReducers } from 'redux';
import superAdminSignupReducer from './superAdmin/Signup';
import superAdminSigninReducer from './superAdmin/Signin';
import superAdminRoleReducer from './superAdmin/Role';
import superAdminProfileReducer from './superAdmin/Profile';

import adminSignupReducer from './admin/Signup';
import adminSigninReducer from './admin/Signin';
import adminRoleReducer from './admin/Role';
import adminProfileReducer from './admin/Profile';

import farmerSignupReducer from './farmer/Signup';
import farmerSigninReducer from './farmer/Signin';
import farmerRoleReducer from './farmer/Role';
import farmerProfileReducer from './farmer/Profile';

import franchisorSignupReducer from './franchisor/Signup';
import franchisorSigninReducer from './franchisor/Signin';
import franchisorRoleReducer from './franchisor/Role';
import franchisorProfileReducer from './franchisor/Profile'

import resellerSignupReducer from './reseller/Signup';
import resellerSigninReducer from './reseller/Signin';
import resellerRoleReducer from './reseller/Role';
import resellerProfileReducer from './reseller/Profile'


import userRoleReducer from './role/Role';



// Combine reducers
const rootReducer = combineReducers({

  superAdminSignup: superAdminSignupReducer,
  superAdminSignin: superAdminSigninReducer,
  superAdminRole: superAdminRoleReducer,
  superAdminProfile: superAdminProfileReducer,


  adminSignup:adminSignupReducer,
adminSignin:adminSigninReducer,
  adminRole: adminRoleReducer,
  adminProfile: adminProfileReducer,

  
    farmerSignup:farmerSignupReducer,
farmerSignin:farmerSigninReducer,
  farmerRole: farmerRoleReducer,
  farmerProfile: farmerProfileReducer,

    franchisorSignup:franchisorSignupReducer,
franchisorSignin:franchisorSigninReducer,
  franchisorRole: franchisorRoleReducer,
  franchisorProfile: franchisorProfileReducer,

      resellerSignup:resellerSignupReducer,
resellerSignin:resellerSigninReducer,
  resellerRole: resellerRoleReducer,
  resellerProfile: resellerProfileReducer,
 
  userRole: userRoleReducer,


});

// Create the Redux store
const store = createStore(rootReducer);

export default store;

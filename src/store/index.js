// store.js (Redux store setup)

import { createStore, combineReducers } from 'redux';
import SuperAdminSignupReducer from './superAdmin/Signup';
import SuperAdminSigninReducer from './superAdmin/Signin';
import SuperAdminRoleReducer from './superAdmin/Role';

import AdminSignupReducer from './admin/Signup';
import AdminSigninReducer from './admin/Signin';
import AdminRoleReducer from './admin/Role';

import FarmerSignupReducer from './farmer/Signup';
import FarmerSigninReducer from './farmer/Signin';
import FarmerRoleReducer from './farmer/Role';

import FranchisorSignupReducer from './franchisor/Signup';
import FranchisorSigninReducer from './franchisor/Signin';
import FranchisorRoleReducer from './franchisor/Role';

import ResellerSignupReducer from './reseller/Signup';
import ResellerSigninReducer from './reseller/Signin';
import ResellerRoleReducer from './reseller/Role';



// Combine reducers
const rootReducer = combineReducers({

  superAdminSignup: SuperAdminSignupReducer,
  superAdminSignin: SuperAdminSigninReducer,
  superAdminRole: SuperAdminRoleReducer,


  AdminSignup:AdminSignupReducer,
AdminSignin:AdminSigninReducer,
  AdminRole: AdminRoleReducer,

  
    FarmerSignup:FarmerSignupReducer,
FarmerSignin:FarmerSigninReducer,
  FarmerRole: FarmerRoleReducer,

    FranchisorSignup:FranchisorSignupReducer,
FranchisorSignin:FranchisorSigninReducer,
  FranchisorRole: FranchisorRoleReducer,

      ResellerSignup:ResellerSignupReducer,
ResellerSignin:ResellerSigninReducer,
ResellerRole:ResellerRoleReducer,


});

// Create the Redux store
const store = createStore(rootReducer);

export default store;

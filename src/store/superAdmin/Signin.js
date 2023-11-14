// signin.js (Reducer file)

// Initial state
const initialState = {
  superAdminSigninData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_SUPER_ADMIN_SIGNIN_DATA = 'SET_SUPER_ADMIN_SIGNIN_DATA';

// Action creators
export const setSuperAdminSigninData = (data) => ({
  type: SET_SUPER_ADMIN_SIGNIN_DATA,
  payload: data,
});

// Reducer function
const superAdminSigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUPER_ADMIN_SIGNIN_DATA:
      return {
        ...state,
        superAdminSigninData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signinData from the state
export const selectSuperAdminSigninData = (state) => state.superAdminSignin.superAdminSigninData; // Corrected selector

// Export the reducer and selector
export default superAdminSigninReducer;

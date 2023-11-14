// signin.js (Reducer file)

// Initial state
const initialState = {
  adminSigninData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_ADMIN_SIGNIN_DATA = 'SET_ADMIN_SIGNIN_DATA';

// Action creators
export const setAdminSigninData = (data) => ({
  type: SET_ADMIN_SIGNIN_DATA,
  payload: data,
});

// Reducer function
const adminSigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_SIGNIN_DATA:
      return {
        ...state,
        adminSigninData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signinData from the state
export const selectAdminSigninData = (state) => state.adminSignin.adminSigninData; // Corrected selector

// Export the reducer and selector
export default adminSigninReducer;

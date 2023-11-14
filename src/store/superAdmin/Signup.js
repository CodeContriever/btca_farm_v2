// signin.js (Reducer file)

// Initial state
const initialState = {
  superAdminSignupData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_SUPER_ADMIN_SIGNUP_DATA = 'SET_SUPER_ADMIN_SIGNUP_DATA';

// Action creators
export const setSuperAdminSignupData = (data) => ({
  type: SET_SUPER_ADMIN_SIGNUP_DATA,
  payload: data,
});

// Reducer function
const superAdminSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUPER_ADMIN_SIGNUP_DATA:
      return {
        ...state,
        superAdminSignupData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signinData from the state
export const selectSuperAdminSignupData = (state) => state.superAdminSignup.superAdminSignupData; // Corrected selector

// Export the reducer and selector
export default superAdminSignupReducer;

// registration.js (Reducer file)

// Initial state
const initialState = {
  adminSignupData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_ADMIN_SIGNUP_DATA = 'SET_ADMIN_SIGNUP_DATA';

// Action creators
export const setAdminSignupData = (data) => ({
  type: SET_ADMIN_SIGNUP_DATA,
  payload: data,
});

// Reducer function
const adminSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_SIGNUP_DATA:
      return {
        ...state,
        adminSignupData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectAdminSignupData = (state) => state.adminSignup.adminSignupData; // Corrected selector

// Export the reducer and selector
export default adminSignupReducer;

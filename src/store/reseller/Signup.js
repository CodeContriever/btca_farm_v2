// registration.js (Reducer file)

// Initial state
const initialState = {
  resellerSignupData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_RESELLER_SIGNUP_DATA = 'SET_RESELLER_SIGNUP_DATA';

// Action creators
export const setResellerSignupData = (data) => ({
  type: SET_RESELLER_SIGNUP_DATA,
  payload: data,
});

// Reducer function
const resellerSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESELLER_SIGNUP_DATA:
      return {
        ...state,
        resellerSignupData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signupData from the state
export const selectResellerSignupData = (state) => state.resellerSignup.resellerSignupData; // Corrected selector

// Export the reducer and selector
export default resellerSignupReducer;

// registration.js (Reducer file)

// Initial state
const initialState = {
  signupData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_SIGNUP_DATA = 'SET_SIGNUP_DATA';

// Action creators
export const setSignupData = (data) => ({
  type: SET_SIGNUP_DATA,
  payload: data,
});

// Reducer function
const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNUP_DATA:
      return {
        ...state,
        signupData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectSignupData = (state) => state.signup.signupData; // Corrected selector

// Export the reducer and selector
export default signupReducer;

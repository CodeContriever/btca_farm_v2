// registration.js (Reducer file)

// Initial state
const initialState = {
  franchisorSignupData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_FRANCHISOR_SIGNUP_DATA = 'SET_FRANCHISOR_SIGNUP_DATA';

// Action creators
export const setFranchisorSignupData = (data) => ({
  type: SET_FRANCHISOR_SIGNUP_DATA,
  payload: data,
});

// Reducer function
const franchisorSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRANCHISOR_SIGNUP_DATA:
      return {
        ...state,
        franchisorSignupData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signupData from the state
export const selectFranchisorSignupData = (state) => state.franchisorSignup.franchisorSignupData; // Corrected selector

// Export the reducer and selector
export default franchisorSignupReducer;

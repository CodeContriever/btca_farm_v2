// registration.js (Reducer file)

// Initial state
const initialState = {
  farmerSignupData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_FARMER_SIGNUP_DATA = 'SET_FARMER_SIGNUP_DATA';

// Action creators
export const setFarmerSignupData = (data) => ({
  type: SET_FARMER_SIGNUP_DATA,
  payload: data,
});

// Reducer function
const farmerSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FARMER_SIGNUP_DATA:
      return {
        ...state,
        farmerSignupData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectFarmerSignupData = (state) => state.farmerSignup.farmerSignupData; // Corrected selector

// Export the reducer and selector
export default farmerSignupReducer;

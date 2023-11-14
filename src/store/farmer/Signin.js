// signin.js (Reducer file)

// Initial state
const initialState = {
  farmerSigninData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_FARMER_SIGNIN_DATA = 'SET_FARMER_SIGNIN_DATA';

// Action creators
export const setFarmerSigninData = (data) => ({
  type: SET_FARMER_SIGNIN_DATA,
  payload: data,
});

// Reducer function
const farmerSigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FARMER_SIGNIN_DATA:
      return {
        ...state,
        farmerSigninData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signinData from the state
export const selectFarmerSigninData = (state) => state.farmerSignin.farmerSigninData; // Corrected selector

// Export the reducer and selector
export default farmerSigninReducer;

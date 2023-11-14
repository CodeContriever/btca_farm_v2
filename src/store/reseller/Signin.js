// signin.js (Reducer file)

// Initial state
const initialState = {
  resellerSigninData: null, // Initial state for signupData
  // Other initial state properties...
};


// Action types
const SET_RESELLER_SIGNIN_DATA = 'SET_RESELLER_SIGNIN_DATA';

// Action creators
export const setResellerSigninData = (data) => ({
  type: SET_RESELLER_SIGNIN_DATA,
  payload: data,
});


// Reducer function
const resellerSigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESELLER_SIGNIN_DATA:
      return {
        ...state,
        resellerSigninData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signinData from the state
export const selectResellerSigninData = (state) => state.resellerSignin.resellerSigninData; // Corrected selector

// Export the reducer and selector
export default resellerSigninReducer;

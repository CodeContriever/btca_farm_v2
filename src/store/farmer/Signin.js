// signin.js (Reducer file)

// Initial state
const initialState = {
  signinData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_SIGNIN_DATA = 'SET_SIGNIN_DATA';

// Action creators
export const setSigninData = (data) => ({
  type: SET_SIGNIN_DATA,
  payload: data,
});

// Reducer function
const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNIN_DATA:
      return {
        ...state,
        signinData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signinData from the state
export const selectSigninData = (state) => state.signin.signinData; // Corrected selector

// Export the reducer and selector
export default signinReducer;

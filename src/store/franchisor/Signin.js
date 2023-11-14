// signin.js (Reducer file)

// Initial state
const initialState = {
  franchisorSigninData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_FRANCHISOR_SIGNIN_DATA = 'SET_FRANCHISOR_SIGNIN_DATA';

// Action creators
export const setFranchisorSigninData = (data) => ({
  type: SET_FRANCHISOR_SIGNIN_DATA,
  payload: data,
});

// Reducer function
const franchisorSigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRANCHISOR_SIGNIN_DATA:
      return {
        ...state,
        franchisorSigninData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signinData from the state
export const selectFranchiosrSigninData = (state) => state.franchisorSignin.franchisorSigninData; // Corrected selector

// Export the reducer and selector
export default franchisorSigninReducer;



// Initial state
const initialState = {
  resellerProfileData: null,
  // Other initial state properties...
};


// Action types
const RESELLER_PROFILE_DATA = 'RESELLER_PROFILE_DATA';


// Action creators
export const setResellerProfileData = (data) => ({
  type: RESELLER_PROFILE_DATA,
  payload: data,
});


// Reducer function
const resellerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESELLER_PROFILE_DATA:
      return {
        ...state,
        resellerProfileData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectResellerProfileData = (state) => state.resellerProfile.resellerProfileData; // Corrected selector

// Export the reducer and selector
export default resellerProfileReducer;

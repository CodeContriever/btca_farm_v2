

// Initial state
const initialState = {
  franchisorProfileData: null,
  // Other initial state properties...
};


// Action types
const FRANCHISOR_PROFILE_DATA = 'FRANCHISOR_PROFILE_DATA';


// Action creators
export const setFranchisorProfileData = (data) => ({
  type: FRANCHISOR_PROFILE_DATA,
  payload: data,
});


// Reducer function
const franchisorProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRANCHISOR_PROFILE_DATA:
      return {
        ...state,
        franchisorProfileData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectFranchisorProfileData = (state) => state.franchisorProfile.franchisorProfileData; // Corrected selector

// Export the reducer and selector
export default franchisorProfileReducer;

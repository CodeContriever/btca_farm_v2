

// Initial state
const initialState = {
  farmerProfileData: null,
  // Other initial state properties...
};


// Action types
const FARMER_PROFILE_DATA = 'FARMER_PROFILE_DATA';


// Action creators
export const setFarmerProfileData = (data) => ({
  type: FARMER_PROFILE_DATA,
  payload: data,
});


// Reducer function
const farmerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FARMER_PROFILE_DATA:
      return {
        ...state,
        farmerProfileData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectFarmerProfileData = (state) => state.farmerProfile.farmerProfileData; // Corrected selector

// Export the reducer and selector
export default farmerProfileReducer;

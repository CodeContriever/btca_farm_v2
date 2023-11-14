

// Initial state
const initialState = {
  adminProfileData: null,
  // Other initial state properties...
};


// Action types
const ADMIN_PROFILE_DATA = 'ADMIN_PROFILE_DATA';


// Action creators
export const setAdminProfileData = (data) => ({
  type: ADMIN_PROFILE_DATA,
  payload: data,
});


// Reducer function
const adminProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_PROFILE_DATA:
      return {
        ...state,
        adminProfileData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectAdminProfileData = (state) => state.adminProfile.adminProfileData; // Corrected selector

// Export the reducer and selector
export default adminProfileReducer;

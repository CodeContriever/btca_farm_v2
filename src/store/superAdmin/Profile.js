// signin.js (Reducer file)

// Initial state
const initialState = {
  superAdminProfileData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_SUPER_ADMIN_PROFILE_DATA = 'SET_SUPER_ADMIN_PROFILE_DATA';

// Action creators
export const setSuperAdminProfileData = (data) => ({
  type: SET_SUPER_ADMIN_PROFILE_DATA,
  payload: data,
});

// Reducer function
const superAdminProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUPER_ADMIN_PROFILE_DATA:
      return {
        ...state,
        superAdminProfileData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signinData from the state
export const selectSuperAdminProfileData = (state) => state.superAdminProfile.superAdminProfileData; // Corrected selector

// Export the reducer and selector
export default superAdminProfileReducer;

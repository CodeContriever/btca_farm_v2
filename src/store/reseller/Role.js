// registration.js (Reducer file)

// Initial state
const initialState = {
  resellerRoleData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_RESELLER_ROLE_DATA = 'SET_RESELLER_ROLE_DATA';

// Action creators
export const setResellerRoleData = (data) => ({
  type: SET_RESELLER_ROLE_DATA,
  payload: data,
});

// Reducer function
const resellerRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESELLER_ROLE_DATA:
      return {
        ...state,
      resellerRoleData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectResellerRoleData = (state) => state.resellerRole.resellerRoleData; // Corrected selector

// Export the reducer and selector
export default resellerRoleReducer;

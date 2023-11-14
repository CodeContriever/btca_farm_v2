// registration.js (Reducer file)

// Initial state
const initialState = {
  franchiorRoleData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_FRANCHISOR_ROLE_DATA = 'SET_FRANCHISOR_ROLE_DATA';

// Action creators
export const setFranchisorRoleData = (data) => ({
  type: SET_FRANCHISOR_ROLE_DATA,
  payload: data,
});

// Reducer function
const franchisorRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRANCHISOR_ROLE_DATA:
      return {
        ...state,
        franchisorRoleData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectFranchisorRoleData = (state) => state.franchisorRole.franchisorRoleData; // Corrected selector

// Export the reducer and selector
export default franchisorRoleReducer;

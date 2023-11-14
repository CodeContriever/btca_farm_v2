// registration.js (Reducer file)

// Initial state
const initialState = {
  adminRoleData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_ADMIN_ROLE_DATA = 'SET_ADMIN_ROLE_DATA';

// Action creators
export const setAdminRoleData = (data) => ({
  type: SET_ADMIN_ROLE_DATA,
  payload: data,
});

// Reducer function
const AdminRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_ROLE_DATA:
      return {
        ...state,
        adminRoleData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectAdminRoleData = (state) => state.adminRole.adminRoleData; // Corrected selector

// Export the reducer and selector
export default AdminRoleReducer;

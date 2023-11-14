// signin.js (Reducer file)

// Initial state
const initialState = {
  superAdminRoleData: null, // Initial state for signupData
  // Other initial state properties...
};

// Action types
const SET_SUPER_ADMIN_ROLE_DATA = 'SET_SUPER_ADMIN_ROLE_DATA';

// Action creators
export const setSuperAdminRoleData = (data) => ({
  type: SET_SUPER_ADMIN_ROLE_DATA,
  payload: data,
});

// Reducer function
const superAdminRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUPER_ADMIN_ROLE_DATA:
      return {
        ...state,
        superAdminRoleData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get signinData from the state
export const selectSuperAdminRoleData = (state) => state.superAdminRole.superAdminRoleData; // Corrected selector

// Export the reducer and selector
export default superAdminRoleReducer;

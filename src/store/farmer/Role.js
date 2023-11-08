// registration.js (Reducer file)

// Initial state
const initialState = {
  roleData: [], // Set an initial value as an empty array
  // Other initial state properties...
};

// Action types
const SET_ROLE_DATA = 'SET_ROLE_DATA';

// Action creators
export const setRoleData = (data) => ({
  type: SET_ROLE_DATA,
  payload: data,
});

// Reducer function
const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE_DATA:
      return {
        ...state,
        roleData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get roleData from the state
export const selectRoleData = (state) => state.role.roleData;

// Export the reducer and selector
export default roleReducer;

// registration.js (Reducer file)

// Initial state
const initialState = {
  userRoleData: [], // Set an initial value as an empty array
  // Other initial state properties...
};

// Action types
const SET_USER_ROLE_DATA = 'SET_USER_ROLE_DATA';

// Action creators
export const setUserRoleData = (data) => ({
  type: SET_USER_ROLE_DATA,
  payload: data,
});


// Reducer function
const userRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ROLE_DATA:
      return {
        ...state,
        userRoleData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};


// Selector function to get roleData from the state
export const selectUserRoleData = (state) => state.userRole.userRoleData;

// Export the reducer and selector
export default userRoleReducer;

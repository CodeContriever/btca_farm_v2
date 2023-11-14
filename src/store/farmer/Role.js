// registration.js (Reducer file)

// Initial state
const initialState = {
  farmerRoleData: [], // Set an initial value as an empty array
  // Other initial state properties...
};

// Action types
const SET_FARMER_ROLE_DATA = 'SET_FARMER_ROLE_DATA';

// Action creators
export const setFarmerRoleData = (data) => ({
  type: SET_FARMER_ROLE_DATA,
  payload: data,
});


// Reducer function
const farmerRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FARMER_ROLE_DATA:
      return {
        ...state,
        farmerRoleData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};


// Selector function to get roleData from the state
export const selectFarmerRoleData = (state) => state.farmerRole.farmerRoleData;

// Export the reducer and selector
export default farmerRoleReducer;

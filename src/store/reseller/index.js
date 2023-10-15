

// Initial state
const initialState = {
  resellerData: null,
  // Other initial state properties...
};


// Action types
const RESELLER_DATA = 'RESELLER_DATA';


// Action creators
export const setResellerData = (data) => ({
  type: RESELLER_DATA,
  payload: data,
});


// Reducer function
const resellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESELLER_DATA:
      return {
        ...state,
        resellerData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectResellerData = (state) => state.reseller.resellerData; // Corrected selector

// Export the reducer and selector
export default resellerReducer;

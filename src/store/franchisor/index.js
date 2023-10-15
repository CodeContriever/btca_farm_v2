

// Initial state
const initialState = {
  franchisorData: null,
  // Other initial state properties...
};


// Action types
const FRANCHISOR_DATA = 'FRANCHISOR_DATA';


// Action creators
export const setFranchisorData = (data) => ({
  type: FRANCHISOR_DATA,
  payload: data,
});


// Reducer function
const franchisorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRANCHISOR_DATA:
      return {
        ...state,
        franchisorData: action.payload,
      };
    // Handle other action types if needed...
    default:
      return state;
  }
};

// Selector function to get registrationData from the state
export const selectFranchisorData = (state) => state.franchisor.franchisorData; // Corrected selector

// Export the reducer and selector
export default franchisorReducer;

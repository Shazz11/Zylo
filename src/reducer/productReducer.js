// Initial state setup
export const initialState = {
  loading: false,  // is data being fetched?
  data: [],        // store API data
  error: null      // store error message
};

export const productReducer = (state, action) => {
  switch (action.type) {

    case "LOADING": // when fetch starts
      return { loading: true, data: [], error: null };

    case "SUCCESS": // when fetch succeeds
      return { loading: false, data: action.payload, error: null };

    case "ERROR": // when fetch fails
      return { loading: false, data: [], error: action.payload };

    default:
      return state; // fallback
  }
};

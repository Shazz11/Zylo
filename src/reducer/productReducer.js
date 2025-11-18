import { data } from "react-router-dom";

// All products initial state
export const allProductInitialState = {
  loading: false,
  data: [],
  error: null,
};

// Single product initial state
export const singleInitialState = {
  singleLoading: false,
  singleProduct: {},
  singleError: null,
};

// ALL PRODUCTS
export const allProductReducer = (state, action) => {
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

// SINGLE PRODUCT
export const singleProductReducer = (state, action) => {
  switch (action.type) {
    case "SINGLE_LOADING":
      return {singleLoading: true, singleProduct: {}, singleError: null};
    
    case "SINGLE_SUCCESS":
      return { singleLoading: false, singleProduct: action.payload, singleError: null};

    case "SINGLE_ERROR":
      return { singleLoading: false, singleProduct: {}, singleError: action.payload}

    default:
      return state; 
  }
};
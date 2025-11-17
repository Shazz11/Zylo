/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { productReducer, initialState } from "../reducer/productReducer";

// create global context
export const ProductContext = createContext();

// API endpoint
const API = "https://api.npoint.io/7c5423235692cb233b9a";

export const ProductProvider = ({ children }) => {

  // reducer + initial state
  const [state, dispatch] = useReducer(productReducer, initialState);

  // API fetch function
  const getProducts = async (url) => {

    dispatch({ type: "LOADING" }); // start loading

    try {
      const res = await axios.get(url);
      const products = await res.data
      dispatch({ type: "SUCCESS", payload: products }); // send data

      console.log("Products Loaded:", res.data);

    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });

      console.log("Error fetching products:", error);
    }
  };

  // run on component mount
  useEffect(() => {
    getProducts(API);
  }, []);


  return (
    <ProductContext.Provider value={{...state}}>
      {children}
    </ProductContext.Provider>
  );
};

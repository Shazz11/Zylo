/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { allProductReducer, allProductInitialState, singleProductReducer, singleInitialState } from "../reducer/productReducer";

// create global context
export const ProductContext = createContext();

// API endpoint
const API = "https://api.npoint.io/7c5423235692cb233b9a";

export const ProductProvider = ({ children }) => {

  // reducer + initial state
    const [allProductState, allProductDispatch] = useReducer(allProductReducer, allProductInitialState);
  const [singleState, singleDispatch] = useReducer(singleProductReducer, singleInitialState);

  // Get All Products
  const getProducts = async (url) => {
    allProductDispatch({ type: "LOADING" }); // start loading

    try {
      const res = await axios.get(url);
      const products = await res.data
      allProductDispatch({ type: "SUCCESS", payload: products }); // send data

    } catch (error) {
      allProductDispatch({ type: "ERROR", payload: error.message });
    }
  };

 // GET SINGLE PRODUCT (from global state)
  const getSingleProduct = async (id) => {
    singleDispatch({ type: "SINGLE_LOADING" });

    try {
      // Since npoint cannot fetch single item,
      // we re-fetch everything & pick one product.
      const res = await axios.get(API);
      const allProducts = res.data;

      const product = allProducts.find((p) => p.id === id);

      if (!product) throw new Error("Product not found");

      singleDispatch({ type: "SINGLE_SUCCESS", payload: product });

      console.log("Single product:", product);

    } catch (error) {
      singleDispatch({ type: "SINGLE_ERROR", payload: error.message });
      console.log("Error fetching single product:", error);
    }
  };

  // run on component mount
  useEffect(() => {
    getProducts(API);
  }, []);


  return (
    <ProductContext.Provider value={{
      ...allProductState,
      ...singleState,
      getProducts,
      getSingleProduct
      }}>
      {children}
    </ProductContext.Provider>
  );
};

// custom  hooks
export const useProductContext = () =>{
  return useContext(ProductContext);
}

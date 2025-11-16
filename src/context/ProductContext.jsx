/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Context create
export const ProductContext = createContext();

const API = "https://api.npoint.io/7c5423235692cb233b9a";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch function
  const getProducts = async (url) => {
    try {
      const res = await axios.get(url);
      setProducts(res.data);  // <-- store data in state
      console.log("Products Loaded:", res.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

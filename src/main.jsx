import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ProductProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/FilterContext"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
      <FilterContextProvider>
         <App />
      </FilterContextProvider>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

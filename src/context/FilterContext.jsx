/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  loading: false,
  error: null,
  sortingValue: "", // stores dropdown value
  filters: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const {
    data: products,
    loading: productLoading,
    error: productError,
  } = useProductContext();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  // ------------------------------
  // GET SORT VALUE FROM DROPDOWN
  // ------------------------------
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // UPDATE FILTER FUNCTION
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // ------------------------------
  // SORT PRODUCTS WHEN sortingValue CHANGES
  // ------------------------------
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sortingValue, state.filterProducts]);

  // ------------------------------
  // RUN FILTER EWHENERVER FILTERS CHANGE
  // ------------------------------
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);

  // ------------------------------
  // LOAD PRODUCTS FROM PRODUCT CONTEXT
  // ------------------------------
  useEffect(() => {
    if (productLoading) {
      dispatch({ type: "FILTER_LOADING" });
      return;
    }

    if (productError) {
      dispatch({ type: "FILTER_ERROR", payload: productError });
      return;
    }

    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });

    // IMPORTANT: After loading products → apply sorting again
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, productLoading, productError]);

  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

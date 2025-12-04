export const filterReducer = (state, action) => {
  switch (action.type) {
    // ------------------------------
    // Loading state
    // ------------------------------
    case "FILTER_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };

    // ------------------------------
    // Load all products into state
    // ------------------------------
    case "LOAD_FILTER_PRODUCTS":
      // Safety check: Data must be an array
      if (!Array.isArray(action.payload)) {
        console.warn("Payload is not an array:", action.payload);
        return {
          ...state,
          loading: false,
          error: "Invalid product format",
        };
      }

      return {
        ...state,
        filterProducts: [...action.payload], // filtered list
        allProducts: [...action.payload], // original list
        loading: false,
        error: null,
      };

    // ------------------------------
    // Error handling
    // ------------------------------
    case "FILTER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // ------------------------------
    // Get sorting dropdown value
    // ------------------------------
    case "GET_SORT_VALUE":
      return {
        ...state,
        sortingValue: action.payload,
      };

    // ------------------------------
    // Sort products based on dropdown
    // ------------------------------
    case "SORTING_PRODUCTS": {
      const { filterProducts, sortingValue } = state;

      // Make safe copy because .sort() mutates the array
      let tempSortData = [...filterProducts];

      // Sorting function logic
      const sortingProducts = (a, b) => {
        // High → Low price
        if (sortingValue === "high-low") {
          return b.discountedPrice - a.discountedPrice;
        }

        // Low → High price
        if (sortingValue === "low-high") {
          return a.discountedPrice - b.discountedPrice;
        }

        // Default safe return (prevents unstable sorting)
        return 0;
      };

      // Safely sorted array
      const newSortData = [...tempSortData].sort(sortingProducts);

      return {
        ...state,
        filterProducts: newSortData,
      };
    }

    // ------------------------------
    // update filters
    // ------------------------------ 
    case "UPDATE_FILTERS_VALUE":{
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
      }

    case "FILTER_PRODUCTS":{
      let { allProducts } = state;
      let tempFilterProduct = [...allProducts];

      const {text} = state.filters;

      if(text){
        tempFilterProduct = tempFilterProduct.filter((curElem)=>{
          return curElem.name.toLowerCase().includes(text.toLowerCase()); 
        })
      }

      return {
        ...state,
        filterProducts: tempFilterProduct,
      };
      }

    // ------------------------------
    // Default return
    // ------------------------------
    default:
      return state;
  }
};

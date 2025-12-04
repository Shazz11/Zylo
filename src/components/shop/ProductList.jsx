import React from "react";
import { useFilterContext } from '../../context/FilterContext'
import ProductCard from '../common/ProductCard'

function ProductList({products}) {
// FilterContext se products le raha hai
  const { filterProducts } = useFilterContext();

  if (products.loading == true){
    return <p>Loading.....</p>
  }

  if (!products || products.length === 0) {
    return <p className="text-center py-10">No products found...</p>;
  }

  return (
    <div className="w-full pt-2">

      <div className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-3
        px-2
        justify-items-center
        place-items-center
      ">
        {products.map((item) => (
          <ProductCard key={item.id} card={item} />
        ))}
      </div>

    </div>
  );
}

export default ProductList;

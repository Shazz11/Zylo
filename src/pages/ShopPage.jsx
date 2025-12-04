import React from 'react'
import ProductList from '../components/shop/ProductList'
import { useFilterContext } from '../context/FilterContext'
import Filters from '../components/shop/Filters';
import SortDropDown from '../components/shop/SortDropDown';

function ShopPage() {
    // FilterContext se products le raha hai
  const { filterProducts, loading, error } = useFilterContext();
  // 1️⃣ Loading
  if (loading) {
    return <p className="pt-4 text-center">Loading...</p>;
  }

  // 2️⃣ Error
  if (error) {
    return <p className="pt-4 text-center text-red-500">{error}</p>;
  }

  return (
    <div className="pt-1 flex flex-col md:flex-row justify-around bg-gray-50">
  
      <Filters/>
      
      <div className='rounded bg-white'>
        {/* Header  */}
        <div className='flex justify-between px-3 py-4 rounded'>
          <span className='text-2xl font-bold'>Shop All Products</span>
          <div className='hidden md:flex'>
            <SortDropDown/>
          </div>
        </div>

        <ProductList products={filterProducts}/>
      </div>
    </div>
  )
}

export default ShopPage
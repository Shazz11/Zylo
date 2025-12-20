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
    <div className="pt-1 md:px-3 flex flex-col md:flex-row md:gap-4 justify-around bg-gray-50  h-screen md:overflow-hidden">
  
      <Filters/>
      
      <div className='rounded bg-white w-full'>
        {/* Header  */}
        <div className='flex justify-between px-3 py-4 rounded'>
          <span className='text-2xl font-bold'>Shop All Products</span>
          <div className='hidden md:flex'>
            <SortDropDown/>
          </div>
        </div>

        <div className='md:overflow-y-auto md:h-screen scroll-hidden'>
          <ProductList products={filterProducts}/>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
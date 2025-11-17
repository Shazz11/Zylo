import React from 'react'
import HeroSection from '../components/home/HeroSection'
import BrandPartnersPage from '../components/home/BrandPartnersPage'
import NewArrivalPage from '../components/home/NewArrivalPage'

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <NewArrivalPage/>
      <BrandPartnersPage/>
    </div>
  )
}

export default HomePage
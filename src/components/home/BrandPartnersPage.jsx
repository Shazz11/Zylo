import React from 'react'
import AuthenticBrandsPage from './AuthenticBrandsPage'
import BrandGrid from './BrandGrid'
import TrustPoints from './TrustPoints'
import Testimonials from './Testimonials'
import FooterCTA from './FooterCTA'

function BrandPartnersPage() {
  return (
    <div>
        {/* <AuthenticBrandsPage/> */}
        <TrustPoints/>
        <BrandGrid/>
        <Testimonials/>
        {/* <FooterCTA/> */}
    </div>
  )
}

export default BrandPartnersPage
import React from 'react'
import NatchiMembershipSection from './Natchi-membership-section'
import Heroember from './Heroember'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BeachVideoSection from '../components/BeachVideoSection'
function AllmemberShip() {
  return (
    <div>
        <Header></Header>
        <Heroember></Heroember>
        <NatchiMembershipSection></NatchiMembershipSection>
        <BeachVideoSection></BeachVideoSection>
        <Footer></Footer>
    </div>
  )
}

export default AllmemberShip
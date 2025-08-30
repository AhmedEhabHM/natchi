import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
import ContactHead from './ContactHead'
function AllContact() {
  return (
    <>
    <Header></Header>
    <ContactHead></ContactHead>
    <ContactMap></ContactMap>
    <ContactForm></ContactForm>
    <Footer></Footer>
    </>
  )
}

export default AllContact
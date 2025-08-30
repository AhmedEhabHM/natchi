import React from 'react'
import { Link } from 'react-router'
function ContactHead() {
  return (
 
          <div className="main-heading contactHead d-flex align-items-md-center">
        <div className="container d-flex align-items-center">
          <div className="row">
            <div className="col-lg-12">
              <h1>Contact</h1>
              <span className='fs-4'><Link to="/" className='text-white text-decoration-none '>Home</Link> / Contact</span>
            </div>
          </div>
        </div>
      </div>
        
  )
}

export default ContactHead
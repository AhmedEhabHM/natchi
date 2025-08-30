import React from 'react'
import { Link } from 'react-router'
function AboutHeader() {
  return (
 
          <div className="main-heading d-flex align-items-md-center">
        <div className="container d-flex align-items-center">
          <div className="row">
            <div className="col-lg-12">
              <h1>About</h1>
              <span className='fs-4'><Link to="/" className='text-white text-decoration-none '>Home</Link> / About</span>
            </div>
          </div>
        </div>
      </div>
        
  )
}

export default AboutHeader
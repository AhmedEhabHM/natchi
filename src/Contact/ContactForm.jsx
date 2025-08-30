"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="contact-form-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header */}
            <div className="text-center mb-5">
              <p className="contact-subtitle text-orange fw-semibold mb-2">Contact Us</p>
              <h2 className="contact-title display-5 fw-bold text-dark mb-4">Get In Touch</h2>
              <p className="contact-description text-muted px-md-4 lh-base">
                "Whether you have a question, a suggestion, or would like to collaborate with us, don't hesitate to get
                in touch. Our team is ready to respond and assist you as quickly as possible."
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row g-3 mb-3">
                {/* First Name */}
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter Your First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="row g-3 mb-3">
                {/* Email */}
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control contact-input"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="form-control contact-input"
                    id="phone"
                    name="phone"
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-4">
                <textarea
                  className="form-control contact-input"
                  id="message"
                  name="message"
                  placeholder="Write Your Comment"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-orange btn-lg px-5 py-3 fw-bold text-uppercase text-white">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
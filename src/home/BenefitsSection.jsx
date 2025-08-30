import React from "react";
import beachImage from "../assets/img/imageye___-_imgi_71_DSC_9121-1536x1024.jpg";
import icon1 from "../assets/img/loc-icon-1.svg";

function BenefitsSection() {
  return (
    <>
      <section className="benefits-section">
        <div className="benefits-container">
          <div className="benefits-image">
            <img
              src={beachImage}
              alt="Beach"
            />
          </div>
          <div className="benefits-content">
            <p className="section-label">Our Benefits List</p>
            <h2 className="section-title">Why Choose Natchi Beach?</h2>
            <p className="section-text">
              We don't just offer a trip — we offer a coastal experience you'll
              never forget. Discover the beauty of the sea, golden sands, and
              exciting beach activities!
            </p>
            <div className="benefit-item">
              <img
                src={icon1}
                alt="Icon"
              />
              <div>
                <h3 className="benefit-title">Best Price Guarantee</h3>
                <p className="benefit-text">
                  We guarantee the best deals on all beach services — from
                  sunbed rentals to boat tours. Enjoy your time without worrying
                  about the cost!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BenefitsSection;
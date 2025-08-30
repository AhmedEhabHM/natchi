import React from "react";

function FeaturesSection() {
  return (
    <>
      <section className="featuresSection">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon-container">
              <i
                className="fa-solid fa-hand-holding-dollar fa-2xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="feature-text">
              <h2>Best Price Guarantee</h2>
              <p>
                We offer the most competitive prices without compromising on
                quality. Your perfect beach day doesn't have to break the bank.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-container">
              <i
                className="fa-solid fa-people-roof fa-2xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="feature-text">
              <h2>Safe &amp; Family-Friendly</h2>
              <p>
                Our beach is designed with safety in mind — from clean
                facilities to secure play areas. Fun for all ages, peace of mind
                for everyone.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-container">
              <i
                className="fa-regular fa-face-smile-wink fa-2xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="feature-text">
              <h2>Unforgettable Experiences</h2>
              <p>
                From sunrise to sunset, every moment at our beach is crafted to
                be special. Whether you're relaxing or adventuring, we've got it
                all
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;

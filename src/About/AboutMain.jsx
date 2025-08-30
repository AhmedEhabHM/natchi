import React from "react";

import NatchiBeachClubResortView from "../assets/img/DSC_9174-scaled.webp";
import IndoorBeachClubArea from "../assets/img/imageye___-_imgi_31.webp";

function AboutMain() {
  return (
    <>
      <main>
        <section className="about-section" aria-labelledby="about-heading">
          <div className="container">
            <div className="two-col">
              {/* LEFT COLUMN */}
              <aside className="left-col" aria-label="About Natchi Beach">
                <header className="who">
                  <h2 className="who-title">Who Are We?</h2>
                  <p className="who-desc">
                    Nestled along the serene shores of the Salman Gulf in
                    Jeddah, Natchi Beach is a premier destination for those
                    seeking a perfect blend of luxury, relaxation, and
                    adventure. Known for its crystal-clear waters, pristine
                    sandy beaches, and exclusive amenities, Natchi Beach offers
                    a unique experience where nature and elegance meet. Whether
                    you’re looking to unwind in our tranquil beachfront cabanas,
                    explore marine life through water sports, or indulge in
                    gourmet seaside dining, Natchi Beach promises an
                    unforgettable escape.
                  </p>
                </header>
                <div className="who_are_we col-lg-10  position-relative about_image  flex-column">
                  <img
                    src={NatchiBeachClubResortView}
                    alt="Natchi Beach Club resort view"
                    className="who_are_we"
                  />
                  <div className="exclusive-badge_V2">Exclusive</div>
                  <div className="experience-card_V2">
                    Experience
                    <br />
                    Awaits
                  </div>
                  <div className="circular-image">
                    <img
                      src={IndoorBeachClubArea}
                      alt="Indoor beach club area"
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </aside>
              {/* RIGHT COLUMN */}
              <article className="right-col">
                <small className="kicker">We Are Natchi Beach</small>
                <h1 id="about-heading" className="hero-title">
                  We are the best choice for your summer getaway.
                </h1>
                <p className="hero-desc">
                  In the heart of Jeddah, where the soft sands of the Red Sea
                  meet clear blue skies, we offer you a complete summer
                  experience that blends relaxation, fun, and premium service.
                  We're not just a beach — we're your ultimate destination for
                  unforgettable moments with family and friends.
                </p>
                <h3 className="why-title">Why We Are the Perfect Choice ?</h3>
                <div className="reasons-grid">
                  <ul className="reasons">
                    <li>We offer you a one-of-a-kind seaside experience.</li>
                    <li>
                      Our prices are competitive without compromising on
                      quality.
                    </li>
                    <li>
                      Because we provide fun marine activities for all ages.
                    </li>
                    <li>Because you deserve the best… and we are the best!</li>
                  </ul>
                  <ul className="reasons">
                    <li>
                      Our trained team is ready to serve you at any moment.
                    </li>
                    <li>Because we offer the privacy you're looking for.</li>
                    <li>
                      Because we are committed to providing a safe and enjoyable
                      environment.
                    </li>
                  </ul>
                </div>
                <div className="cta-row">
                  <a
                    target="_blank"
                    className="btn btn-primary"
                    href="https://natchibaech.com/"
                    role="button"
                  >
                    View Website
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMain;

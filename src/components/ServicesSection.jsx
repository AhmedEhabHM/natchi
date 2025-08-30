import React from "react";

function ServicesSection() {
  return (
    <>
      <section className="services-section">
        <div className="services-subtitle">NATCHI BEACH</div>
        <h2 className="services-title">Services</h2>
        <p className="intro-text">
          Glide in the sky and watch the beauty of Saudi Arabia unfold right in
          front of your eyes. As you ascend into the sky, a panoramic scene of
          Jeddah’s coastline and the amazing Red Sea waters will be revealed. A
          thrilling exhibit of the Red Sea reserved for those brave enough to
          take the flight.
        </p>
        <div className="divider" />
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-store" />
            </div>
            <div>
              <h3 className="service-name">Beach Bazaar</h3>
              <p className="service-description">
                Beach Bazaar with everything you need from tanning oils and
                swimsuits to beach essentials and stylish accessories.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i class="fa-solid fa-pizza-slice"></i>
            </div>
            <div>
              <h3 className="service-name">Beach Restaurant</h3>
              <p className="service-description">
                Full-service restaurant offering mouthwatering meals and
                refreshing drinks.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-restroom" />
            </div>
            <div>
              <h3 className="service-name">Private Restrooms (Men , Women)</h3>
              <p className="service-description">
                Luxuriously appointed private facilities with premium amenities,
                dedicated attendants, and exclusive access for our guests.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-comment-dots" />
            </div>
            <div>
              <h3 className="service-name">Live Chat Assistance</h3>
              <p className="service-description">
                Our dedicated support team is available 24/7 through live chat
                to assist with any inquiries or requests during your stay.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-person-swimming" />
            </div>
            <div>
              <h3 className="service-name">Snorkeling</h3>
              <p className="service-description">
                Unlimited swimming in crystal-clear Red Sea waters.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-volleyball-ball" />
            </div>
            <div>
              <h3 className="service-name">Volley Ball</h3>
              <p className="service-description">
                A volleyball court where you can challenge your friends and have
                a blast.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i class="fa-solid fa-person-snowboarding"></i>
            </div>
            <div>
              <h3 className="service-name">Kite Boarding</h3>
              <p className="service-description">
                Exciting beach activities like parasailing and more available on
                the spot, no booking needed.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-camera" />
            </div>
            <div>
              <h3 className="service-name">Photo Booths</h3>
              <p className="service-description">
                Special Pool Bar for guests Photo booths. So visitors can make
                good memories.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-ship" />
            </div>
            <div>
              <h3 className="service-name">Kayaking</h3>
              <p className="service-description">
                Exciting beach activities like parasailing and more available on
                the spot, no booking needed.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-umbrella-beach" />
            </div>
            <div>
              <h3 className="service-name">Private Beach Huts</h3>
              <p className="service-description">
                Exclusive beachfront huts with premium amenities, offering
                privacy and stunning views of the Red Sea coastline.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-parking" />
            </div>
            <div>
              <h3 className="service-name">Private Parking</h3>
              <p className="service-description">
                Secure and luxury entrance for events and parties, With Parking
                Capacity up to 400 Cars.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i class="fa-regular fa-gem"></i>
            </div>
            <div>
              <h3 className="service-name">Full Boarding Service</h3>
              <p className="service-description">
                Escape to a vibrant oasis on the shores of the Red Sea, where
                luxury, music, and adventure meet under the sun.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-water" />
            </div>
            <div>
              <h3 className="service-name">Diving Center</h3>
              <p className="service-description">
                Professional diving center with certified instructors, equipment
                rental, and guided tours to explore the vibrant marine life.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i class="fa-solid fa-child-reaching"></i>
            </div>
            <div>
              <h3 className="service-name">Soap Playing Space</h3>
              <p className="service-description">
                host special events, we offer a dedicated space of 4,800 m² for
                parties and celebrations, accommodating 800 to 1,200 guests
                comfortably.
              </p>
            </div>
          </div>

          <button className="book-now">
            <i className="fas fa-shopping-cart" /> Book Now
          </button>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;

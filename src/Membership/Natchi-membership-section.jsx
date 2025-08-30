import mainBeachImage from "../assets/img/DSC_9174-scaled.webp";
import indoorBeachClubArea from "../assets/img/imageye___-_imgi_31.webp";

function NatchiMembershipSection() {
  return (
    <section className=" p-0">
      <div className="row g-0 min-vh-100 d-flex flex-row align-items-center justify-content-center">
        {/* Left Content */}
        <div className="col-12 col-xl-6 d-flex text-center text-xl-start">
          <div className="content-wrapper d-flex flex-column w-100 h-100 justify-content-center p-4">
            <span className="membership-header fs-2">
              Membership In Natchi Beach Club
            </span>
            <h1 className="offer-title">Limited-Time Offer</h1>
            <p className="offer-description">
              This offer is valid for 1 year and available for the first 50
              members
            </p>

            {/* Benefits List */}
            <div className="benefits-list mt-4">
              <div className="benefit-item">
                <div className="bullet-point"></div>
                <span>Unlimited access to the resort throughout the year.</span>
              </div>
              <div className="benefit-item">
                <div className="bullet-point"></div>
                <span>Exclusive discounts on food and beverages.</span>
              </div>
              <div className="benefit-item">
                <div className="bullet-point"></div>
                <span>Priority booking for members-only Natchi events.</span>
              </div>
              <div className="benefit-item">
                <div className="bullet-point"></div>
                <span>
                  VIP seating reservations at the beach and club areas.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Content */}
        <div className="col-12 col-xl-6 position-relative about_image d-flex flex-column">
          <img
            src={mainBeachImage}
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
              src={indoorBeachClubArea}
              alt="Indoor beach club area"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default NatchiMembershipSection;

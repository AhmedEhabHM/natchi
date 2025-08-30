import { Link } from "react-router-dom";
import hero1 from "../assets/img/DSC02727-scaled.webp";
import hero2 from "../assets/img/IMG_5190-scaled.webp";

function Heroember() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <section
            className="MemberHero d-flex justify-content-center align-items-center"
            style={{
              background: `url(${hero1}) center / cover`,
              height: "70vh",
            }}
          >
            <div className="container text-white">
              <span className="membership-header fw-bold fs-4 text-warning">
                Let's Go Now
              </span>
              <h2 className="fs-1 fw-bold mb-4">Natchi Beach Club</h2>
              <p className="HeroP mb-4">
                Enjoy the beach all year round! With your membership, you'll
                get:
                <br />
                Unlimited access to the resort • Exclusive discounts on food and
                beverages • Priority booking for Nachi's members-only events •
                VIP seating reservation priority
              </p>
              <Link
                className="pageRefresh text-decoration-none text-white fw-bold"
                to="/"
              >
                Join Now
              </Link>
            </div>
          </section>
        </div>
        <div className="carousel-item">
          <section
            className="MemberHero2 d-flex justify-content-center align-items-center"
            style={{
              height: "70vh",
              background: `url(${hero2}) center / cover`,
            }}
          >
            <div className="container text-white">
              <span className="membership-header fw-bold fs-4 text-warning">
                Let's Go Now
              </span>
              <h2 className="fs-1 fw-bold mb-4">Natchi Beach Club</h2>
              <p className="HeroP mb-4">
                Enjoy the beach all year round! With your membership, you'll
                get:
                <br />
                Unlimited access to the resort • Exclusive discounts on food and
                beverages • Priority booking for Nachi's members-only events •
                VIP seating reservation priority
              </p>
              <Link
                className="pageRefresh text-decoration-none text-white fw-bold"
                to="/"
              >
                Join Now
              </Link>
            </div>
          </section>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <div className="custom-carousel-btn">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </div>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <div className="custom-carousel-btn">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </div>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Heroember;

import brand1 from "../assets/img/brand-1.png";
import brand2 from "../assets/img/brand-2.png";
import brand3 from "../assets/img/brand-3.png";
import brand4 from "../assets/img/brand-4.png";
import brand5 from "../assets/img/brand-5.png";
import brand6 from "../assets/img/brand-6.png";

function BookingSection() {
  return (
    <>
      <section className="bookingSection">
        <div className="bookingOverlay">
          <div className="bookingImgs">
            <img src={brand1} alt="Brand 1" />
            <img src={brand2} alt="Brand 2" />
            <img src={brand3} alt="Brand 3" />
            <img src={brand4} alt="Brand 4" />
            <img src={brand5} alt="Brand 5" />
            <img src={brand6} alt="Brand 6" />
          </div>
          <div className="bookingContent">
            <h2>We Always Have Special Offers for Families</h2>
            <p>
              Enjoy exclusive family deals designed to make your beach day more
              affordable and unforgettable.
            </p>
            <button>Book Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingSection;
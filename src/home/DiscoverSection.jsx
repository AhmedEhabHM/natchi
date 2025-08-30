import beachImage1 from "../assets/img/imageye___-_imgi_13_499890291_17851554081452450_1517944101418923856_n.webp";
import beachImage2 from "../assets/img/HeaderImg.jpg";
import beachImage3 from "../assets/img/imageye___-_imgi_15_IMG_5108-scaled.jpg";
import quoteIllustration from "../assets/img/imageye___-_imgi_17_cropped-Screenshot_28-6-2025_16436_.png";

function DiscoverSection() {
  return (
    <>
      <section className="discoverSection">
        <div className="discoverImgs">
          <img src={beachImage1} alt="Beach image 1" />
          <img src={beachImage2} alt="Beach image 2" />
          <img src={beachImage3} alt="Beach image 3" />
        </div>
        <div className="discoverContent">
          <div className="discover-title">
            <h1>NATCHI BEACH</h1>
            <h2>Our beach, your perfect escape from stress.</h2>
            <p>
              Enjoy an unforgettable summer day at the best beach in Jeddah.
            </p>
          </div>
          <div className="discover-quote">
            <img src={quoteIllustration} alt="Quote illustration" />
            <p>Excellent Opportunity To Travel &amp; Experience Adventure</p>
          </div>
          <div className="discover-button">
            <button>DISCOVER MORE</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DiscoverSection;
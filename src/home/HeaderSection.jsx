import React from "react";
import headerImage from "../assets/img/HeaderImg.jpg";

function HeaderSection() {
  return (
    <>
      <section className="headerSection">
        <div className="headerImg">
          <img src={headerImage} alt="Natchi Beach Header" />
        </div>
        <div className="headerContent">
          <h1>NATCHI BEACH</h1>
          <h2>Have a Happy Holiday</h2>
          <p>
            Enjoy the beauty of the sea and the calm of the waves with
            NatchiBeach
          </p>
        </div>
      </section>
    </>
  );
}

export default HeaderSection;
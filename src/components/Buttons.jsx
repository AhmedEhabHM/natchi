import React from 'react';

function Buttons() {
  const scrollToTop = () => {
    console.log('Scroll to top clicked!'); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  console.log('Buttons component rendered!');

  return (
    <div className="buttons-container">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+966563069010"
        target="_blank"
        className="whatsapp-btn"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp" />
      </a>
      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="scroll-top-btn">
        <i className="fa-solid fa-arrow-up" />
      </button>
    </div>
  );
}

export default Buttons;
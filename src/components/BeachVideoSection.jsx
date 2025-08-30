import React, { useState } from "react";

function BeachVideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <section className="beach-video-section">
        <div className="beach-video-content">
          <div className="beach-video-background" />
          <div className="beach-video-inner">
            <div
              className="beach-play-btn"
              onClick={openVideo}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-play" />
            </div>
            <span className="beach-subtitle">
              Your Perfect Beach Escape In Jeddah
            </span>
            <h2 className="beach-title">
              Where the sea meets unforgettable memories
            </h2>
            <p className="beach-text">
              Discover a unique beach experience on the shores of the Red Sea.
              Whether you're looking for relaxation, adventure, or family fun —
              we offer everything you need for a perfect day under the sun.
            </p>
          </div>
        </div>
      </section>

      {showVideo && (
        <div className="video-modal">
          <div className="video-modal-content">
            <span className="close-btn" onClick={closeVideo}>
              &times;
            </span>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bvZghzEpPZM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default BeachVideoSection;
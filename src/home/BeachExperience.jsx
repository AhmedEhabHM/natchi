/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function BeachExperience() {
  return (
    <>
      <section className="beachExperience d-sm-none d-xl-block">
        <div className="title-area">
          <span className="sec-subtitle">Beach Activities for Everyone</span>
          <h2 className="sec-title">Explore Our Beach Experiences</h2>
        </div>
        <div className="categories-grid">
          <a className="cate-block" href="#">
            <i className="cate-block__icon fas fa-umbrella-beach" />
            <span>Sunbed &amp; Relaxation Areas</span>
          </a>
          <a className="cate-block" href="#">
            <i className="cate-block__icon fas fa-water" />
            <span>Jet Ski &amp; Water Sports</span>
          </a>
          <a className="cate-block" href="#">
            <i className="cate-block__icon fas fa-child" />
            <span>Kids' Play Zone</span>
          </a>
          <a className="cate-block" href="#">
            <i className="cate-block__icon fas fa-home" />
            <span>Private Family Sections</span>
          </a>
          <a className="cate-block" href="#">
            <i className="cate-block__icon fas fa-utensils" />
            <span>Beachside Dining &amp; Cafes</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default BeachExperience;

import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <Heading
          title="Discover Your Perfect Home"
          subtitle="Search among thousands of listings in your city."
        />

        <form className="search-form">
          <div className="input-box">
            <label>Location</label>
            <input type="text" placeholder="Enter city or street" />
          </div>
          <div className="input-box">
            <label>Property Type</label>
            <input type="text" placeholder="E.g., Apartment, House, Villa" />
          </div>
          <div className="input-box">
            <label>Price Range</label>
            <input type="text" placeholder="Enter your budget" />
          </div>
          <div className="input-box">
            <button type="button" className="filter-btn">
              Advanced Filters
            </button>
          </div>
          <button type="submit" className="search-btn">
            <i className="fa fa-search"></i> Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;

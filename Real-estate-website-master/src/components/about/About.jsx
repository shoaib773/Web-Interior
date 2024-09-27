import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";

import "./about.css";

const About = () => (
  <>
    <section className="about">
      <Back name="About Us" title="Learn More About Our Journey" cover={img} />
      <div className="container flex mtop">
        <div className="about-content">
          <Heading
            title="The Story Behind Our Agency"
            subtitle="Discover how we started and our passion for delivering the best results."
          />
          <p>
            Since our inception, we have been driven by the goal of transforming the real estate landscape. Our agency was built on the foundation of trust, integrity, and customer-centricity.
          </p>
          <p>
            We believe in more than just property transactions; we focus on creating relationships, building communities, and offering unparalleled service. Every decision we make reflects our dedication to helping you find not just a house, but a home.
          </p>
          <button className="btn">Explore Our Story</button>
        </div>
        <div className="about-image">
          <img src={img} alt="Our agency journey" />
        </div>
      </div>
    </section>
  </>
);

export default About;

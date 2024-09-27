import React from "react";
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <section className="featured-section background">
      <div className="container">
        {/* Optimized Heading with cleaner structure */}
        <Heading 
          title="Popular Property Types" 
          subtitle="Browse through various types of properties." 
        />
        <FeaturedCard />
      </div>
    </section>
  );
};

export default Featured;

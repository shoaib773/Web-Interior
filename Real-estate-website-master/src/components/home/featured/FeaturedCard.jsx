import React from "react";
import { featured } from "../../data/Data";
// import "./FeaturedCard.css";

const FeaturedCard = () => {
  return (
    <div className="featured-grid">
      {featured.map((item, index) => (
        <article className="featured-item" key={index}>
          <img src={item.cover} alt={item.name} className="featured-image" />
          <h3 className="featured-title">{item.name}</h3>
          <p className="featured-property-count">{item.total}</p>
        </article>
      ))}
    </div>
  );
};

export default FeaturedCard;


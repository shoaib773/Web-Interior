import React from "react";
import { list } from "../../data/Data"; // Assuming the data is imported from Data.js
import "./recent.css";

const RecentCard = () => {
  return (
    <div className="recent-card grid3">
      {list.map((property, index) => (
        <div className="property-box" key={index}>
          <div className="property-img">
            <img src={property.cover} alt={property.name} />
          </div>
          <div className="property-details">
            <h4>{property.name}</h4>
            <p>{property.location}</p>
          </div>
          <div className="property-info">
            <span className="category">{property.category}</span>
            <span className="price">{property.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentCard;

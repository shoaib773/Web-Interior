import React from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";

const Location = () => {
  return (
    <section className="location padding">
      <div className="container">
        <Heading
          title="Discover Properties by Location"
          subtitle="Browse listings by popular locations. Find your ideal property in the most sought-after areas."
        />

        <div className="content grid3 mtop">
          {location.map((item, index) => (
            <div className="location-box" key={index}>
              <img src={item.cover} alt={item.name} />
              <div className="overlay">
                <h5>{item.name}</h5>
                <p>
                  <span>{item.Villas}</span>
                  <span>{item.Offices}</span>
                  <span>{item.Apartments}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;

import React from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";
import "./awards.css";

const Awards = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          {/* Heading Component with title and subtitle */}
          <Heading 
            title="Over 1,24,000+ Happy Users Being With Us, Still They Love Our Services" 
            subtitle="Our Awards" 
          />

          {/* Grid for awards content */}
          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                {/* Icon of the award */}
                <div className="icon">
                  <span>{val.icon}</span>
                </div>

                {/* Number and name of the award */}
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;

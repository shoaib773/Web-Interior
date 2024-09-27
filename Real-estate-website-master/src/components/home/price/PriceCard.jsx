import React from "react";
import { price } from "../../data/Data";
// import "./priceCard.css";

const PriceCard = () => {
  return (
    <div className="price-grid">
      {price.map((plan, index) => (
        <div className="price-box" key={index}>
          {plan.best && <span className="best-value">{plan.best}</span>}
          <h3 className="plan-name">{plan.plan}</h3>
          <h2 className="plan-price">
            ${plan.price}
            <span className="plan-duration">/{plan.ptext}</span>
          </h2>
          <ul className="plan-features">
            {plan.list.map((feature, idx) => (
              <li key={idx} className={feature.change ? "unavailable" : ""}>
                <i className={feature.icon}></i> {feature.text}
              </li>
            ))}
          </ul>
          <button className="btn-select">Select Plan</button>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;

import React from "react";
import Heading from "../../common/Heading";
import "./price.css";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <section className="price-section padding">
      <div className="container">
        <Heading
          title="Choose Your Plan"
          subtitle="Select the perfect package that fits your needs. Our flexible pricing plans offer great value for all users."
        />
        <PriceCard />
      </div>
    </section>
  );
};

export default Price;

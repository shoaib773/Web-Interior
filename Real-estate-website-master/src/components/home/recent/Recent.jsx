import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <section className="recent padding">
      <div className="container">
        <Heading
          title="Recent Property Listings"
          subtitle="Explore the latest properties added to our database. Whether you're looking for a home, apartment, or office space, we have you covered."
        />
        <RecentCard />
      </div>
    </section>
  );
};

export default Recent;

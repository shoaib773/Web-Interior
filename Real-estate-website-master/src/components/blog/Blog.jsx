import React from "react";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";
// import "./blog.css"; // Assuming blog specific styles are placed here
import img from "../images/about.jpg";
const Blog = () => (
  <section className="blog mb">
    <Back name="Blog" title="Explore Our Latest Blogs" cover={img} />
    <div className="container">
      <RecentCard />
    </div>
  </section>
);

export default Blog;

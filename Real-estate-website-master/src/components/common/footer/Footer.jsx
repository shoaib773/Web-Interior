import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => (
  <>
    {/* Contact Section */}
    <section className="footerContact">
      <div className="container">
        <div className="send flex">
          <div className="text">
            <h1>Have Any Questions?</h1>
            <p>We're here to help you grow in your career and development.</p>
          </div>
          <button className="btn5">Contact Us Today</button>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer>
      <div className="container">
        <div className="box">
          <div className="logo">
            {/* <img src="../images/logo-light.png" alt="Logo" /> */}
            <h2>Need Assistance?</h2>
            <p>Subscribe to receive updates, hot deals, and exclusive discounts right in your inbox.</p>
            <div className="input flex">
              <input type="text" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Dynamic Footer Links */}
        {footer.map((section, index) => (
          <div className="box" key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.text.map((item, i) => (
                <li key={i}>{item.list}</li>
                
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>

    {/* Legal Section */}
    <div className="legal">
      <span>© 2024 NiwasInterior. Designed by ShoaibAhmad.</span>
    </div>
  </>
);

export default Footer;

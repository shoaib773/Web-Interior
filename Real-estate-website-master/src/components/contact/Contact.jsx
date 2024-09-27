import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <section className='contact mb'>
      <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
      <div className='container'>
        <form className='shadow'>
          <h4>Fill Out The Form</h4>
          <div className='form-group'>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Email' />
          </div>
          <input type='text' placeholder='Subject' />
          <textarea rows='10' placeholder='Your Message'></textarea>
          <button type='submit'>Submit Request</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

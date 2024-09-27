import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data"; // Assuming team data is imported from Data.js
import "./team.css";

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading
            title='Meet Our Expert Agents'
            subtitle='Our top agents are here to help you find your perfect property.'
          />

          <div className='content grid3'>
            {team.map((agent, index) => (
              <div className='team-card' key={index}>
                <button className='btn-listings'>{agent.list} Listings</button>
                <div className='agent-details'>
                  <div className='img-container'>
                    <img src={agent.cover} alt={agent.name} />
                    <i className='fa-solid fa-circle-check verified'></i>
                  </div>
                  <h4>{agent.name}</h4>
                  <p className='agent-address'>
                    <i className='fa fa-location-dot'></i>
                    {agent.address}
                  </p>

                  <ul className='social-icons'>
                    {agent.icon.map((icon, idx) => (
                      <li key={idx}>{icon}</li>
                    ))}
                  </ul>

                  <div className='contact-buttons'>
                    <button className='btn-message'>
                      <i className='fa fa-envelope'></i> Message
                    </button>
                    <button className='btn-call'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

import React from 'react';
import './Descp.css';

const Descp = () => {
  return (
    <div className="we-tell-stories-container">
      <div className="text-section">
        <h2 className="heading">We Tell Stories</h2>
        <p className="subtitle">
          For the unfussy, heart on your sleeve, tears on your cheek couples. The ones who love boldly, dare greatly, and seek the good in everyday.
        </p>
        <div className="description">
          <p>
            In 2018, we began our journey of doing what we love the most - documenting stories. With the pursuit of crafting visuals that present life in its rawest form. Since we chanced upon wedding photography, we have been in love with the diversity of emotions it offers to be witnessed.
          </p>
        </div>
            <a href="/about"><button className="learn-more-button">Learn More</button></a>
      </div>
      <div className="image-section">
        <img src="/assets/descp1.jpeg" alt="Couple 1" className="image" />
        <img src="/assets/descp2.jpeg" alt="Couple 2" className="image" />
      </div>
    </div>
  );
};

export default Descp;
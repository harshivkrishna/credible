// EverythingYouNeed.jsx
import React from 'react';
import './Everything.css';

const Everything = () => {
  return (
    <div className="everything-container">
      <div className="text-section">
        <h2 className="heading">Everything you need to know!</h2>
        <p className="subtitle">
          Curious to learn more? Start here! Find everything you need to know about working together, the best resources for planning a stress-free wedding, and more!
        </p>
      </div>
      <div className="cards-section">
        <div className="card">
          <img src="/assets/everything1.jpeg" alt="What to Expect" className="card-image" />
          <h3 className="card-title">What to Expect</h3>
          <a href="/about"><button className="card-button">Our Process</button></a>
        </div>
        <div className="card">
          <img src="/assets/everything2.jpeg" alt="FAQ" className="card-image" />
          <h3 className="card-title">Frequently Asked Question</h3>
          <a href="/info"><button className="card-button">Learn More</button></a>
        </div>
        <div className="card">
          <img src="/assets/everything3.jpeg" alt="Heirloom" className="card-image" />
          <h3 className="card-title">Heirloom</h3>
          <a href="/connect"><button className="card-button">Your Legacy</button></a>
        </div>
      </div>
    </div>
  );
};

export default Everything;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./Detail.css";

const Detail = () => {
  const [selectedSection, setSelectedSection] = useState("services");

  const sections = {
    services: {
      content: (
        <div className="content-box">
          <h2 className="section-title">Services</h2>
          <p className="section-text">
            As important as strategy is, we have to execute to win. Execution
            involves every employee and every relation we have with customers.
            We must operate quickly on problems, drive results, not just
            activities.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>132</h3>
              <p>Pounds of Equipment</p>
            </div>
            <div className="stat">
              <h3>280</h3>
              <p>Finished Photosessions</p>
            </div>
            <div className="stat">
              <h3>195</h3>
              <p>Studio Sessions</p>
            </div>
            <div className="stat">
              <h3>253</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      ),
      image: "/assets/bg-side3.jpeg",
    },
    skills: {
      content: (
        <div className="content-box">
          <h2 className="section-title">Our Skills</h2>
          <p className="section-text">
            Execution involves every employee and every relation we have with
            customers. We must operate quickly on problems, drive results, not
            just activities.
          </p>
          <div className="skills">
            <div className="skill">
              <h3>Camerawork</h3>
              <div className="skill-bar"><div className="progress" style={{ width: "85%" }}></div></div>
            </div>
            <div className="skill">
              <h3>Video Editing</h3>
              <div className="skill-bar"><div className="progress" style={{ width: "87%" }}></div></div>
            </div>
            <div className="skill">
              <h3>Directing</h3>
              <div className="skill-bar"><div className="progress" style={{ width: "95%" }}></div></div>
            </div>
            <div className="skill">
              <h3>Postproduction</h3>
              <div className="skill-bar"><div className="progress" style={{ width: "97%" }}></div></div>
            </div>
          </div>
        </div>
      ),
      image: "/assets/bg-side4.jpeg",
    },
    team: {
      content: (
        <div className="content-box">
          <h2 className="section-title">Our Team</h2>
          <div className="team-container">
            <div className="team-member">
              <img src="/assets/team/founder.jpg" alt="founder" />
              <h3>Gowtham Vijayakumar</h3>
              <p>Founder</p>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
            <div className="team-member">
              <img src="/assets/profile2.jpeg" alt="Clifford Rock" />
              <h3>Clifford Rock</h3>
              <p>Founder</p>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
            <div className="team-member">
              <img src="/assets/profile3.jpeg" alt="Clifford Rock" />
              <h3>Clifford Rock</h3>
              <p>Founder</p>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
            <div className="team-member">
              <img src="/assets/profile1.jpeg" alt="Clifford Rock" />
              <h3>Clifford Rock</h3>
              <p>Founder</p>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>


            <div className="team-member">
              <img src="/assets/profile1.jpeg" alt="Clifford Rock" />
              <h3>Clifford Rock</h3>
              <p>Founder</p>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
            <div className="team-member">
              <img src="/assets/profile1.jpeg" alt="Clifford Rock" />
              <h3>Clifford Rock</h3>
              <p>Founder</p>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
            <div className="team-member">
              <img src="/assets/profile2.jpeg" alt="Clifford Rock" />
              <h3>Clifford Rock</h3>
              <p>Founder</p>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
            <div className="team-member">
              <img src="/assets/profile3.jpeg" alt="Clifford Rock" />
              <h3>Clifford Rock</h3>
              <p>Founder</p>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div></div>
        </div>
      ),
      image: "/assets/bg-side5.jpeg"
    },
  };

  return (
    <div className="about-container">
      <div className="heading-container text-container">
        <span className="sub-title">WHO WE ARE</span>
        <h1>About Us</h1>
      </div>

      <div className="section-tabs">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => setSelectedSection(section)}
            className={`tab-button ${selectedSection === section ? "active" : ""}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      <div className="content-wrapper">
        <div className="content">{sections[selectedSection].content}</div>
        {/* <div className="image-container">
          <img src={sections[selectedSection].image} />
        </div> */}
      </div>
    </div>
  );
};

export default Detail;

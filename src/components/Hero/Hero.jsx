import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './Hero.css'
const Hero = () => {
  // List of background images
  const backgrounds = [
    "url('/assets/bg1.jpeg')",
    "url('/assets/bg2.jpeg')",
    "url('/assets/bg3.jpeg')",
    "url('/assets/bg4.jpeg')",
  ];

  const [bgImage, setBgImage] = useState(backgrounds[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prev) => {
        const nextIndex = (backgrounds.indexOf(prev) + 1) % backgrounds.length;
        return backgrounds[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen flex justify-center items-center transition-all duration-1000"
      style={{ backgroundImage: bgImage, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <h1 className="hero-title">SILENCE, SMILE, STORIES</h1>
    </div>
  );
};

export default Hero;

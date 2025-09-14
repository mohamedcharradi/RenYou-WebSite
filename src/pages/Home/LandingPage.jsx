import React from "react";
import "./LandingPage.css";
import HeroImage from "../../assets/images/img.png";

// Import expert images statically
import DrBayouFeriel from "../../assets/images/DrBayouFeriel.png";
import DrDjebariKhaoula from "../../assets/images/DrDjebariKhaoula.png";
import DrFouratiNadia from "../../assets/images/DrFouratiNadia.png";
import DrGarbiInes from "../../assets/images/DrGarbiInes.png";
import DrRouaiMeriem from "../../assets/images/DrRouaiMeriem.png";
import DrKachouriSabrine from "../../assets/images/DrKachouriSabrine.png";

export default function LandingPage() {
  const experts = [
    { src: DrBayouFeriel, alt: "Expert 1" },
    { src: DrDjebariKhaoula, alt: "Expert 2" },
    { src: DrFouratiNadia, alt: "Expert 3" },
    { src: DrGarbiInes, alt: "Expert 4" },
    { src: DrRouaiMeriem, alt: "Expert 5" },
    { src: DrKachouriSabrine, alt: "Expert 6" },
    // Duplicate to create continuous effect
    { src: DrBayouFeriel, alt: "Expert 7" },
    { src: DrDjebariKhaoula, alt: "Expert 8" },
    { src: DrFouratiNadia, alt: "Expert 9" },
    { src: DrGarbiInes, alt: "Expert 10" },
    { src: DrRouaiMeriem, alt: "Expert 11" },
    { src: DrKachouriSabrine, alt: "Expert 12" },
  ];

  return (
    <div className="landing">
      <div className="background-gradient">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <h1>
              Where AI Meets <br /> Human Expertise..
            </h1>
            <h2>Skincare Made Easy</h2>
            <p>
              Renyou combines the power of AI and the expertise of trusted skincare
              professionals in one seamless app. From analyzing your skin to
              offering personalized advice and connecting you with experts, we make
              skincare easier than ever.
            </p>
            <div className="buttons">
              <button className="btn-primary">Pre-register Today</button>
              <button className="btn-outline">Consult our doctors</button>
            </div>
          </div>
          <div className="hero-images">
            <img src={HeroImage} alt="Book appointment" />
          </div>
        </section>
      </div>
      
      {/* Experts Section */}
      <section className="experts-section">
        <div className="experts-container">
          <div className="experts-header">
            <h2>Trusted Experts, Just a Tap Away</h2>
            <p className="subtext">Expert advice, whenever you need it</p>
            <p className="description">
              Get personalized support from certified dermatologists and skincare professionals.  
              Renyou helps you find the right expert, schedule consultations, and receive tailored advice, 
              all within the app. Your journey to healthier skin is guided by real people who care.
            </p>
          </div>
          
          <div className="vertical-scrolling-gallery">
            {/* First Column */}
            <div className="scrolling-column">
              <div className="scrolling-content">
                {experts.slice(0, 3).map((expert, index) => (
                  <div key={index} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
                {/* Duplicate for continuous scroll */}
                {experts.slice(0, 3).map((expert, index) => (
                  <div key={`dup-${index}`} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second Column */}
            <div className="scrolling-column">
              <div className="scrolling-content reverse-scroll">
                {experts.slice(3, 6).map((expert, index) => (
                  <div key={index} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
                {/* Duplicate for continuous scroll */}
                {experts.slice(3, 6).map((expert, index) => (
                  <div key={`dup-${index}`} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Third Column */}
            <div className="scrolling-column">
              <div className="scrolling-content">
                {experts.slice(6, 9).map((expert, index) => (
                  <div key={index} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
                {/* Duplicate for continuous scroll */}
                {experts.slice(6, 9).map((expert, index) => (
                  <div key={`dup-${index}`} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fourth Column */}
            <div className="scrolling-column">
              <div className="scrolling-content reverse-scroll">
                {experts.slice(9, 12).map((expert, index) => (
                  <div key={index} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
                {/* Duplicate for continuous scroll */}
                {experts.slice(9, 12).map((expert, index) => (
                  <div key={`dup-${index}`} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="experts-cta">
            <button className="btn-primary">Consult our doctors</button>
          </div>
        </div>
      </section>
    </div>
  );
}
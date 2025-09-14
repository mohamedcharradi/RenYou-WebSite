import React from "react";
import "./LandingPage.css";
import HeroImage from "../../assets/images/img.png";

export default function LandingPage() {
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
    </div>
  );
}

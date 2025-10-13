import React from "react";
import "./ConsultationSection.css"; 
//import bgSVG from "../../assets/images/bg.svg"; 

export default function ConsultationSection() {
  return (
    <section className="consultation-section">
      <div className="consultation-container">
        <div className="consultation-content">

     
          <h2 className="consultation-title">
            Book Your Free<br />
            <span className="highlight">15-Min Consultation</span>
          </h2>

          <p className="consultation-description">
            Talk to a certified skincare expert online for free. In just 15 minutes,
            get personalized advice and answers tailored to your skin's needs.
          </p>

          <div className="consultation-cta">
            <button className="consultation-button">
              <span className="button-text">Book now via Calendly</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

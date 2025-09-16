// PartnersSection.jsx
import React from "react";
import "./PartnersSection.css";
import africarena from "../../assets/logos/AfricArena.svg";
import giz from "../../assets/logos/GIZ.svg";
import fast from "../../assets/logos/fast.svg";
import startupTunisia from "../../assets/logos/Startup-Tunisia.svg";
import afkar from "../../assets/logos/afkar.svg";

const partners = [africarena, giz, fast, startupTunisia, afkar];

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-logos">
        {partners.map((logo, index) => (
          <div key={index} className="partner-logo">
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

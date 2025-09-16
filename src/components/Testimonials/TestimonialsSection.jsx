import React from "react";
import "./TestimonialsSection.css";
import user1 from "../../assets/icons/Avatar1.svg"; 
import user2 from "../../assets/icons/Avatar2.svg";
import user3 from "../../assets/icons/Avatar3.svg";
import user4 from "../../assets/icons/Avatar4.svg";
import user5 from "../../assets/icons/Avatar5.svg";
import user6 from "../../assets/icons/Avatar1.svg";
import user7 from "../../assets/icons/Avatar2.svg";

const testimonials = [
  { name: "Renyu user", avatar: user1, message: "Merci pour ce webinaire riche et clair, j'ai aimé le lien entre nutrition et dermatologie. J'espère en voir d'autres, surtout pendant le Ramadan !" },
  { name: "Renyu user", avatar: user2, message: "Merci pour ce webinaire intéressant et bien expliqué. J'ai aimé la connexion entre nutrition et peau. À refaire pendant le Ramadan !" },
  { name: "Renyu user", avatar: user3, message: "Ce webinaire était instructif et fluide. La nutrition et la dermatologie ont été bien reliées." },
  { name: "Renyu user", avatar: user4, message: "Merci pour cette session enrichissante et simple à suivre. Vivement d'autres, surtout en période de Ramadan !" },
  { name: "Renyu user", avatar: user5, message: "Un grand merci pour ce webinaire clair et utile. Le lien nutrition-dermatologie était très bien présenté." },
  { name: "Renyu user", avatar: user6, message: "Félicitations pour ce webinaire riche et accessible. J’ai apprécié l’approche nutrition et peau. À bientôt pour d’autres !" },
  { name: "Renyu user", avatar: user7, message: "Merci pour ce beau webinaire, très clair et pertinent. Hâte d’en voir plus, surtout pendant le Ramadan." }
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h2>What they say About us</h2>

      {/* Top scrolling line */}
      <div className="testimonials-marquee">
        <div className="testimonials-track">
          {testimonials.concat(testimonials).map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <h3>{t.name}</h3>
              </div>
              <div className="divider"></div>
              <p className="testimonial-message">{t.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scrolling line (opposite direction) */}
      <div className="testimonials-marquee reverse">
        <div className="testimonials-track">
          {testimonials.concat(testimonials).map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <h3>{t.name}</h3>
              </div>
              <div className="divider"></div>
              <p className="testimonial-message">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

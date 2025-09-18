import React from "react";
import "./AboutUs.css";
import PartnersSection from "../../components/Partners/PartnersSection";
import Footer from "../../components/Footer/Footer";
import { FaFacebookF, FaInstagram,  } from "react-icons/fa";

// Episodes images
import ep1 from "../../assets/images/action.png";
import ep2 from "../../assets/images/action.png";
import ep3 from "../../assets/images/action.png";
import ep4 from "../../assets/images/action.png";
import { FaLinkedinIn } from "react-icons/fa6";
export default function AboutUs() {
    const episodes = [
      { id: 1, image: ep1, title: "Episode 1", },
      { id: 2, image: ep2, title: "Episode 2",  },
      { id: 3, image: ep3, title: "Episode 3",  },
      { id: 4, image: ep4, title: "Episode 4",  },
    ];
  return (
          <div className="AboutUs-container">
            <section className="hero-section">
            <div className="content-wrapper">
                      <p className="host-info"> About Us </p>
            </div>
            </section>
            {/* Info Section */}
            <section className="info-section">
                    <div className="info-content">
                      <h2 className="info-title">
                        A New Era in Skin with Telehealth
                      </h2>
                      <p className="info-description">
                        Imagine a digital skincare platform that brings you closer to 
                        achieving your best skin health! With RenYou, you can explore 
                        expert-led video series, listen to engaging podcasts, 
                        and read insightful articles—all tailored to your unique 
                        skincare needs. Plus, RenYou connects you directly with top 
                        skin experts, allowing you to get personalized advice and 
                        answers to your questions in real-time—all from the comfort of 
                        your home. 
                      </p>
                      <section className="mission-section">
                  <div className="mission-info-section">
                    <div className="mission-content">
                      <h2 className="mission-title">Our Mission</h2>
                      <p className="mission-description">
                       Our mission is to revolutionize medical and Skin Health in 
                       Tunisia by creating a comprehensive platform that educates,
                       informs and seamlessly connects users with the right Skin Expert 
                      </p>
                    </div>
                  </div>
              </section>
                     <section className="mission-section">
                  <div className="mission-info-section">
                    <div className="mission-content">
                      <h2 className="mission-title">Our vision</h2>
                      <p className="mission-description">
                       The vision of RenYou is to become the global leader in 
                       personalized skincare, reshaping the way people access expert 
                       skin care and advice. 
                      </p>
                    </div>
                  </div>
                    </section>
                  </div>
              </section>
   {/* Episodes Section (separate) */}
      <div className="episodes-section">
        <h2 className="episodes-title">Renyou in action</h2>
        <div className="episodes-scroll">
          <div className="episodes-list">
            {episodes.map((episode) => (
              <div key={episode.id} className="episode-card">
                <a href={episode.link} target="_blank" rel="noopener noreferrer">
                  <div className="episode-image-wrapper">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="episode-img"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* Founder Section */}
<section className="founders-section">
  <div className="founders-content">
  <h2 className="founders-title">Meet the Founders</h2>
  <div className="founders-container">
    <div className="founder-card">
      <div className="founder-image"></div> {/* Replace with actual image */}
      <h3 className="founder-name">Kholoud ABADA</h3>
      <div className="founder-socials">
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
    <div className="founder-card">
      <div className="founder-image"></div> {/* Replace with actual image */}
      <h3 className="founder-name">Dr. Wafa Cheberli</h3>
      <div className="founder-socials">
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
  </div>
  </div>
</section>

  <PartnersSection /> 
      <Footer/>
          </div>
          
  );
}

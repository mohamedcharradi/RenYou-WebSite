import React from "react";
import "./Podcast.css";
import LogoPodcast from "../../assets/logos/SkinPodcast.svg";
import YoutubeLogo from "../../assets/images/Youtube.svg";
import SpotifyLogo from "../../assets/images/Spotify.svg";
import doctorImg from "../../assets/images/DrWafaImage.svg";
import waveSVG from "../../assets/images/Waves.svg"; 
import { FaFacebookF, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

// Episodes images
import ep1 from "../../assets/images/podcast1.svg";
import ep2 from "../../assets/images/podcast2.svg";
import ep3 from "../../assets/images/podcast3.svg";
import ep4 from "../../assets/images/podcast4.svg";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";
import PartnersSection from "../../components/Partners/PartnersSection";
import Footer from "../../components/Footer/Footer";

export default function Podcast() {
  const episodes = [
    { id: 1, image: ep1, title: "Episode 1", link: "https://www.youtube.com/watch?v=YYBZCLUOkPk" },
    { id: 2, image: ep2, title: "Episode 2", link: "https://www.youtube.com/watch?v=BWQiZgxTuOY" },
    { id: 3, image: ep3, title: "Episode 3", link: "https://www.youtube.com/watch?v=M1uZE1qWR8I" },
    { id: 4, image: ep4, title: "Episode 4", link: "https://www.youtube.com/watch?v=ILs_h9TfAMU" },
  ];

  return (
    <div className="podcast-page">
      {/* Hero / Banner Section */}
      <div className="podcast-container">
        <div className="content-wrapper">
          <div className="logo-container">
            <img
              src={LogoPodcast}
              alt="Skin Podcast Logo"
              className="logo-img-skin"
            />
          </div>
          <p className="podcast-host-info">Hosted by Dr. Wafa Cheberli</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="podcast-info-section">
        <div className="info-content">
          <h2 className="podcast-title">
            The first podcast in the Arab world that reveals the secrets of skin
            health
          </h2>
          <p className="podcast-description">
            "Skin بالعربي" aims to raise public awareness about skin diseases
            and the various solutions in dermatology and aesthetic medicine,
            addressing essential questions such as: when and for whom are these
            interventions appropriate? Additionally, we seek to highlight the
            heartfelt testimonies of individuals who have experienced personal
            challenges with skin issues and explore the psychological impact of
            these problems on mental well-being.
          </p>

          {/* Platform Buttons */}
          <div className="platform-buttons">
            <a href="https://www.youtube.com/@Skin_Belarabi" className="platform-btn youtube-btn">
              <div className="btn-content">
                <img
                  src={YoutubeLogo}
                  alt="YouTube"
                  className="platform-icon"
                />
              </div>
            </a>
            <a href="https://open.spotify.com/show/6qGAzq5aU6VRyQn9VrZOvF?si=3ef1e8e361794a13" className="platform-btn spotify-btn">
              <div className="btn-content">
                <img
                  src={SpotifyLogo}
                  alt="Spotify"
                  className="platform-icon"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Episodes Section (separate) */}
      <div className="episodes-section">
        <h2 className="episodes-title">Latest Episodes</h2>
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

      {/*doctor section */}
      <div className="doctor-section">
      <img src={waveSVG} alt="Wave Background" className="wave-bg" />
      <div className="doctor-content">
        <div className="doctor-image">
          <img src={doctorImg} alt="Dr. Wafa Cheberli" />
        </div>
        <div className="doctor-info">
          <p className="hosted-by">Hosted by</p>
          <h2 className="doctor-name">Dr. Wafa Cheberli</h2>
          <p className="doctor-title">Doctor of Pharmacy and Entrepreneur</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaSpotify /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
      
      <TestimonialsSection/>
      <PartnersSection /> 
      <Footer/>
    </div>
  );
}

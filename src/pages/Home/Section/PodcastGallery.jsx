import React from 'react';
import './SkinPodcast.css';

import ep1 from "../../../assets/images/podcast1.svg";
import ep2 from "../../../assets/images/podcast2.svg";
import ep3 from "../../../assets/images/podcast3.svg";
import ep4 from "../../../assets/images/podcast4.svg";
import youtubeIcon from "../../../assets/images/Youtube.svg";   
import spotifyIcon from "../../../assets/images/Spotify.svg";
import doctorImage from "../../../assets/images/DrWafaImage.svg";
import logoImage from "../../../assets/logos/SkinPodcast.svg";

const SkinPodcast = () => {
 const generateWaveBars = () => {
  const bars = [];
  const totalBars = 200;
  for (let i = 0; i < totalBars; i++) {
    const distanceFromCenter = Math.abs(i - totalBars / 2);
    const height = 20 + Math.sin(i * 0.08) * 60 + Math.cos(i * 0.12) * 40 + Math.random() * 50;
    // reduce height near the center to fade behind doctor
    const adjustedHeight = height * (distanceFromCenter / (totalBars / 2));
    bars.push({ height: adjustedHeight, delay: i * 0.015 });
  }
  return bars;
};

  const waveBars = generateWaveBars();

  const episodes = [
    { id: 1, image: ep1, title: 'Episode 1' },
    { id: 2, image: ep2, title: 'Episode 2' },
    { id: 3, image: ep3, title: 'Episode 3' },
    { id: 4, image: ep4, title: 'Episode 4' },
  ];

  return (
    <div className="skin-podcast min-h-screen relative overflow-hidden">

      {/* Header */}
      <div className="header-section text-center">
        <img src={logoImage} alt="Skin Podcast Logo" className="logo-img" />
        <p className="description">
          The first podcast in Tunisia and the Arab world that teaches, educates and reveals the<br />
          secrets of skin health
        </p>
      </div>

      {/* Audio Wave Background */}
      <div className="audio-wave-background">
        <div className="wave-bars">
          {waveBars.map((bar, i) => (
            <div
              key={i}
              className="wave-bar"
              style={{
                height: `${bar.height * 3}px`,
                animationDelay: `${bar.delay}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Doctor Section */}
      <div className="doctor-section text-center">
        <img src={doctorImage} alt="Dr. Wafa Cheberli" className="doctor-img" />
        <div className="host-text">Hosted by</div>
        <h2 className="doctor-name">Dr. Wafa Cheberli</h2>
        <p className="doctor-title">Doctor of Pharmacy and Entrepreneur</p>
      </div>

      {/* Episodes Section */}
      <div className="episodes-section">
        <div className="episodes-scroll">
          <div className="episodes-list">
            {episodes.map((episode) => (
              <div key={episode.id} className="episode-card">
                <div className="episode-image-wrapper">
                  <img src={episode.image} alt={episode.title} className="episode-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Buttons */}
      <div className="platform-buttons">
          <img src={youtubeIcon} alt="YouTube" />
          <img src={spotifyIcon} alt="Spotify" />
      </div>
    </div>
  );
};

export default SkinPodcast;

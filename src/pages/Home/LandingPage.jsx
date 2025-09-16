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
import SkinHealthImage from "../../assets/images/image 5.png";
import SkinProfileSection from "./Section/SkinProfileSection";
import FeaturesSection from "./Section/FeaturesSection";
import SkinPodcast from "./Section/PodcastGallery";
import Footer from "../../components/Footer/Footer";
import ConsultationSection from "../../components/Consultation/ConsultationSection";
import TestimonialsSection from "../../components/Testimonials/TestimonialsSection";
import PartnersSection from "../../components/Partners/PartnersSection";

export default function LandingPage() {
  const experts = [
    { src: DrBayouFeriel, alt: "Expert 1" },
    { src: DrDjebariKhaoula, alt: "Expert 2" },
    { src: DrFouratiNadia, alt: "Expert 3" },
    { src: DrGarbiInes, alt: "Expert 4" },
    { src: DrRouaiMeriem, alt: "Expert 5" },
    { src: DrKachouriSabrine, alt: "Expert 6" },
    { src: DrBayouFeriel, alt: "Expert 7" },
    { src: DrDjebariKhaoula, alt: "Expert 8" },
    { src: DrFouratiNadia, alt: "Expert 9" },
    { src: DrGarbiInes, alt: "Expert 10" },
    { src: DrRouaiMeriem, alt: "Expert 11" },
    { src: DrKachouriSabrine, alt: "Expert 12" },
  ];

  const doctors = [
    { src: DrBayouFeriel, alt: "Doctor 1", name: "Dr. Bayou Feriel", specialty: "Dermatologist Aesthetic doctor", location: "Tunis" },
    { src: DrDjebariKhaoula, alt: "Doctor 2", name: "Dr. Djebari khaoula", specialty: "Dermatologist Aesthetic doctor", location: "Tunis" },
    { src: DrFouratiNadia, alt: "Doctor 3", name: "Dr. Fourati Nadia", specialty: "Aesthetic doctor", location: "Sousse" },
    { src: DrGarbiInes, alt: "Doctor 4", name: "Dr. Garbi Ines", specialty: "Dermatologist Aesthetic doctor", location: "Le Kram" },
    { src: DrRouaiMeriem, alt: "Doctor 5", name: "Dr. Rouai Meriem", specialty: "Dermatologist Aesthetic doctor", location: "Tunis" },
    { src: DrKachouriSabrine, alt: "Doctor 6", name: "Dr. Kachouri Sabrine", specialty: "Aesthetic doctor", location: "Monastir" },
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
          {/* Scrolling images on the left */}
          <div className="vertical-scrolling-gallery">
            <div className="scrolling-column">
              <div className="scrolling-content">
                {experts.slice(0, 3).map((expert, index) => (
                  <div key={index} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
                {experts.slice(0, 3).map((expert, index) => (
                  <div key={`dup-${index}`} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
              </div>
            </div>
            <div className="scrolling-column">
              <div className="scrolling-content reverse-scroll">
                {experts.slice(3, 6).map((expert, index) => (
                  <div key={index} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
                {experts.slice(3, 6).map((expert, index) => (
                  <div key={`dup-${index}`} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
              </div>
            </div>
            <div className="scrolling-column">
              <div className="scrolling-content">
                {experts.slice(6, 9).map((expert, index) => (
                  <div key={index} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
                {experts.slice(6, 9).map((expert, index) => (
                  <div key={`dup-${index}`} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
              </div>
            </div>
            <div className="scrolling-column">
              <div className="scrolling-content reverse-scroll">
                {experts.slice(9, 12).map((expert, index) => (
                  <div key={index} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
                {experts.slice(9, 12).map((expert, index) => (
                  <div key={`dup-${index}`} className="expert-card">
                    <img src={expert.src} alt={expert.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text on the right */}
          <div className="experts-header">
            <h2>Trusted Experts, Just a Tap Away</h2>
            <p className="subtext">Expert advice, whenever you need it</p>
            <p className="description">
              Get personalized support from certified dermatologists and skincare professionals.
              Renyou helps you find the right expert, schedule consultations, and receive tailored advice,
              all within the app. Your journey to healthier skin is guided by real people who care.
            </p>
            <div className="experts-cta">
              <button className="btn-primary">Consult our doctors</button>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors-section">
        <div className="doctors-container">
          <div className="scrolling-wrapper">
            <div className="horizontal-scrolling-gallery">
              {doctors.map((doctor, index) => (
                <div className="doctor-card" key={index}>
                  <img src={doctor.src} alt={doctor.alt} className="doctor-img" />
                  <div className="doctor-info">
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                    <p className="doctor-location">{doctor.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
<ConsultationSection/>


      {/* Skin Health Section */}
      <section className="skin-health-section">
        <div className="skin-health-container">
          <div className="skin-health-left">
            <div className="skin-health-header">
              <h2>Simple Steps To Make <br /> Your Skin Healthier</h2>
              <p className="skin-health-subtitle">Expert advice, whenever you need it</p>
            </div>

            <div className="steps-list">
              <div className="step-item"><span className="step-number">1 -</span><span className="step-text">Pass the quiz</span></div>
              <div className="step-item"><span className="step-number">2 -</span><span className="step-text">Analyze your quiz results</span></div>
              <div className="step-item"><span className="step-number">3 -</span><span className="step-text">Get tailored AI advice</span></div>
              <div className="step-item"><span className="step-number">4 -</span><span className="step-text">Connect with verified experts</span></div>
              <div className="step-item"><span className="step-number">5 -</span><span className="step-text">Track & share your results</span></div>
            </div>

            <div className="steps-cta">
              <button className="waiting-list-btn">Join the Waiting List</button>
            </div>
          </div>

          <div className="skin-health-right">
            <div className="skin-health-image">
              <img src={SkinHealthImage} alt="Skin health visualization" />
            </div>
          </div>
        </div>
      </section>
      {/* Skin Profile Section */}
      <SkinProfileSection />
      {/* Features Section */}
       <FeaturesSection />
      {/* Podcast Section */}
      <SkinPodcast />
    {/* {/*Testimonials*/}
      <TestimonialsSection/>
      {/*Partners Section */}
       <PartnersSection /> 
      {/*footer*/}
      <Footer/>
    </div>
  );
}

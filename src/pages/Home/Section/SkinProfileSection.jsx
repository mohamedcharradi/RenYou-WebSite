import React ,{useState}from "react";
import "./SkinProfileSection.css";

// Import SVGs
import BackgroundSvg from "../../../assets/images/Bg.svg";
import LogoSvg from "../../../assets/logos/logo quize.svg";
import QuizModal from "../../../modal/QuizModal/QuizModal";

export default function SkinProfileSection() {

   const [openModal, setOpenModal] = useState(false);

  return (
    <section className="skin-profile-section">
      <img src={BackgroundSvg} alt="Background design" className="skin-profile-bg" />

      <div className="skin-profile-content">
        <div className="skin-profile-logo">
          <img src={LogoSvg} alt="Skin profile logo" />
        </div>

        <h2 className="skin-profile-title">
          Let Our AI Help You To Explore <br /> Your Skin Profile
        </h2>

        <p className="skin-profile-description">
          Just a few questions stand between you and a deeper understanding of your skin.
          Our AI will analyze your answers and provide personalized advice designed just for you.
        </p>

        <button className="skin-profile-btn" onClick={() => setOpenModal(true)}>Start the Quiz</button>
      </div>
      {openModal && <QuizModal onClose={() => setOpenModal(false)} />}
    </section>
  );
}

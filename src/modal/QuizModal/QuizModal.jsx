import React from "react";
import "./QuizModal.css";

export default function QuizModal({ onClose, onStart }) {
  return (
    <div className="modal-overlay-quize">
      <div className="modal-content-quize-welcome">
        <button className="close-button" onClick={onClose}>✕</button>
        <div className="quiz-text">
          <h2>
            Explore Your Skin <br /> Profile
          </h2>
          <p>
            Just a few questions stand between you and a deeper understanding of your skin
          </p>
          <button className="start-quiz-button" onClick={onStart}>
            Start The Quiz Now →
          </button>
        </div>
      </div>
    </div>
  );
}

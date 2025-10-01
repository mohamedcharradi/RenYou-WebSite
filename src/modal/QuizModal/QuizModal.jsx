// QuizModal.jsx
import React, { useState } from "react";
import "./QuizModal.css";
import CloseIcon from "../../assets/icons/close.png";

export default function QuizModal({ onClose }) {
  const [step, setStep] = useState(0);

  const questions = [
    {
      question: "What is your age range?",
      options: ["18 - 25", "26 - 35", "36 - 45", "46+"],
    },
    {
      question: "What is your skin type?",
      options: ["Oily", "Dry", "Combination", "Normal"],
    },
    {
      question: "Do you have sensitive skin?",
      options: ["Yes, often", "Yes, occasionally", "No"],
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>
          <img src={CloseIcon} alt="Close" />
        </button>

        {/* Title */}
        <h2>{questions[step].question}</h2>

        {/* Options */}
        <div>
          {questions[step].options.map((opt, idx) => (
            <div key={idx}>
              <input type="radio" id={`opt-${idx}`} name={`q-${step}`} />
              <label htmlFor={`opt-${idx}`}>{opt}</label>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ marginTop: "20px" }}>
          {step > 0 && (
            <button className="modal-content-button" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}
          {step < questions.length - 1 ? (
            <button className="modal-content-button" onClick={() => setStep(step + 1)}>
              Next
            </button>
          ) : (
            <button className="modal-content-button" onClick={onClose}>
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

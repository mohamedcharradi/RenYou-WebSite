import React, { useState } from "react";
import "./QuizFlowModal.css";

const QuizFlowModal = ({ onClose }) => {
  const questions = [
    { id: 1, question: "How old are you?", options: ["18 - 25", "26 - 35", "36 - 45", "46 - 55", "Over 55"] },
    { id: 2, question: "What's your Gender?", options: ["Male", "Female"] },
    { id: 3, question: "Quel est votre type de peau ?", options: ["Sèche", "Mixte", "Grasse", "Normale", "Sensible"] },
    { id: 4, question: "Votre peau semble-t-elle souvent déshydratée ?", options: ["Oui, en permanence", "Oui, par moments", "Non, jamais"] },
    { id: 5, question: "Votre peau a-t-elle tendance à rougir ou ressentir des picotements ?", options: ["Oui, souvent", "Parfois", "Non"] },
    { id: 6, question: "Avez-vous actuellement des boutons ou imperfections ?", options: ["Oui, fréquemment", "Oui, occasionnellement", "Non"] },
    { id: 7, question: "Votre peau présente-t-elle des ridules ou rides visibles ?", options: ["Oui, ridules de déshydratation", "Oui, rides visibles", "Non"] },
    { id: 8, question: "Avez-vous des taches pigmentaires ou un teint irrégulier ?", options: ["Oui, taches ou irrégularités", "Non, teint uniforme"] },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (!answers[currentStep]) return; // prevent next if no answer
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      console.log("Quiz completed:", answers);
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleChange = (option) => {
    setAnswers(prev => ({ ...prev, [currentStep]: option }));
  };

  const progressPercent = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="modal-overlay-quize">
      <div className="modal-content-quize">
        <button className="close-button" onClick={onClose}>✕</button>

        <div className="quiz-progress">
          <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>

        <h3 className="quiz-question">{questions[currentStep].question}</h3>

        <div className="quiz-options">
          {questions[currentStep].options.map(opt => (
            <label
              key={opt}
              className={`quiz-option ${answers[currentStep] === opt ? "selected" : ""}`}
              onClick={() => handleChange(opt)}
            >
              <input
                type="radio"
                name={`question-${currentStep}`}
                value={opt}
                checked={answers[currentStep] === opt}
                readOnly
                style={{
                  position: "absolute",
                  opacity: 0,
                  width: "24px",
                  height: "24px",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              />
              {opt}
            </label>
          ))}
        </div>

        <div className="quiz-nav">
          <button className="quiz-back" onClick={handleBack} disabled={currentStep === 0}>← Back</button>
          <button className="quiz-next" onClick={handleNext}>
            {currentStep === questions.length - 1 ? "Finish" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizFlowModal;

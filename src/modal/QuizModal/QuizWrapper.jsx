import React, { useState } from "react";
import QuizModal from "./QuizModal";
import QuizFlowModal from "./QuizFlowModal";

export default function QuizWrapper() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showQuizFlow, setShowQuizFlow] = useState(false);

  const handleStartQuiz = () => {
    setShowWelcome(false);
    setShowQuizFlow(true);
  };

  const handleCloseQuizFlow = () => {
    setShowQuizFlow(false);
  };

  const handleCloseWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && (
        <QuizModal onClose={handleCloseWelcome} onStart={handleStartQuiz} />
      )}
      {showQuizFlow && <QuizFlowModal onClose={handleCloseQuizFlow} />}
    </>
  );
}

import React from 'react';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  totalPoints: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  score,
  totalPoints,
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Question {currentQuestion}/{totalQuestions}
        </span>
        <span className="text-sm font-medium text-gray-700">
          Score: {score}/{totalPoints}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
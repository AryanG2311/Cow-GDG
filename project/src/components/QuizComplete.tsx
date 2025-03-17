import React from 'react';
import { Trophy } from 'lucide-react';

interface QuizCompleteProps {
  score: number;
  totalPoints: number;
  onRestart: () => void;
}

export const QuizComplete: React.FC<QuizCompleteProps> = ({
  score,
  totalPoints,
  onRestart,
}) => {
  const percentage = Math.round((score / totalPoints) * 100);
  
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <Trophy className="w-16 h-16 text-yellow-500" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-xl mb-2">Your Score: {score}/{totalPoints}</p>
      <p className="text-lg mb-6">Success Rate: {percentage}%</p>
      <button
        onClick={onRestart}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};
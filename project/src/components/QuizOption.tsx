import React from 'react';
import { Check, X } from 'lucide-react';

interface QuizOptionProps {
  text: string;
  isSelected: boolean;
  isCorrect: boolean | null;
  isAnswered: boolean;
  onSelect: () => void;
}

export const QuizOption: React.FC<QuizOptionProps> = ({
  text,
  isSelected,
  isCorrect,
  isAnswered,
  onSelect,
}) => {
  const getButtonStyles = () => {
    const baseStyles = "w-full p-4 mb-3 text-left rounded-lg transition-all duration-300 flex items-center justify-between";
    
    if (!isAnswered) {
      return `${baseStyles} ${
        isSelected
          ? "bg-blue-100 border-2 border-blue-500 text-blue-700"
          : "bg-white hover:bg-gray-50 border-2 border-gray-200"
      }`;
    }

    if (isCorrect) {
      return `${baseStyles} bg-green-100 border-2 border-green-500 text-green-700`;
    }

    if (isSelected && !isCorrect) {
      return `${baseStyles} bg-red-100 border-2 border-red-500 text-red-700`;
    }

    return `${baseStyles} bg-white border-2 border-gray-200 opacity-50`;
  };

  return (
    <button
      className={getButtonStyles()}
      onClick={onSelect}
      disabled={isAnswered}
      aria-pressed={isSelected}
    >
      <span>{text}</span>
      {isAnswered && isSelected && (
        isCorrect ? (
          <Check className="w-5 h-5 text-green-600" />
        ) : (
          <X className="w-5 h-5 text-red-600" />
        )
      )}
    </button>
  );
};
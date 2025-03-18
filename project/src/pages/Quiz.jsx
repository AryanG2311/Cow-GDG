import { useState } from 'react';
import { questions } from '../data/questions';
import { QuizOption } from '../components/QuizOption';
import { QuizProgress } from '../components/QuizProgress';
import { QuizComplete } from '../components/QuizComplete';

function Quiz() {
  const [quizState, setQuizState] = useState({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    score: 0,
    isAnswered: false,
    isCompleted: false,
  });

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  const handleAnswerSelect = (answer) => {
    if (quizState.isAnswered) return;
    
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answer,
      isAnswered: true,
      score: answer === currentQuestion.correctAnswer 
        ? prev.score + currentQuestion.points 
        : prev.score
    }));
  };

  const handleNextQuestion = () => {
    const isLastQuestion = quizState.currentQuestionIndex === questions.length - 1;
    
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      selectedAnswer: null,
      isAnswered: false,
      isCompleted: isLastQuestion
    }));
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      score: 0,
      isAnswered: false,
      isCompleted: false,
    });
  };

  if (quizState.isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <QuizComplete
            score={quizState.score}
            totalPoints={totalPoints}
            onRestart={handleRestart}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <QuizProgress
          currentQuestion={quizState.currentQuestionIndex + 1}
          totalQuestions={questions.length}
          score={quizState.score}
          totalPoints={totalPoints}
        />

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {currentQuestion.text}
          </h2>
          <p className="text-sm text-gray-500">
            Points: {currentQuestion.points}
          </p>
        </div>

        <div className="space-y-2">
          {currentQuestion.options.map((option) => (
            <QuizOption
              key={option}
              text={option}
              isSelected={quizState.selectedAnswer === option}
              isCorrect={
                quizState.isAnswered
                  ? option === currentQuestion.correctAnswer
                  : null
              }
              isAnswered={quizState.isAnswered}
              onSelect={() => handleAnswerSelect(option)}
            />
          ))}
        </div>

        {quizState.isAnswered && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNextQuestion}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
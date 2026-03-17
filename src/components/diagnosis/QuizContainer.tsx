'use client';

// QuizContainer: 자가진단 전체 플로우 오케스트레이터
// body-quiz → scalp-quiz → customer-info → results
import { AnimatePresence } from 'framer-motion';
import { useDiagnosisStore } from '@/store/diagnosisStore';
import { bodyQuestions, scalpQuestions } from '@/data/diagnosis';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import ResultCard from './ResultCard';
import CustomerInfoForm from './CustomerInfoForm';

const TOTAL_QUIZ_STEPS = bodyQuestions.length + scalpQuestions.length; // 8

export default function QuizContainer() {
  const {
    phase,
    currentStep,
    selectedAnswers,
    bodyScore,
    scalpScore,
    isSubmitting,
    selectAnswer,
    nextStep,
    prevStep,
    submitCustomerInfo,
    reset,
  } = useDiagnosisStore();

  // ===== 결과 화면 =====
  if (phase === 'results') {
    return (
      <div className="py-8">
        <ResultCard
          bodyScore={bodyScore}
          scalpScore={scalpScore}
          onReset={reset}
        />
      </div>
    );
  }

  // ===== 고객 정보 입력 =====
  if (phase === 'customer-info') {
    return (
      <div className="py-8">
        <CustomerInfoForm
          onSubmit={submitCustomerInfo}
          onBack={prevStep}
          isSubmitting={isSubmitting}
        />
      </div>
    );
  }

  // ===== 퀴즈 화면 (body-quiz / scalp-quiz) =====
  const allQuestions = [...bodyQuestions, ...scalpQuestions];
  const currentQuestion = allQuestions[currentStep - 1];
  const currentAnswer = selectedAnswers[currentQuestion?.id];
  const isLastQuizStep = currentStep === TOTAL_QUIZ_STEPS;

  const handleSelect = (optionId: string) => {
    selectAnswer(currentQuestion.id, optionId);
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* 존 인디케이터 + 진행 바 */}
      <div className="mb-10">
        <ProgressBar
          current={currentStep}
          total={TOTAL_QUIZ_STEPS}
          zone={phase === 'body-quiz' ? 'body' : 'scalp'}
        />
      </div>

      {/* 질문 카드 */}
      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          selectedOptionId={currentAnswer}
          onSelect={handleSelect}
        />
      </AnimatePresence>

      {/* 이전/다음 버튼 */}
      <div className="flex justify-between mt-10 gap-4">
        {currentStep > 1 ? (
          <button
            onClick={prevStep}
            className="px-6 py-3 border border-white/20 text-white/70 rounded-full hover:border-white/40 hover:text-white transition-colors"
          >
            ← 이전
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={handleNext}
          disabled={!currentAnswer}
          className="px-8 py-3 bg-[#C41E3A] text-white font-bold rounded-full hover:bg-[#e02446] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {isLastQuizStep ? '정보 입력 →' : '다음 →'}
        </button>
      </div>
    </div>
  );
}

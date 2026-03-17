'use client';

// QuestionCard: 각 질문과 선택지를 표시하는 카드
// Framer Motion으로 질문 전환 시 슬라이드 애니메이션
import { motion } from 'framer-motion';
import type { DiagnosisQuestion } from '@/types';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: DiagnosisQuestion;
  selectedOptionId: string | undefined; // 현재 선택된 답변 ID
  onSelect: (optionId: string) => void; // 답변 선택 시 콜백
}

export default function QuestionCard({
  question,
  selectedOptionId,
  onSelect,
}: QuestionCardProps) {
  return (
    // 질문이 바뀔 때마다 아래에서 위로 페이드인
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* 질문 텍스트 */}
      <h2 className="text-white text-xl md:text-2xl font-bold mb-8 text-center leading-relaxed">
        {question.question}
      </h2>

      {/* 답변 선택지 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={cn(
                // 기본 스타일
                'w-full p-5 rounded-xl text-left transition-all duration-200 border-2',
                // 선택된 경우: 레드 테두리 + 연한 레드 배경
                isSelected
                  ? 'border-[#C41E3A] bg-[#C41E3A]/15 text-white'
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/10'
              )}
            >
              {/* 선택 표시 원 + 텍스트 */}
              <div className="flex items-start gap-3">
                {/* 라디오 버튼 스타일 원형 */}
                <div className={cn(
                  'w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors',
                  isSelected ? 'border-[#C41E3A]' : 'border-white/30'
                )}>
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C41E3A]" />
                  )}
                </div>
                <span className="text-sm font-medium leading-relaxed">{option.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

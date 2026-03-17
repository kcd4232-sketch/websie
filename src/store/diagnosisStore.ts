import { create } from 'zustand';
import type { CustomerInfo, ScoreLevel } from '@/types';
import { bodyQuestions, scalpQuestions, getScoreLevel } from '@/data/diagnosis';

export type DiagnosisPhase = 'body-quiz' | 'scalp-quiz' | 'customer-info' | 'results';

interface SelectedAnswers {
  [questionId: string]: string;
}

interface ZoneScoreState {
  score: number;
  level: ScoreLevel;
}

interface DiagnosisState {
  phase: DiagnosisPhase;
  currentStep: number; // 전체 8문항 기준 (1~8)
  selectedAnswers: SelectedAnswers;
  bodyScore: ZoneScoreState;
  scalpScore: ZoneScoreState;
  customerInfo: CustomerInfo | null;
  isSubmitting: boolean;

  selectAnswer: (questionId: string, optionId: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  calculateZoneScores: () => void;
  submitCustomerInfo: (info: CustomerInfo) => Promise<void>;
  reset: () => void;
}

const initialZoneScore: ZoneScoreState = { score: 0, level: 'low' };

export const useDiagnosisStore = create<DiagnosisState>((set, get) => ({
  phase: 'body-quiz',
  currentStep: 1,
  selectedAnswers: {},
  bodyScore: { ...initialZoneScore },
  scalpScore: { ...initialZoneScore },
  customerInfo: null,
  isSubmitting: false,

  selectAnswer: (questionId, optionId) => {
    const { selectedAnswers } = get();
    set({ selectedAnswers: { ...selectedAnswers, [questionId]: optionId } });
  },

  nextStep: () => {
    const { phase, currentStep } = get();

    if (phase === 'body-quiz') {
      const bodyStepCount = bodyQuestions.length; // 4
      if (currentStep < bodyStepCount) {
        set({ currentStep: currentStep + 1 });
      } else {
        // 바디존 완료 → 두피존으로
        set({ phase: 'scalp-quiz', currentStep: bodyStepCount + 1 });
      }
    } else if (phase === 'scalp-quiz') {
      const totalSteps = bodyQuestions.length + scalpQuestions.length; // 8
      if (currentStep < totalSteps) {
        set({ currentStep: currentStep + 1 });
      } else {
        // 두피존 완료 → 점수 계산 후 고객정보 입력
        get().calculateZoneScores();
        set({ phase: 'customer-info' });
      }
    }
  },

  prevStep: () => {
    const { phase, currentStep } = get();

    if (phase === 'body-quiz') {
      if (currentStep > 1) {
        set({ currentStep: currentStep - 1 });
      }
    } else if (phase === 'scalp-quiz') {
      const bodyStepCount = bodyQuestions.length;
      if (currentStep > bodyStepCount + 1) {
        set({ currentStep: currentStep - 1 });
      } else {
        // 두피존 첫 문항에서 이전 → 바디존 마지막 문항으로
        set({ phase: 'body-quiz', currentStep: bodyStepCount });
      }
    } else if (phase === 'customer-info') {
      // 고객 정보에서 이전 → 두피존 마지막으로
      const totalSteps = bodyQuestions.length + scalpQuestions.length;
      set({ phase: 'scalp-quiz', currentStep: totalSteps });
    }
  },

  calculateZoneScores: () => {
    const { selectedAnswers } = get();

    let bodyTotal = 0;
    bodyQuestions.forEach((q) => {
      const optionId = selectedAnswers[q.id];
      if (optionId) {
        const option = q.options.find((o) => o.id === optionId);
        if (option) bodyTotal += option.scores.bbtt;
      }
    });

    let scalpTotal = 0;
    scalpQuestions.forEach((q) => {
      const optionId = selectedAnswers[q.id];
      if (optionId) {
        const option = q.options.find((o) => o.id === optionId);
        if (option) scalpTotal += option.scores.headspa;
      }
    });

    set({
      bodyScore: { score: bodyTotal, level: getScoreLevel(bodyTotal) },
      scalpScore: { score: scalpTotal, level: getScoreLevel(scalpTotal) },
    });
  },

  submitCustomerInfo: async (info: CustomerInfo) => {
    set({ isSubmitting: true, customerInfo: info });
    const { bodyScore, scalpScore } = get();

    try {
      await fetch('/api/diagnosis-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: info.name,
          phone: info.phone,
          bodyScore: bodyScore.score,
          scalpScore: scalpScore.score,
          bodyLevel: bodyScore.level,
          scalpLevel: scalpScore.level,
        }),
      });
    } catch {
      // 이메일 실패해도 결과 표시 차단하지 않음
    } finally {
      set({ isSubmitting: false, phase: 'results' });
    }
  },

  reset: () => {
    set({
      phase: 'body-quiz',
      currentStep: 1,
      selectedAnswers: {},
      bodyScore: { ...initialZoneScore },
      scalpScore: { ...initialZoneScore },
      customerInfo: null,
      isSubmitting: false,
    });
  },
}));

'use client';

// ResultCard: 바디/두피 2존 결과를 표시하는 카드 (플라즈마 제외)
import { motion } from 'framer-motion';
import { bodyRecommendations, scalpRecommendations } from '@/data/diagnosis';
import { aboutText } from '@/data/profile';
import type { ScoreLevel } from '@/types';

interface ZoneScoreState {
  score: number;
  level: ScoreLevel;
}

interface ResultCardProps {
  bodyScore: ZoneScoreState;
  scalpScore: ZoneScoreState;
  onReset: () => void;
}

const levelLabels: Record<ScoreLevel, string> = {
  low: '낮음',
  medium: '보통',
  high: '높음',
};

const levelColors: Record<ScoreLevel, string> = {
  low: '#2d7a2d',
  medium: '#b8860b',
  high: '#C41E3A',
};

const MAX_SCORE = 12;

export default function ResultCard({ bodyScore, scalpScore, onReset }: ResultCardProps) {
  const bodyRec = bodyRecommendations[bodyScore.level];
  const scalpRec = scalpRecommendations[scalpScore.level];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      {/* ===== 바디존 결과 카드 ===== */}
      <ZoneResultCard
        zone="body"
        label="바디 진단"
        icon="💪"
        categoryName="BBTT 바디밸런스"
        score={bodyScore.score}
        level={bodyScore.level}
        recommendation={bodyRec}
        barColor="#0A1628"
        delay={0}
      />

      {/* ===== 두피존 결과 카드 ===== */}
      <ZoneResultCard
        zone="scalp"
        label="두피 진단"
        icon="✨"
        categoryName="헤드스파"
        score={scalpScore.score}
        level={scalpScore.level}
        recommendation={scalpRec}
        barColor="#1a5c8a"
        delay={0.2}
      />

      {/* ===== 점수 비교 바 차트 (BBTT + 헤드스파만 표시) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6"
      >
        <h3 className="text-white font-bold mb-5 text-center text-sm tracking-widest uppercase opacity-60">
          분석 점수 비교
        </h3>
        <div className="space-y-5">
          <ScoreBar label="BBTT 바디밸런스" score={bodyScore.score} color="#0A1628" delay={0.5} />
          <ScoreBar label="헤드스파 두피" score={scalpScore.score} color="#1a5c8a" delay={0.6} />
        </div>
      </motion.div>

      {/* ===== CTA 버튼 ===== */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={aboutText.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#C41E3A] text-white font-bold rounded-full hover:bg-[#e02446] transition-colors text-center"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          인스타그램 DM 상담 문의
        </a>
        <button
          onClick={onReset}
          className="flex-1 px-6 py-4 border border-white/20 text-white/70 font-medium rounded-full hover:border-white/40 hover:text-white transition-colors"
        >
          다시 하기
        </button>
      </div>
    </motion.div>
  );
}

// ===== 존별 결과 카드 서브 컴포넌트 =====
interface ZoneResultCardProps {
  zone: 'body' | 'scalp';
  label: string;
  icon: string;
  categoryName: string;
  score: number;
  level: ScoreLevel;
  recommendation: { title: string; description: string; programs: string[] };
  barColor: string;
  delay: number;
}

function ZoneResultCard({
  label, icon, categoryName, score, level, recommendation, barColor, delay,
}: ZoneResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-4"
    >
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <div>
            <span className="text-white/50 text-xs">{label}</span>
            <h3 className="text-white font-bold text-lg leading-tight">{categoryName}</h3>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white font-bold text-2xl">{score}점</div>
          <span
            className="inline-block text-xs font-bold px-3 py-0.5 rounded-full text-white mt-1"
            style={{ backgroundColor: levelColors[level] }}
          >
            {levelLabels[level]}
          </span>
        </div>
      </div>

      <div className="h-px bg-white/10 mb-4" />

      {/* 추천 제목 + 설명 */}
      <div className="mb-4">
        <p className="text-white font-semibold text-sm mb-1">{recommendation.title}</p>
        <p className="text-white/60 text-sm leading-relaxed">{recommendation.description}</p>
      </div>

      {/* 추천 프로그램 목록 */}
      <ul className="space-y-2">
        {recommendation.programs.map((prog, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.2 + i * 0.07 }}
            className="flex items-center gap-2 text-white/75 text-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: barColor }} />
            {prog}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

// ===== 점수 바 서브 컴포넌트 =====
function ScoreBar({ label, score, color, delay }: { label: string; score: number; color: string; delay: number }) {
  const pct = Math.round((score / MAX_SCORE) * 100);
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-white/70">{label}</span>
        <span className="text-white font-bold">{score}점 / {MAX_SCORE}점</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ delay, duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

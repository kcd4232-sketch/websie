// 자가진단 페이지: /self-diagnosis 경로
// SEO 메타데이터 + 퀴즈 컨테이너 배치
import type { Metadata } from 'next';
import QuizContainer from '@/components/diagnosis/QuizContainer';
import Link from 'next/link';

// 이 페이지만의 SEO 메타데이터 (layout.tsx의 template에 적용됨)
export const metadata: Metadata = {
  title: '마사지 자가진단',
  description: '나에게 맞는 관리 유형을 찾아보세요. 바디와 두피, 두 영역의 맞춤 진단을 8가지 질문으로 받아보세요.',
};

export default function SelfDiagnosisPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* ===== 상단 헤더 영역 ===== */}
      <div className="pt-28 pb-10 px-4 text-center">
        {/* 뒤로 가기 링크 */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          메인으로 돌아가기
        </Link>

        {/* 페이지 제목 */}
        <h1 className="text-white text-4xl font-bold mb-3">나에게 맞는 관리는?</h1>
        <p className="text-white/50 text-lg">
          바디와 두피, 두 영역의 맞춤 진단을 받아보세요
        </p>

        {/* 관리 유형 안내 뱃지 */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {['BBTT 바디', '헤드스파 두피', '맞춤 추천'].map((type) => (
            <span
              key={type}
              className="px-3 py-1 border border-white/15 text-white/50 text-sm rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* ===== 퀴즈 영역 ===== */}
      <div className="container-custom pb-20 px-4">
        {/* QuizContainer: 클라이언트 컴포넌트 (Zustand 상태 관리) */}
        <QuizContainer />
      </div>
    </div>
  );
}

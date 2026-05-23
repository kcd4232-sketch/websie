'use client';

// DiagnosisCTA 섹션: 자가진단 퀴즈로 유도하는 배너
// 네이비 배경 + 강조 디자인으로 클릭 유도
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function DiagnosisCTA() {
  return (
    <section className="section-padding bg-[#0A1628] relative overflow-hidden">
      {/* 배경 장식: 포인트 레드 원형 */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#C41E3A]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#C41E3A]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            {/* 고객용 pill */}
            <div className="inline-block px-3 py-1 bg-white/8 border border-white/15 rounded-full text-white/50 text-xs font-medium mb-5">
              고객 맞춤 관리 진단
            </div>

            {/* 아이콘 — 더 작게 */}
            <div className="w-14 h-14 bg-white/8 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>

            {/* 제목 — 보조 크기 */}
            <h2 className="text-white/80 text-2xl md:text-3xl font-bold mb-3">
              나에게 맞는 마사지는?
            </h2>

            <p className="text-white/45 text-base mb-6 leading-relaxed">
              8가지 질문으로 바디·두피 맞춤 관리 유형을 찾아보세요.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { label: 'BBTT', desc: '목·어깨 불균형' },
                { label: 'Head Spa', desc: '두피·두통' },
                { label: 'Plasma', desc: '피부 트러블' },
                { label: '종합 관리', desc: '전신 피로' },
              ].map((type) => (
                <div key={type.label} className="flex items-center gap-1.5 bg-white/4 border border-white/8 px-3 py-1.5 rounded-full">
                  <span className="text-white/60 font-medium text-xs">{type.label}</span>
                  <span className="text-white/30 text-xs">{type.desc}</span>
                </div>
              ))}
            </div>

            {/* CTA 버튼 — 보조 (아웃라인) */}
            <Link
              href="/self-diagnosis"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#DDDAD7] text-[#0A1628] font-semibold rounded-full hover:bg-[#ccc9c6] transition-colors duration-200 text-base"
            >
              자가진단 시작하기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            <p className="text-white/25 text-xs mt-3">약 2분 소요 · 무료 제공</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

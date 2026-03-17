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
          <div className="max-w-3xl mx-auto text-center">
            {/* 아이콘 */}
            <div className="w-16 h-16 bg-[#C41E3A]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>

            {/* 제목 */}
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              나에게 맞는 마사지는?
            </h2>

            {/* 설명 */}
            <p className="text-white/60 text-lg mb-4 leading-relaxed">
              간단한 6가지 질문으로<br className="md:hidden" />
              나에게 딱 맞는 관리 유형을 찾아보세요.
            </p>

            {/* 관리 유형 미리보기 */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { label: 'BBTT', desc: '목·어깨 불균형' },
                { label: 'Head Spa', desc: '두피·두통' },
                { label: 'Plasma', desc: '피부 트러블' },
                { label: '종합 관리', desc: '전신 피로' },
              ].map((type) => (
                <div key={type.label} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <span className="text-white font-semibold text-sm">{type.label}</span>
                  <span className="text-white/40 text-xs">{type.desc}</span>
                </div>
              ))}
            </div>

            {/* CTA 버튼 */}
            <Link
              href="/self-diagnosis"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#C41E3A] text-white font-bold rounded-full hover:bg-[#e02446] transition-colors duration-200 text-lg shadow-lg shadow-red-900/30"
            >
              자가진단 시작하기
              {/* 오른쪽 화살표 아이콘 */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            {/* 소요 시간 안내 */}
            <p className="text-white/30 text-sm mt-4">약 2분 소요 · 무료 제공</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

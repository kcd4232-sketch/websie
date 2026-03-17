'use client';

// Qualifications 섹션: 자격증/면허 + 전문 교육 이수 목록
// 네이비 배경 (어두운 섹션) - 2컬럼 그리드 레이아웃
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { qualifications } from '@/data/profile';

// 체크 아이콘 (자격증 항목 앞에 표시)
function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#C41E3A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

export default function Qualifications() {
  // 자격증/면허 항목만 필터링
  const licenses = qualifications.filter((q) => q.category === 'license');
  // 전문 교육 항목만 필터링
  const education = qualifications.filter((q) => q.category === 'education');

  return (
    <section id="qualifications" className="section-padding bg-[#0A1628]">
      <div className="container-custom">
        {/* 섹션 제목 */}
        <AnimatedSection>
          <SectionTitle
            title="자격증 & 교육 이수"
            subtitle="Qualifications & Training"
            light={false}
          />
        </AnimatedSection>

        {/* 2컬럼 그리드: 자격증 | 교육 이수 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ===== 왼쪽: 자격증/면허 ===== */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              {/* 컬럼 헤더 */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#C41E3A] rounded-lg flex items-center justify-center">
                  {/* 자격증 아이콘 */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg">자격증 & 면허</h3>
              </div>

              {/* 자격증 목록 */}
              <ul className="space-y-4">
                {licenses.map((item, index) => (
                  <AnimatedSection key={item.id} delay={0.1 + index * 0.05}>
                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <div>
                        <p className="text-white font-medium text-sm">{item.title}</p>
                        {item.subtitle && (
                          <p className="text-white/40 text-xs mt-0.5">{item.subtitle}</p>
                        )}
                      </div>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* ===== 오른쪽: 전문 교육 이수 ===== */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              {/* 컬럼 헤더 */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#C41E3A] rounded-lg flex items-center justify-center">
                  {/* 교육 아이콘 */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg">전문 교육 이수</h3>
              </div>

              {/* 교육 이수 목록 */}
              <ul className="space-y-4">
                {education.map((item, index) => (
                  <AnimatedSection key={item.id} delay={0.2 + index * 0.05}>
                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <div>
                        <p className="text-white font-medium text-sm">{item.title}</p>
                        {item.subtitle && (
                          <p className="text-white/40 text-xs mt-0.5">{item.subtitle}</p>
                        )}
                      </div>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

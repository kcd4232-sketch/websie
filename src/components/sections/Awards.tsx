'use client';

// Awards 섹션: 수상 경력 타임라인
// 크림색 배경 (밝은 섹션) - 연도별 타임라인 레이아웃
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { awards } from '@/data/profile';
import type { Award } from '@/types';
import { cn } from '@/lib/utils';

// 메달 타입별 색상 및 라벨 설정
const medalConfig = {
  gold: { color: '#C9A84C', bg: 'bg-yellow-50', border: 'border-yellow-200', label: '금상' },
  silver: { color: '#9CA3AF', bg: 'bg-gray-50', border: 'border-gray-200', label: '은상' },
  bronze: { color: '#B45309', bg: 'bg-amber-50', border: 'border-amber-200', label: '동상' },
  special: { color: '#C41E3A', bg: 'bg-red-50', border: 'border-red-200', label: '특별' },
};

// 개별 수상 카드 컴포넌트
function AwardCard({ award, index }: { award: Award; index: number }) {
  const medal = award.medal ? medalConfig[award.medal] : medalConfig.gold;

  return (
    <AnimatedSection delay={index * 0.1}>
      {/* gap-3: 모바일에서 좁게, md 이상에서 gap-6으로 넓게 */}
      <div className="relative flex gap-3 md:gap-6">
        {/* ===== 타임라인 세로선 ===== */}
        {/* 마지막 항목이 아니면 세로선 표시 */}
        <div className="flex flex-col items-center">
          {/* 연도 원형 표시 */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg"
            style={{ backgroundColor: medal.color }}
          >
            {award.year}
          </div>
          {/* 타임라인 연결선 */}
          <div className="w-0.5 bg-gray-200 flex-1 mt-2" />
        </div>

        {/* ===== 수상 정보 카드 ===== */}
        <div className={cn(
          'flex-1 mb-8 p-4 md:p-6 rounded-xl border shadow-sm',
          medal.bg, medal.border
        )}>
          {/* 수상 카테고리 뱃지 */}
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white mb-3"
            style={{ backgroundColor: medal.color }}
          >
            {award.category}
          </span>

          {/* 수상 제목 */}
          <h3 className="text-[#0A1628] font-bold text-lg mb-1">{award.title}</h3>

          {/* 주최 기관 */}
          <p className="text-[#0A1628]/60 text-sm mb-2">{award.organization}</p>

          {/* 설명 (있을 경우만) */}
          {award.description && (
            <p className="text-[#0A1628]/50 text-xs mt-2 italic">{award.description}</p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Awards() {
  // 연도 오름차순 정렬
  const sortedAwards = [...awards].sort((a, b) => a.year - b.year);

  return (
    <section id="awards" className="section-padding bg-[#F5F0EB]">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            title="수상 경력"
            subtitle="Awards & Recognition"
            light={true}
          />
        </AnimatedSection>

        {/* 타임라인 레이아웃: 최대 너비 제한으로 가독성 확보 */}
        <div className="max-w-2xl mx-auto">
          {sortedAwards.map((award, index) => (
            <AwardCard key={award.id} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

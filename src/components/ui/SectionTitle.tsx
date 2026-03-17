// SectionTitle: 각 섹션의 제목 영역 공통 컴포넌트
// 한글 제목 + 영문 서브타이틀 + 구분선으로 구성
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;          // 메인 제목 (한글)
  subtitle?: string;      // 서브타이틀 (영문 또는 설명)
  align?: 'left' | 'center' | 'right';
  light?: boolean;        // true: 밝은 배경용, false: 어두운 배경용 (흰색 텍스트)
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={cn('flex flex-col gap-3 mb-14', alignClass, className)}>
      {/* 서브타이틀: 제목 위에 작게 표시 */}
      {subtitle && (
        <span
          className={cn(
            'text-xs font-semibold tracking-[0.3em] uppercase',
            light ? 'text-[#C41E3A]' : 'text-red-400'
          )}
        >
          {subtitle}
        </span>
      )}

      {/* 메인 제목 */}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold',
          light ? 'text-[#0A1628]' : 'text-white'
        )}
      >
        {title}
      </h2>

      {/* 구분선 (포인트 레드) */}
      <div
        className={cn(
          'h-1 w-12 rounded-full bg-[#C41E3A]',
          align === 'center' && 'mx-auto'
        )}
      />
    </div>
  );
}

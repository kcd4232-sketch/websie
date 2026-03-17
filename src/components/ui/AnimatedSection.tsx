'use client';

// AnimatedSection: 스크롤 시 섹션이 아래에서 위로 페이드인되는 컴포넌트
// react-intersection-observer로 화면 진입 감지 → Framer Motion으로 애니메이션
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;      // 딜레이 (초): 여러 요소가 순차적으로 등장할 때 사용
  direction?: 'up' | 'down' | 'left' | 'right'; // 등장 방향
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  // ref: 이 요소를 관찰 대상으로 등록
  // inView: 화면에 30% 이상 보이면 true
  const { ref, inView } = useInView({
    threshold: 0.1,    // 10% 보이면 트리거
    triggerOnce: true, // 한 번만 애니메이션 (재스크롤 시 반복 안 함)
  });

  // 방향에 따른 초기 위치 계산
  const initialOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialOffset }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

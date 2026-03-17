'use client';

// Lenis: 부드러운 스크롤 효과를 제공하는 라이브러리
// 이 훅을 루트 레이아웃에서 사용하면 전체 페이지에 적용됩니다
import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // 스크롤 지속 시간 (초)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 감속 곡선
      smoothWheel: true, // 마우스 휠 부드럽게
    });

    // 애니메이션 프레임마다 lenis 업데이트
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 컴포넌트 언마운트 시 정리
    return () => {
      lenis.destroy();
    };
  }, []);
}

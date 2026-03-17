'use client';

// LenisProvider: 부드러운 스크롤을 전체 앱에 적용하는 클라이언트 컴포넌트
// 서버 컴포넌트인 layout.tsx에서 직접 useEffect를 사용할 수 없어서 별도로 분리
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lenis 인스턴스 생성
    const lenis = new Lenis({
      duration: 1.2,          // 스크롤 애니메이션 시간 (초)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 감속 곡선 (easeOutExpo)
      smoothWheel: true,      // 마우스 휠 부드럽게
    });

    // 매 프레임마다 Lenis 업데이트 (requestAnimationFrame 루프)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 언마운트 시 메모리 정리
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}

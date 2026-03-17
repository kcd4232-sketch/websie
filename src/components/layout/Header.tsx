'use client';

// 헤더 컴포넌트: 상단 고정 네비게이션 바
// 스크롤 시 배경 변화 + 모바일 햄버거 메뉴 포함
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

// 네비게이션 메뉴 항목 정의
const navItems = [
  { label: '소개', href: '/#about' },
  { label: '자격증', href: '/#qualifications' },
  { label: '수상', href: '/#awards' },
  { label: '세미나', href: '/#projects' },
  { label: '자가진단', href: '/self-diagnosis' },
];

export default function Header() {
  // 스크롤 여부를 감지해서 헤더 배경 변경
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          // 기본: 고정 위치, 전체 너비, z-index 높음
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          // 스크롤 전: 투명 배경
          // 스크롤 후: 네이비 배경 + 하단 테두리
          isScrolled
            ? 'bg-[#0A1628]/95 backdrop-blur-sm border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* 로고 영역 */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-white font-bold text-lg tracking-wider group-hover:text-red-400 transition-colors">
              윤소연
            </span>
            <span className="text-white/60 text-xs tracking-widest uppercase">
              COSMICO KOREA
            </span>
          </Link>

          {/* 데스크탑 네비게이션 (md 이상에서만 표시) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-white/80 text-sm font-medium tracking-wide',
                  'hover:text-white transition-colors duration-200',
                  // 자가진단은 강조 버튼 스타일
                  item.label === '자가진단' &&
                    'bg-[#C41E3A] text-white px-4 py-2 rounded-full hover:bg-[#e02446]'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 모바일 햄버거 버튼 (md 미만에서만 표시) */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="메뉴 열기"
          >
            {/* 햄버거 아이콘 (세 줄) */}
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-4 h-0.5 bg-white ml-auto" />
            </div>
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 (별도 컴포넌트) */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}

'use client';

// 모바일 메뉴: 화면 오른쪽에서 슬라이드로 열리는 드로어 방식
// Framer Motion으로 부드러운 애니메이션 적용
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 오버레이: 클릭 시 메뉴 닫힘 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* 메뉴 드로어: 오른쪽에서 슬라이드 */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0A1628] flex flex-col"
          >
            {/* 닫기 버튼 */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="text-white font-bold tracking-wider">메뉴</span>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white p-2.5"
                aria-label="메뉴 닫기"
              >
                {/* X 아이콘 */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 네비게이션 링크 목록 */}
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'block py-3 px-4 text-white/80 text-lg font-medium rounded-lg',
                      'hover:text-white hover:bg-white/10 transition-colors',
                      // 자가진단 항목은 강조 스타일
                      item.label === '자가진단' &&
                        'mt-4 text-center bg-[#C41E3A] text-white hover:bg-[#e02446] hover:bg-opacity-100'
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* 하단 소셜 링크 */}
            <div className="mt-auto p-6 border-t border-white/10">
              <a
                href="https://www.instagram.com/imbeauty_pro?igsh=MXQyOHd1Yjh5dWN6eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                {/* 인스타그램 아이콘 */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

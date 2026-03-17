// 푸터 컴포넌트: 하단 정보 및 소셜 링크
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050d1a] text-white/60 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 왼쪽: 이름 및 소속 */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg">윤소연 원장</p>
            <p className="text-sm mt-1">COSMICO KOREA · BBTT · Head Spa · Plasma</p>
          </div>

          {/* 가운데: 빠른 링크 — 모바일 터치 영역을 위해 py-1.5 패딩 추가 */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
            <Link href="/#about" className="py-1.5 px-1 hover:text-white transition-colors">소개</Link>
            <Link href="/#qualifications" className="py-1.5 px-1 hover:text-white transition-colors">자격증</Link>
            <Link href="/#awards" className="py-1.5 px-1 hover:text-white transition-colors">수상</Link>
            <Link href="/#projects" className="py-1.5 px-1 hover:text-white transition-colors">세미나</Link>
            <Link href="/self-diagnosis" className="py-1.5 px-1 hover:text-white transition-colors">자가진단</Link>
          </nav>

          {/* 오른쪽: 소셜 링크 */}
          <div className="flex gap-4">
            {/* 인스타그램 아이콘 링크 */}
            <a
              href="https://www.instagram.com/imbeauty_pro?igsh=MXQyOHd1Yjh5dWN6eg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-white transition-colors"
              aria-label="인스타그램"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 저작권 표시 */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs">
          <p>© {currentYear} 윤소연. All rights reserved. | COSMICO KOREA</p>
        </div>
      </div>
    </footer>
  );
}

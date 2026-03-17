// 루트 레이아웃: 모든 페이지에 공통으로 적용되는 최상위 컴포넌트
// SEO 메타데이터, 폰트, Lenis 스크롤이 여기서 설정됩니다
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/layout/LenisProvider';

// ===== 모바일 뷰포트 설정 (Next.js 14 권장 방식) =====
// 모바일 브라우저에서 화면 너비 맞춤 및 초기 배율 고정
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// ===== SEO 메타데이터 설정 =====
export const metadata: Metadata = {
  title: {
    default: '윤소연 원장 | COSMICO KOREA 마사지 테라피스트',
    template: '%s | 윤소연 원장',
  },
  description:
    'COSMICO KOREA 소속 마사지 테라피스트 겸 강사 윤소연 원장. BBTT(Body Balance Technical Training), 헤드스파, 플라즈마 전문. 국제대회 수상 경력 보유.',
  keywords: ['마사지', 'BBTT', '헤드스파', '플라즈마', 'COSMICO KOREA', '윤소연', '마사지 테라피스트', '피부관리'],
  authors: [{ name: '윤소연' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '윤소연 원장 프로필',
    title: '윤소연 원장 | COSMICO KOREA',
    description: 'BBTT · Head Spa · Plasma 전문 마사지 테라피스트 겸 강사',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="ko": 한국어 페이지 설정 (SEO, 접근성에 중요)
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        {/* LenisProvider: 부드러운 스크롤 전역 적용 */}
        <LenisProvider>
          {/* 상단 고정 네비게이션 */}
          <Header />
          {/* 메인 콘텐츠 영역 */}
          <main>{children}</main>
          {/* 하단 푸터 */}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

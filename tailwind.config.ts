// Tailwind CSS 설정 파일
// COSMICO KOREA 브랜드 컬러와 Pretendard 폰트를 커스텀으로 추가
import type { Config } from 'tailwindcss';

const config: Config = {
  // shadcn/ui darkMode 설정
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ===== 브랜드 컬러 =====
      colors: {
        // 기본 배경 (shadcn 호환)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // COSMICO KOREA 브랜드 컬러
        navy: {
          DEFAULT: '#0A1628',   // 메인 다크 배경
          light: '#1a2a45',     // 약간 밝은 네이비
          dark: '#050d1a',      // 더 어두운 네이비
        },
        cream: {
          DEFAULT: '#F5F0EB',   // 라이트 배경
          dark: '#ede6dd',      // 약간 어두운 크림
        },
        accent: {
          DEFAULT: '#C41E3A',   // 포인트 레드 (CTA 버튼 등)
          light: '#e02446',     // 밝은 레드 (호버)
          dark: '#9e1830',      // 어두운 레드
        },
        gold: '#C9A84C',        // 수상 골드 컬러
        // shadcn 컴포넌트용
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      // ===== 폰트 =====
      fontFamily: {
        sans: ['var(--font-pretendard)', 'Pretendard', '-apple-system', 'sans-serif'],
        pretendard: ['var(--font-pretendard)', 'Pretendard', 'sans-serif'],
      },
      // ===== 애니메이션 =====
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'scroll-bounce': 'scroll-bounce 1.5s ease-in-out infinite',
      },
      // ===== 반응형 컨테이너 =====
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

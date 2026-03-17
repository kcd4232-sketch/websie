/** @type {import('next').NextConfig} */
const nextConfig = {
  // next/image: 외부 도메인 이미지 허용 설정
  // 현재는 로컬 이미지만 사용하므로 최소 설정
  images: {
    // 나중에 인스타그램 API 등 외부 이미지 사용 시 도메인 추가
    remotePatterns: [],
  },

  // 실험적 기능: 더 빠른 컴파일러 (Rust 기반)
  experimental: {
    // optimizeCss: true, // CSS 최적화 (필요시 활성화)
  },
};

export default nextConfig;

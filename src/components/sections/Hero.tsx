'use client';

// Hero 섹션: 첫 화면 전체 (풀스크린)
// 네이비 배경 + 프로필 사진 + 이름/타이틀 + 스크롤 화살표
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]"
    >
      {/* ===== 배경 장식 요소들 ===== */}
      {/* 왼쪽 상단 원형 그라데이션 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C41E3A]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      {/* 오른쪽 하단 원형 그라데이션 */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a2a45]/80 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* ===== 메인 콘텐츠 ===== */}
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* 프로필 사진 영역 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* 원형 테두리 장식 */}
            <div className="absolute inset-0 rounded-full border-2 border-[#C41E3A]/30 scale-110" />
            <div className="absolute inset-0 rounded-full border border-white/10 scale-125" />

            {/* 프로필 이미지 */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="/images/profile/profile-1.jpg"
                alt="윤소연 원장 프로필 사진"
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-cover object-top"
                priority // Hero 이미지는 LCP(최대 콘텐츠 요소)이므로 최우선 로드
              />
            </div>

            {/* 소속 뱃지 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#C41E3A] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap tracking-wider"
            >
              COSMICO KOREA
            </motion.div>
          </motion.div>

          {/* 텍스트 영역 */}
          <div className="text-center lg:text-left">
            {/* 영문 서브타이틀 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/50 text-sm tracking-[0.3em] uppercase mb-4 font-medium"
            >
              Massage Therapist & Instructor
            </motion.p>

            {/* 메인 이름 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tight"
            >
              윤소연
              <span className="block text-2xl md:text-3xl text-white/40 font-light mt-1 tracking-widest">
                Yun Soyeon
              </span>
            </motion.h1>

            {/* 전문 분야 뱃지들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6 mb-8"
            >
              {['BBTT', 'Head Spa', 'Plasma', '피부관리'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-white/20 text-white/70 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA 버튼들 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* 자가진단 버튼 (강조) */}
              <Link
                href="/self-diagnosis"
                className="px-8 py-3.5 bg-[#C41E3A] text-white font-semibold rounded-full hover:bg-[#e02446] transition-colors duration-200 text-center"
              >
                나에게 맞는 관리 찾기
              </Link>
              {/* 소개 보기 버튼 (아웃라인) */}
              <Link
                href="#about"
                className="px-8 py-3.5 border border-white/30 text-white font-medium rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-200 text-center"
              >
                소개 보기
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== 스크롤 인디케이터 (하단 중앙) ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        {/* 위아래로 반복 움직이는 화살표 */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-5 border-r-2 border-b-2 border-white/30 rotate-45"
        />
      </motion.div>
    </section>
  );
}

'use client';

// About 섹션: 자기소개 + 전문분야 뱃지
// 크림색 배경 (밝은 섹션) - 다크/라이트 교차 패턴의 두 번째 섹션
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { aboutText, specialties } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#F5F0EB]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ===== 왼쪽: 프로필 사진 ===== */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* 장식용 네이비 사각형 (뒤에 배치) */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#0A1628]/10 rounded-2xl" />

              {/* 메인 사진 */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile/profile-2.jpg"
                  alt="윤소연 원장"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              {/* 수상 실적 요약 카드 — 모바일: 오른쪽에서 잘리지 않게 right-4, 데스크탑: -right-6 */}
              <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 bg-[#0A1628] text-white p-4 md:p-5 rounded-xl shadow-xl">
                <p className="text-[#C41E3A] text-3xl font-bold">4+</p>
                <p className="text-white/70 text-sm mt-1">국제대회 수상</p>
              </div>
            </div>
          </AnimatedSection>

          {/* ===== 오른쪽: 텍스트 콘텐츠 ===== */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <SectionTitle
                title="원장 소개"
                subtitle="About"
                align="left"
                light={true}
              />

              {/* 인사말 */}
              <p className="text-[#0A1628] text-xl font-semibold mb-4">
                {aboutText.greeting}
              </p>

              {/* 소개 본문 */}
              <p className="text-[#0A1628]/70 leading-relaxed mb-4">
                {aboutText.intro}
              </p>
              <p className="text-[#0A1628]/70 leading-relaxed mb-8">
                {aboutText.detail}
              </p>

              {/* 전문 분야 뱃지 */}
              <div className="mb-8">
                <p className="text-[#0A1628]/50 text-xs tracking-widest uppercase mb-3 font-semibold">
                  전문 분야
                </p>
                <div className="flex flex-wrap gap-3">
                  {specialties.map((spec) => (
                    <div key={spec.id} className="group">
                      <span className="inline-block px-4 py-2 bg-[#0A1628] text-white text-sm font-semibold rounded-full group-hover:bg-[#C41E3A] transition-colors duration-200 cursor-default">
                        {spec.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 인스타그램 상담 링크 */}
              <a
                href={aboutText.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#C41E3A] text-white font-semibold rounded-full hover:bg-[#e02446] transition-colors duration-200"
              >
                {/* 인스타그램 아이콘 */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                인스타그램 DM 상담
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

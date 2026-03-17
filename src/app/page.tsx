// 메인 페이지: 모든 섹션을 순서대로 조합하는 싱글 페이지
// 순서: Hero → About → Qualifications → Awards → Projects → Instagram → DiagnosisCTA
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Qualifications from '@/components/sections/Qualifications';
import Awards from '@/components/sections/Awards';
import Projects from '@/components/sections/Projects';
import InstagramSection from '@/components/sections/InstagramSection';
import DiagnosisCTA from '@/components/sections/DiagnosisCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. 히어로: 첫 화면 전체 (네이비 배경) */}
      <Hero />

      {/* 2. 소개: 프로필 사진 + 자기소개 (크림 배경) */}
      <About />

      {/* 3. 자격증: 면허 + 교육 이수 목록 (네이비 배경) */}
      <Qualifications />

      {/* 4. 수상: 연도별 타임라인 (크림 배경) */}
      <Awards />

      {/* 5. 세미나/프로젝트: 필터 탭 + 카드 그리드 (네이비 배경) */}
      <Projects />

      {/* 6. 인스타그램: 팔로우 CTA (크림 배경) */}
      <InstagramSection />

      {/* 7. 자가진단 CTA: 퀴즈 페이지로 유도 (네이비 배경) */}
      <DiagnosisCTA />
    </>
  );
}

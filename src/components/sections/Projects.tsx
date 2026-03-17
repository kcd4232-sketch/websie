'use client';

// Projects 섹션: 세미나/프로젝트 필터 탭 + 카드 그리드
// 네이비 배경 (어두운 섹션)
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects, projectCategories } from '@/data/projects';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

// 카테고리별 뱃지 색상
const categoryColors: Record<string, string> = {
  bbtt: 'bg-blue-500',
  headspa: 'bg-teal-500',
  plasma: 'bg-red-500',
  seminar: 'bg-purple-500',
  international: 'bg-orange-500',
};

// 개별 프로젝트 카드
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout               // 필터 변경 시 카드 위치 애니메이션
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C41E3A]/50 transition-all duration-300 hover:-translate-y-1">
          {/* 이미지 영역 */}
          <div className="relative aspect-video bg-white/5 overflow-hidden">
            {/* 실제 이미지가 없을 때 플레이스홀더 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/10 text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-2">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <p className="text-xs">사진 준비 중</p>
              </div>
            </div>
            {/* 카테고리 뱃지 */}
            <div className="absolute top-3 left-3">
              <span className={cn(
                'text-white text-xs font-bold px-2.5 py-1 rounded-full',
                categoryColors[project.category] || 'bg-gray-500'
              )}>
                {projectCategories.find(c => c.id === project.category)?.label || project.category}
              </span>
            </div>
          </div>

          {/* 텍스트 정보 */}
          <div className="p-6">
            <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#C41E3A] transition-colors line-clamp-2">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-white/50 text-sm mb-3">{project.subtitle}</p>
            )}

            {/* 날짜 & 장소 */}
            <div className="flex items-center gap-4 text-white/40 text-xs">
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {project.date}
              </span>
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {project.location}
              </span>
            </div>

            {/* 태그들 */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-white/40 text-xs border border-white/10 px-2 py-0.5 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  // 현재 선택된 카테고리 필터 (기본값: 전체)
  const [activeCategory, setActiveCategory] = useState('all');

  // 선택된 카테고리에 따라 프로젝트 필터링
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-[#0A1628]">
      <div className="container-custom">
        <AnimatedSection>
          <SectionTitle
            title="세미나 & 활동"
            subtitle="Seminars & Projects"
            light={false}
          />
        </AnimatedSection>

        {/* ===== 카테고리 필터 탭 ===== */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  activeCategory === cat.id
                    ? 'bg-[#C41E3A] text-white'      // 선택된 탭
                    : 'border border-white/20 text-white/60 hover:border-white/40 hover:text-white' // 비선택 탭
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* ===== 프로젝트 카드 그리드 ===== */}
        {/* AnimatePresence: 필터 변경 시 카드 진입/퇴장 애니메이션 */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 결과 없을 때 메시지 */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-white/30">
            <p>해당 카테고리의 항목이 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
}

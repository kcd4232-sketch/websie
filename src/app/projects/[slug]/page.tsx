// 프로젝트 상세 페이지: /projects/[slug] 경로
// 동적 라우팅: slug에 따라 해당 프로젝트 데이터를 불러와 표시
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';

// Next.js 14: 빌드 시 정적 경로 미리 생성 (SSG)
// 배포 시 각 slug마다 정적 HTML 파일을 미리 만들어 빠른 로딩
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 동적 메타데이터: 각 프로젝트 제목을 페이지 타이틀로 설정
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: '프로젝트를 찾을 수 없습니다' };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // slug에 해당하는 프로젝트 찾기
  const project = projects.find((p) => p.slug === slug);

  // 없으면 404 페이지
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* ===== 히어로 이미지 영역 ===== */}
      <div className="relative h-64 md:h-96 bg-[#1a2a45] flex items-end">
        {/* 배경 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />

        {/* 프로젝트 제목 영역 */}
        <div className="container-custom relative z-10 pb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-4 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            세미나 목록으로
          </Link>
          <h1 className="text-white text-3xl md:text-4xl font-bold">{project.title}</h1>
          {project.subtitle && (
            <p className="text-white/60 mt-2">{project.subtitle}</p>
          )}
        </div>
      </div>

      {/* ===== 본문 내용 ===== */}
      <div className="container-custom py-12">
        <div className="max-w-3xl">
          {/* 날짜 & 장소 정보 */}
          <div className="flex flex-wrap gap-6 mb-8 text-white/50 text-sm">
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {project.date}
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {project.location}
            </span>
          </div>

          {/* 상세 설명 */}
          <div className="text-white/70 leading-relaxed whitespace-pre-line text-lg mb-8">
            {project.longDescription || project.description}
          </div>

          {/* 태그 목록 */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-white/10 text-white/50 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 갤러리 사진이 있을 경우 표시 (현재는 플레이스홀더) */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h2 className="text-white font-bold text-xl mb-4">사진</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, i) => (
                  <div key={i} className="aspect-square bg-white/5 rounded-xl" />
                ))}
              </div>
            </div>
          )}

          {/* 인스타그램 DM 상담 버튼 */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm mb-4">이 세미나에 대해 더 알고 싶으신가요?</p>
            <a
              href="https://www.instagram.com/imbeauty_pro?igsh=MXQyOHd1Yjh5dWN6eg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C41E3A] text-white font-semibold rounded-full hover:bg-[#e02446] transition-colors"
            >
              인스타그램 DM 문의하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

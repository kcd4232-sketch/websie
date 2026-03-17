import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'bbtt-teuknik-manual-seminar-2026',
    title: '2026 BBTT 테크닉 메뉴얼 세미나',
    subtitle: 'Body Balance Technical Training 심화 과정',
    category: 'bbtt',
    date: '2026',
    location: '대한민국',
    description: 'BBTT 테크닉의 심화 매뉴얼을 다루는 전문 세미나. 바디 밸런스와 테크니컬 트레이닝의 핵심을 전달합니다.',
    longDescription: `COSMICO KOREA에서 진행하는 BBTT(Body Balance Technical Training) 테크닉 메뉴얼 세미나입니다.

    목과 어깨의 불균형을 개선하는 전문적인 테크닉을 체계적으로 배울 수 있는 심화 과정으로, 실전 적용 능력을 극대화합니다.`,
    coverImage: '/images/seminars/bbtt-2026.jpg',
    gallery: [],
    tags: ['BBTT', '바디밸런스', '테크닉', '메뉴얼', 'COSMICO'],
    featured: true,
  },
  {
    id: 'p2',
    slug: 'gbtt-vietnam-lymph-headspa-2025',
    title: '2025 GBTT 베트남 마스터 림프 해독 세미나',
    subtitle: '헤드스파 국제 세미나 (베트남)',
    category: 'headspa',
    date: '2025',
    location: '베트남',
    description: '베트남에서 진행된 GBTT 마스터 클래스. 림프 해독과 헤드스파를 결합한 국제 세미나입니다.',
    longDescription: `베트남에서 개최된 GBTT(Global Body Balance Technical Training) 마스터 클래스 세미나입니다.

    림프 해독 메커니즘과 헤드스파의 결합으로 두피 건강과 전신 순환을 동시에 케어하는 고급 기술을 전수합니다.`,
    coverImage: '/images/seminars/gbtt-vietnam-2025.jpg',
    gallery: [],
    tags: ['GBTT', '헤드스파', '림프해독', '베트남', '국제세미나'],
    featured: true,
  },
  {
    id: 'p3',
    slug: 'kbeauty-shoulder-seminar',
    title: 'K-뷰티 바디밸런스 목과 어깨 불균형 관리 세미나',
    subtitle: '전문 불균형 교정 관리 과정',
    category: 'bbtt',
    date: '2025',
    location: '대한민국',
    description: '목과 어깨 불균형을 전문적으로 관리하는 K-뷰티 바디밸런스 세미나. 실전 테크닉 중심의 교육 과정.',
    longDescription: `현대인의 고질적인 문제인 목과 어깨 불균형을 전문적으로 다루는 세미나입니다.

    데스크워크, 스마트폰 사용 등으로 발생하는 자세 불균형의 원인을 분석하고, BBTT 테크닉을 활용한 효과적인 관리 방법을 배웁니다.`,
    coverImage: '/images/seminars/shoulder-seminar.jpg',
    gallery: [],
    tags: ['바디밸런스', '목어깨', '불균형교정', 'K뷰티'],
    featured: false,
  },
  {
    id: 'p4',
    slug: 'busan-seminar',
    title: '부산 세미나',
    subtitle: '지역 전문가 교육 세미나',
    category: 'seminar',
    date: '2024',
    location: '부산, 대한민국',
    description: '부산 지역 미용·테라피 전문가들을 대상으로 한 심화 교육 세미나.',
    longDescription: `부산 지역 미용·테라피 전문가들을 위한 전문 세미나입니다.

    현장 실습 중심의 교육으로 이론과 실제를 함께 배울 수 있는 기회를 제공합니다.`,
    coverImage: '/images/seminars/busan-seminar.jpg',
    gallery: [],
    tags: ['부산', '세미나', '전문가교육'],
    featured: false,
  },
  {
    id: 'p5',
    slug: 'srilanka-seminar',
    title: '스리랑카 국제 세미나',
    subtitle: '해외 전문가 교육 세미나',
    category: 'international',
    date: '2024',
    location: '스리랑카',
    description: '스리랑카에서 개최된 국제 미용·테라피 세미나. 해외 전문가들과의 기술 교류.',
    longDescription: `스리랑카에서 개최된 국제 미용·테라피 세미나입니다.

    한국의 선진 미용 테크닉을 해외 전문가들에게 전수하고, 다양한 문화적 배경을 가진 전문가들과 기술을 교류하는 글로벌 세미나입니다.`,
    coverImage: '/images/seminars/srilanka-seminar.jpg',
    gallery: [],
    tags: ['스리랑카', '국제세미나', '해외교육'],
    featured: true,
  },
];

export const projectCategories = [
  { id: 'all', label: '전체' },
  { id: 'bbtt', label: 'BBTT' },
  { id: 'headspa', label: 'Head Spa' },
  { id: 'plasma', label: 'Plasma' },
  { id: 'seminar', label: '세미나' },
  { id: 'international', label: '해외' },
];

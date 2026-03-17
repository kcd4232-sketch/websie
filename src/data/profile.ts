import type { Qualification, Award } from '@/types';

export const qualifications: Qualification[] = [
  // 자격증/면허
  {
    id: 'q1',
    category: 'license',
    title: '피부미용사 국가자격증',
    subtitle: 'National Certificate of Skin Care',
  },
  {
    id: 'q2',
    category: 'license',
    title: '미용사(일반) 국가자격증',
    subtitle: 'General Hairdresser\'s License',
  },
  {
    id: 'q3',
    category: 'license',
    title: '뷰티 플라자 마스터 자격증',
    subtitle: 'Beauty Plaza Master Certificate',
  },
  {
    id: 'q4',
    category: 'license',
    title: '플라즈마 교육지점 운영',
    subtitle: 'Operation of Plasma Education Branch',
  },
  {
    id: 'q5',
    category: 'license',
    title: '헤드스파 국제 총 강사',
    subtitle: 'Head Spa International General Beauty Instructor',
  },
  // 전문 교육
  {
    id: 'e1',
    category: 'education',
    title: '성장판 전문 관리 과정 수료',
    subtitle: 'Specialized Growth Plate Management Course',
  },
  {
    id: 'e2',
    category: 'education',
    title: '안면 축소 및 비대칭 전문 관리 과정 수료',
    subtitle: 'Specialized Face Reduction & Asymmetry Management',
  },
  {
    id: 'e3',
    category: 'education',
    title: '에스테틱 전문 관리 과정 수료',
    subtitle: 'Aesthetic Management Professional Course',
  },
  {
    id: 'e4',
    category: 'education',
    title: '실전 피부 컨설팅 전문가 과정 수료',
    subtitle: 'Practical Cosmetic Consultation Professional Course',
  },
  {
    id: 'e5',
    category: 'education',
    title: '전문 자기 관리 상담 과정 수료',
    subtitle: 'Professional Self-Care Consultation Course',
  },
  {
    id: 'e6',
    category: 'education',
    title: '미적 소비자 컨설팅 전문가 1급',
    subtitle: 'Aesthetic Consumer Consulting Expert Grade 1',
  },
  {
    id: 'e7',
    category: 'education',
    title: 'COSMICO GBTT 과정 수료',
    subtitle: 'Cosmico GBTT Course Completion',
  },
];

export const awards: Award[] = [
  {
    id: 'a1',
    year: 2021,
    title: '세계 바디아트 콘테스트 금대상',
    organization: '세계 바디아트 콘테스트',
    category: '플라즈마 부문',
    medal: 'gold',
    description: 'Won the World Body Art Contest Gold Grand Prix in Plasma',
  },
  {
    id: 'a2',
    year: 2023,
    title: '국제미용대회 골드대상',
    organization: '한국인간올림픽 국제미용대회',
    category: '헤드스파 부문',
    medal: 'gold',
    description: '한국인간올림픽 국제미용대회 헤드스파 부문 금메달',
  },
  {
    id: 'a3',
    year: 2024,
    title: 'K-뷰티 세계대회 플라즈마 심사위원',
    organization: 'K-Beauty World Contest Expo',
    category: '플라즈마 심사위원',
    medal: 'special',
    description: '2024 K-Beauty World Contest Expo Plasma Judge',
  },
  {
    id: 'a4',
    year: 2025,
    title: '국제미용대회 대상',
    organization: '한국인간올림픽 국제미용대회',
    category: '헤드스파 부문',
    medal: 'gold',
    description: 'Winning the Grand Prize in the Head Spa category of the Korea Human Olympics International Beauty Competition in 2025',
  },
];

export const specialties = [
  { id: 'bbtt', label: 'BBTT', description: 'Body Balance Technical Training' },
  { id: 'headspa', label: 'Head Spa', description: '두피 & 헤드스파 전문' },
  { id: 'plasma', label: 'Plasma', description: '플라즈마 피부관리' },
  { id: 'skin', label: '피부관리', description: '에스테틱 & 피부케어' },
];

export const aboutText = {
  greeting: '안녕하세요, 윤소연 원장입니다.',
  intro: `COSMICO KOREA 소속 마사지 테라피스트이자 강사로, BBTT(Body Balance Technical Training), 헤드스파, 플라즈마 분야를 전문으로 합니다.`,
  detail: `다양한 국제대회 수상 경력과 풍부한 교육 이수를 바탕으로, 고객 한 분 한 분의 몸과 피부 상태에 맞는 맞춤형 케어를 제공합니다. 건강한 아름다움을 향한 여정을 함께하겠습니다.`,
  organization: 'COSMICO KOREA',
  instagram: 'https://www.instagram.com/imbeauty_pro?igsh=MXQyOHd1Yjh5dWN6eg==',
};

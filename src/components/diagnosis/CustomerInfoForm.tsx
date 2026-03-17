'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { CustomerInfo } from '@/types';

interface CustomerInfoFormProps {
  onSubmit: (info: CustomerInfo) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const PHONE_REGEX = /^01[016789]-?\d{3,4}-?\d{4}$/;

export default function CustomerInfoForm({ onSubmit, onBack, isSubmitting }: CustomerInfoFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = '이름을 입력해주세요';
    if (!phone.trim()) {
      newErrors.phone = '연락처를 입력해주세요';
    } else if (!PHONE_REGEX.test(phone.replace(/\s/g, ''))) {
      newErrors.phone = '올바른 전화번호 형식으로 입력해주세요 (예: 010-1234-5678)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ name: name.trim(), phone: phone.trim() });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto"
    >
      {/* 안내 카드 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
        <div className="text-center mb-6">
          <div className="text-3xl mb-3">📋</div>
          <h2 className="text-white text-2xl font-bold mb-2">진단 결과 받기</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            맞춤 결과를 확인하고 원장님께 전달드립니다.<br />
            상담을 원하시면 연락처를 남겨주세요.
          </p>
        </div>

        <div className="h-px bg-white/10 mb-6" />

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 이름 */}
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              이름 <span className="text-[#C41E3A]">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력해주세요"
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#C41E3A] transition-colors ${
                errors.name ? 'border-red-500' : 'border-white/15'
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
            )}
          </div>

          {/* 연락처 */}
          <div>
            <label className="block text-white/70 text-sm font-medium mb-2">
              연락처 <span className="text-[#C41E3A]">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="010-1234-5678"
              className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none focus:border-[#C41E3A] transition-colors ${
                errors.phone ? 'border-red-500' : 'border-white/15'
              }`}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
            )}
          </div>

          <p className="text-white/30 text-xs">
            * 입력하신 정보는 진단 결과 전달 목적으로만 사용됩니다.
          </p>
        </form>
      </div>

      {/* 버튼 */}
      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="px-6 py-3 border border-white/20 text-white/70 rounded-full hover:border-white/40 hover:text-white transition-colors disabled:opacity-30"
        >
          ← 이전
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-[#C41E3A] text-white font-bold rounded-full hover:bg-[#e02446] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              전송 중...
            </>
          ) : (
            '결과 보기 →'
          )}
        </button>
      </div>
    </motion.div>
  );
}

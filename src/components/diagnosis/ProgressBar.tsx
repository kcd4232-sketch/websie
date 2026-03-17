// ProgressBar: 퀴즈 진행 상황 + 존 인디케이터
interface ProgressBarProps {
  current: number;
  total: number;
  zone: 'body' | 'scalp';
}

export default function ProgressBar({ current, total, zone }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      {/* 존 인디케이터 */}
      <div className="flex justify-center gap-6 mb-4">
        <ZoneIndicator label="바디" active={zone === 'body'} done={zone === 'scalp'} />
        <ZoneIndicator label="두피" active={zone === 'scalp'} done={false} />
      </div>

      {/* 단계 텍스트 */}
      <div className="flex justify-between items-center mb-2 text-sm">
        <span className="text-white/60">
          질문 <span className="text-white font-bold">{current}</span> / {total}
        </span>
        <span className="text-[#C41E3A] font-bold">{percentage}%</span>
      </div>

      {/* 프로그레스 바 */}
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#C41E3A] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ZoneIndicator({ label, active, done }: { label: string; active: boolean; done: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className={`w-2.5 h-2.5 rounded-full transition-colors ${
          active ? 'bg-[#C41E3A]' : done ? 'bg-white/40' : 'bg-white/15'
        }`}
      />
      <span
        className={`text-xs font-medium transition-colors ${
          active ? 'text-white' : done ? 'text-white/40' : 'text-white/25'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

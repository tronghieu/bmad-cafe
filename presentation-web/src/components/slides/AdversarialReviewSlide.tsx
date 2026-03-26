'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, AlertCircle, Info } from 'lucide-react';

const whenToRun = [
  { stage: 'Sau Quick Spec', what: 'File tech-spec-{slug}.md', how: 'Menu Step 4 → [R]' },
  { stage: 'Sau Quick Dev', what: 'Toàn bộ git diff', how: 'Bước 5 (tự động)' },
  { stage: 'Standalone', what: 'Bất kỳ spec, doc, hoặc code diff', how: '/bmad-review-adversarial-general' },
];

const severities = [
  { level: 'Critical', icon: <AlertTriangle className="w-4 h-4" />, color: 'text-red-400 bg-red-400/10' },
  { level: 'High', icon: <AlertCircle className="w-4 h-4" />, color: 'text-orange-400 bg-orange-400/10' },
  { level: 'Medium', icon: <Info className="w-4 h-4" />, color: 'text-yellow-400 bg-yellow-400/10' },
  { level: 'Low', icon: <Info className="w-4 h-4" />, color: 'text-blue-400 bg-blue-400/10' },
];

export const AdversarialReviewSlide = () => (
  <div className="w-full max-w-5xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-2"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
        <ShieldAlert className="w-4 h-4 text-orange-400" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-400/70">Review Workflow</span>
      </div>
      <h2 className="text-5xl font-black text-white tracking-tighter">
        Adversarial <span className="text-orange-400 italic">Review</span>
      </h2>
      <p className="text-base text-white/40">Phê bình hoài nghi trước khi ship — tìm điểm yếu, lỗ hổng và rủi ro.</p>
    </motion.div>

    {/* When to run */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="overflow-hidden rounded-2xl border border-white/10"
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-white/5">
            <th className="text-left p-4 text-xs font-sans text-white/30 tracking-widest">GIAI ĐOẠN</th>
            <th className="text-left p-4 text-xs font-sans text-white/30 tracking-widest">ĐỐI TƯỢNG REVIEW</th>
            <th className="text-left p-4 text-xs font-sans text-white/30 tracking-widest">KÍCH HOẠT BỞI</th>
          </tr>
        </thead>
        <tbody>
          {whenToRun.map((r, i) => (
            <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-4 text-white/80 font-semibold text-xs">{r.stage}</td>
              <td className="p-4 text-white/50 text-xs font-mono">{r.what}</td>
              <td className="p-4 text-orange-400 text-xs font-mono">{r.how}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>

    <div className="grid grid-cols-2 gap-6">
      {/* What it does */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-3"
      >
        <p className="text-xs font-sans text-white/30 tracking-widest">CÁCH HOẠT ĐỘNG</p>
        <ul className="space-y-2">
          {[
            'Nhận spec hoặc diff làm đầu vào',
            'Review từ góc nhìn adversarial (hoài nghi, phê phán)',
            'Phát hiện: edge cases thiếu, yêu cầu mơ hồ, giả định rủi ro, logic sai',
            'Mỗi finding: ID, Mức độ, Tính hợp lệ, Mô tả',
          ].map((t, i) => (
            <li key={i} className="flex gap-2 items-start text-xs text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400/50 flex-shrink-0 mt-1" />
              {t}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Severity + special note */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-3">
          <p className="text-xs font-sans text-white/30 tracking-widest">MỨC ĐỘ NGHIÊM TRỌNG</p>
          <div className="flex gap-2 flex-wrap">
            {severities.map((s, i) => (
              <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${s.color}`}>
                {s.icon}
                {s.level}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
          <p className="text-xs text-white/40">
            💡 Để có kết quả tốt hơn, hãy dùng một <strong className="text-white/60">LLM chất lượng cao khác</strong> cho review nhằm tạo ra những góc nhìn khác.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

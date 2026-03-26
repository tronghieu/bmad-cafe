'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap } from 'lucide-react';

export const QuickFlowOverviewSlide = () => (
  <div className="w-full max-w-5xl space-y-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <Layers className="w-4 h-4 text-secondary" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">BMAD Flows</span>
      </div>
      <h2 className="text-5xl font-black text-white tracking-tighter">
        2 Luồng <span className="text-secondary italic">Chính</span>
      </h2>
      <p className="text-lg text-white/40">Chọn đúng luồng phù hợp với nhu cầu thực tế.</p>
    </motion.div>

    <div className="grid grid-cols-2 gap-8">
      {[
        {
          icon: <Layers className="w-8 h-8 text-blue-400" />,
          label: 'Standard Flow (BMM)',
          badge: 'Phức tạp / Đa phần liên quan',
          badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          desc: 'Phát triển sản phẩm/tính năng mới có độ phức tạp cao. Cần sự phối hợp của nhiều vai trò để phân tích, lên solution và triển khai.',
          steps: ['1-Phân Tích', '2-Lập Kế Hoạch', '3-Thiết Kế Giải Pháp', '4-Triển Khai'],
          color: 'border-blue-500/20 bg-blue-500/5',
          stepColor: 'bg-blue-500/10 text-blue-300',
        },
        {
          icon: <Zap className="w-8 h-8 text-secondary" />,
          label: 'Quick Flow',
          badge: 'Nhỏ / Codebase đã có',
          badgeColor: 'bg-secondary/10 text-secondary border-secondary/20',
          desc: 'Chỉnh sửa hoặc implement các yêu cầu cần nhanh nhưng không quá phức tạp. Hai lệnh chính: Quick Spec (/bmad-bmm-quick-spec) và Quick Dev (/bmad-bmm-quick-dev).',
          steps: ['Quick Spec', 'Quick Dev', 'Review'],
          color: 'border-secondary/20 bg-secondary/5',
          stepColor: 'bg-secondary/10 text-secondary',
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className={`p-8 rounded-3xl border ${item.color} space-y-5`}
        >
          <div className="flex items-center gap-4">
            {item.icon}
            <div>
              <h3 className="text-2xl font-black text-white">{item.label}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full border ${item.badgeColor} font-mono`}>{item.badge}</span>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
          <div className="flex flex-wrap gap-2">
            {item.steps.map((s, j) => (
              <span key={j} className={`text-xs px-3 py-1 rounded-full font-mono ${item.stepColor}`}>{s}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

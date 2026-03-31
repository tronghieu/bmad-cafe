'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

const workflows = [
  {
    name: 'Quick Spec',
    command: '/bmad-bmm-quick-spec',
    desc: 'Phân tích yêu cầu và lên đặc tả kỹ thuật',
    color: 'text-secondary border-secondary/20 bg-secondary/5',
  },
  {
    name: 'Quick Dev',
    command: '/bmad-bmm-quick-dev',
    desc: 'Triển khai',
    color: 'text-accent border-accent/20 bg-accent/5',
  },
  {
    name: 'Adversarial Review',
    command: '/bmad-review-adversarial-general',
    desc: 'Review kết quả triển khai với tư duy phản biện mạnh',
    color: 'text-orange-400 border-orange-400/20 bg-orange-400/5',
  },
];

export const QuickFlowDetailSlide = () => (
  <div className="w-full max-w-5xl space-y-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
        <Zap className="w-4 h-4 text-secondary" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/80">Quick Flow</span>
      </div>
      <h2 className="text-5xl font-black text-white tracking-tighter">
        <span className="text-secondary italic mr-3">Quick</span> Flow
      </h2>
    </motion.div>

    {/* Comparison */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-2 gap-6"
    >
      <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
        <p className="text-xs font-mono text-white/30 uppercase mb-3">Full Flow</p>
        <p className="text-lg font-bold text-white/60">18+ bước, 3+ agent</p>
        <p className="text-xs text-white/40 mt-1">Brief → PRD → Architecture → Epics → Dev</p>
        <p className="text-xs text-white/30 mt-2">Nhiều file output</p>
      </div>
      <div className="p-5 rounded-2xl bg-secondary/5 border border-secondary/20">
        <p className="text-xs font-mono text-secondary/60 uppercase mb-3">Quick Flow</p>
        <p className="text-lg font-bold text-secondary">3 bước, 3 agent</p>
        <p className="text-xs text-secondary/60 mt-1">Tạo Spec → Triển khai → Review</p>
        <p className="text-xs text-secondary/40 mt-2">1 file: <code className="font-mono">tech-spec-{'{slug}'}.md</code></p>
      </div>
    </motion.div>

    {/* 3 workflows */}
    <div className="space-y-3">
      <p className="text-xs font-mono text-white/30 uppercase tracking-widest">3 Workflows trong Quick Flow</p>
      <div className="flex items-center gap-3">
        {workflows.map((w, i) => (
          <React.Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`flex-1 p-5 rounded-2xl border ${w.color} space-y-2`}
            >
              <p className="font-bold text-sm">{w.name}</p>
              <code className="text-xs opacity-70 font-mono block">{w.command}</code>
              <p className="text-xs text-white/60">{w.desc}</p>
            </motion.div>
            {i < workflows.length - 1 && (
              <ArrowRight className="w-5 h-5 text-white/20 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>

  </div>
);

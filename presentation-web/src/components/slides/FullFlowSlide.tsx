'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, FileText, Cpu, Code2, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    num: '1',
    title: 'Phân Tích',
    agent: 'Mary 📊',
    key: 'Brainstorm, Market Research, Project Brief',
    color: 'bg-orange-500',
    required: false,
  },
  {
    num: '2',
    title: 'Lập Kế Hoạch',
    agent: 'John 📋',
    key: 'Tạo & Validate PRD, UX Spec',
    color: 'bg-blue-500',
    required: true,
  },
  {
    num: '3',
    title: 'Thiết Kế',
    agent: 'Winston 🏗️',
    key: 'Architecture, Epics & Stories, Readiness Check',
    color: 'bg-indigo-500',
    required: true,
  },
  {
    num: '4',
    title: 'Triển Khai',
    agent: 'Bob 🏃 + Amelia 💻',
    key: 'Sprint → Story → Dev → Code Review',
    color: 'bg-emerald-500',
    required: true,
  },
];

export const FullFlowSlide = () => (
  <div className="w-full max-w-5xl space-y-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <BarChart2 className="w-4 h-4 text-blue-400" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Full Flow</span>
      </div>
      <h2 className="text-5xl font-black text-white tracking-tighter">
        <span className="text-blue-400 italic mr-3">Standard </span>    Flow
      </h2>
      <p className="text-base text-white/40 font-mono">1-Phân Tích → 2-Lập Kế Hoạch → 3-Thiết Kế → 4-Triển Khai</p>
    </motion.div>

    <div className="grid grid-cols-4 gap-4">
      {phases.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.1 }}
          className="relative p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3"
        >
          <div className={`w-10 h-10 rounded-full ${p.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
            {p.num}
          </div>
          <h3 className="font-bold text-white text-sm">{p.title}</h3>
          <p className="text-xs text-white/40 font-mono">{p.agent}</p>
          <p className="text-xs text-white/60 leading-relaxed">{p.key}</p>
          <div className={`text-xs px-2 py-0.5 rounded-full font-mono w-fit ${p.required ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/5 text-white/30'}`}>
            {p.required ? 'Bắt buộc' : 'Tuỳ chọn'}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="flex flex-col md:flex-row gap-4"
    >
      <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded-2xl">
        <p className="text-xs text-white/50 font-semibold mb-2">Dùng Full Flow khi:</p>
        <ul className="space-y-1.5">
          {[
            'Phát triển sản phẩm/tính năng mới có độ phức tạp cao.',
            'Cần sự phối hợp của nhiều vai trò để phân tích, lên solution và triển khai.',
          ].map((t, i) => (
            <li key={i} className="flex gap-2 items-start text-xs text-white/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center px-6 py-4 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
        <p className="text-xs italic text-orange-300/80 text-center max-w-xs">
          Full Flow có 18+ bước. Với công việc nhỏ hơn, có con đường nhanh hơn.
        </p>
      </div>
    </motion.div>
  </div>
);

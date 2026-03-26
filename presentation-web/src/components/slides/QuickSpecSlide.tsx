'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, MessageSquare, Code2, CheckSquare } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Hiểu yêu cầu',
    desc: 'Hiểu yêu cầu, quét nhanh codebase, và init file tech-spec-wip.md.',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  },
  {
    num: '02',
    icon: <FileSearch className="w-5 h-5" />,
    title: 'Phân tích sâu hơn',
    desc: 'Khảo sát sâu code để xác định chính xác các file, patterns, và ràng buộc kỹ thuật.',
    color: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  },
  {
    num: '03',
    icon: <Code2 className="w-5 h-5" />,
    title: 'Tạo Spec',
    desc: 'Danh sách task có thứ tự. Acceptance Criteria dạng Given/When/Then. Dependencies & test strategy.',
    color: 'text-secondary bg-secondary/10 border-secondary/20',
  },
  {
    num: '04',
    icon: <CheckSquare className="w-5 h-5" />,
    title: 'Review & Hoàn Thiện',
    desc: 'Review, chỉnh sửa, và hoàn thiện spec trước khi bàn giao cho dev.',
    color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
];

const readyStandard = [
  { label: 'Actionable', desc: 'Mỗi task có file path cụ thể và hành động rõ ràng' },
  { label: 'Logical', desc: 'Task sắp xếp theo dependency — thấp nhất trước' },
  { label: 'Testable', desc: 'Tất cả AC dùng Given/When/Then bao phủ happy path + edge cases' },
  { label: 'Complete', desc: 'Không có placeholder hay TBD — tất cả findings đã inline' },
  { label: 'Self-Contained', desc: 'Agent mới có thể triển khai mà không cần đọc lịch sử chat' },
];

export const QuickSpecSlide = () => (
  <div className="w-full max-w-6xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-2"
    >
      <h2 className="text-5xl font-black text-white tracking-tighter">
        Quick <span className="text-secondary italic">Spec</span>
      </h2>
      <p className="text-base text-white/40">
        <code className="font-mono text-secondary/80">/bmad-bmm-quick-spec</code>
        {' '}→{' '}
        <code className="font-mono text-white/50">tech-spec-{'{slug}'}.md</code>
      </p>
    </motion.div>

    <div className="grid grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.1 }}
          className={`p-5 rounded-2xl border ${s.color} space-y-3`}
        >
          <div className="flex items-center gap-2">
            {s.icon}
            <span className="font-mono text-xs opacity-60">{s.num}</span>
          </div>
          <h3 className="font-bold text-white">{s.title}</h3>
          <p className="text-xs text-white/55 leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>


  </div>
);

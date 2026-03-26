'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, RefreshCw, Archive, HelpCircle, Terminal } from 'lucide-react';

const tips = [
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Chạy mỗi bước trong Context Window riêng',
    desc: 'BMAD giao tiếp qua file, vì vậy chúng ta nên chạy mỗi step trong một session mới để tránh over context.',
    color: 'border-secondary/20 bg-secondary/5',
    iconColor: 'text-secondary',
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Tạo Project Context trước tiên',
    desc: 'Trước khi bắt đầu bất kỳ Quick Flow nào, chạy /bmad-bmm-generate-project-context. Chỉ mất thời gian 1 lần nhưng kết quả thực thi những lần sau đó sẽ rất consistent về conversion và chất lượng.',
    color: 'border-blue-400/20 bg-blue-400/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: <Archive className="w-6 h-6" />,
    title: 'Spec Maintenance: Archive sau mỗi Sprint',
    desc: 'BMAD không tự động archive các spec đã hoàn thành, nó luôn lưu các file trong thư mục _bmad-output/implementation-artifacts. Bạn phải tự di chuyển hoặc archive file sau khi hoàn thành sprint. Hãy tạo 1 skill/command đơn giản để thực hiện việc này.',
    color: 'border-indigo-400/20 bg-indigo-400/5',
    iconColor: 'text-indigo-400',
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: 'Dùng /bmad-help khi bị mắc kẹt',
    desc: '/bmad-help là agent hiểu rõ nhất về cách vận hành của BMAD. Bạn có thể đưa ra vấn đề và yêu cầu nó gợi ý agent/workflow phù hợp.',
    color: 'border-accent/20 bg-accent/5',
    iconColor: 'text-accent',
  },
];

const commands = [
  { task: 'Trợ giúp', cmd: '/bmad-help' },
  { task: 'Tạo project context', cmd: '/bmad-bmm-generate-project-context' },
  { task: 'Bắt đầu Quick Flow (QS + QD)', cmd: '/bmad-agent-bmm-quick-flow-solo-dev' },
  { task: 'Quick Spec', cmd: '/bmad-bmm-quick-spec' },
  { task: 'Quick Dev', cmd: '/bmad-bmm-quick-dev' },
  { task: 'Code review', cmd: '/bmad-bmm-code-review' },
];

export const QuickFlowTipsSlide = () => (
  <div className="w-full max-w-6xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-2"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <Lightbulb className="w-4 h-4 text-secondary" />
        <span className="text-xs font-sans tracking-[0.2em] text-white/50">TẤT HUÂN — NOTES & TIPS</span>
      </div>
      <h2 className="text-5xl font-black text-white tracking-tighter">
        Bài học từ <span className="text-secondary italic">thực tiễn</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-2 gap-4">
      {tips.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.1 }}
          className={`p-5 rounded-2xl border ${t.color} space-y-2`}
        >
          <div className="flex items-center gap-3">
            <div className={t.iconColor}>{t.icon}</div>
            <h3 className="font-bold text-white text-sm leading-tight">{t.title}</h3>
          </div>
          <p className="text-xs text-white/55 leading-relaxed">{t.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="p-5 bg-white/5 border border-white/10 rounded-2xl italic text-gray-500"
    >
      Xem nội dung gốc về Quick Flow trong file docs/quick-flow.md
    </motion.div>
  </div>
);

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Lightbulb, Search, Zap, CheckCircle } from 'lucide-react';

export const QuickSpecSlide = () => (
  <div className="w-full max-w-6xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <FileText className="w-4 h-4 text-blue-400" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Quick Spec</span>
      </div>
      <h2 className="text-4xl font-black text-white tracking-tighter">
        From Feature Idea to <span className="text-blue-400 italic">Implementation-Ready Spec</span>
      </h2>
      <code className="text-sm text-blue-400 font-mono">/bmad-bmm-quick-spec</code>
    </motion.div>

    <div className="grid grid-cols-4 gap-4">
      {[
        {
          icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
          step: 'Step 1',
          title: 'Understand',
          desc: 'Define requirement delta — what needs to change and why',
          points: [
            'Quick orient scan (<30s)',
            'Asks informed questions',
            'Creates tech-spec-wip.md',
          ],
          color: 'border-yellow-500/20 bg-yellow-500/5',
        },
        {
          icon: <Search className="w-8 h-8 text-purple-400" />,
          step: 'Step 2',
          title: 'Investigate',
          desc: 'Map technical constraints and anchor points in codebase',
          points: [
            'Deep-reads relevant files',
            'Identifies tech stack',
            'Confirms findings',
          ],
          color: 'border-purple-500/20 bg-purple-500/5',
        },
        {
          icon: <Zap className="w-8 h-8 text-orange-400" />,
          step: 'Step 3',
          title: 'Generate',
          desc: 'Produce implementation plan from technical mapping',
          points: [
            'Ordered task list',
            'Given/When/Then ACs',
            'Dependencies & risks',
          ],
          color: 'border-orange-500/20 bg-orange-500/5',
        },
        {
          icon: <CheckCircle className="w-8 h-8 text-green-400" />,
          step: 'Step 4',
          title: 'Review & Finalize',
          desc: 'Iterate until "Ready for Development" standard',
          points: [
            'Present full spec',
            'Edit/Question/Review',
            'Rename to final file',
          ],
          color: 'border-green-500/20 bg-green-500/5',
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className={`p-5 rounded-3xl border ${item.color} space-y-3`}
        >
          <div className="flex flex-col items-center text-center gap-2">
            {item.icon}
            <div>
              <p className="text-xs text-white/50 font-mono">{item.step}</p>
              <h3 className="text-lg font-black text-white">{item.title}</h3>
            </div>
          </div>
          <p className="text-xs text-white/70 text-center">{item.desc}</p>
          <div className="space-y-1">
            {item.points.map((point, j) => (
              <p key={j} className="text-xs text-white/50">• {point}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20"
    >
      <h3 className="text-lg font-bold text-white mb-3 text-center">"Ready for Development" Standard</h3>
      <div className="grid grid-cols-5 gap-4">
        {[
          { label: 'Actionable', desc: 'Every task has file path + action' },
          { label: 'Logical', desc: 'Tasks ordered by dependency' },
          { label: 'Testable', desc: 'All ACs use Given/When/Then' },
          { label: 'Complete', desc: 'No placeholders or TBD' },
          { label: 'Self-Contained', desc: 'Fresh agent can implement' },
        ].map((criterion, i) => (
          <div key={i} className="text-center">
            <p className="text-sm font-bold text-secondary">{criterion.label}</p>
            <p className="text-xs text-white/50 mt-1">{criterion.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

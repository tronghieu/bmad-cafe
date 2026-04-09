'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Search, ClipboardList, Wrench, Code } from 'lucide-react';

export const FullFlowOverviewSlide = () => (
  <div className="w-full max-w-6xl space-y-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <Workflow className="w-4 h-4 text-blue-400" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Full Flow</span>
      </div>
      <h2 className="text-5xl font-black text-white tracking-tighter">
        Four Phases, <span className="text-blue-400 italic">Specialist Agents</span>
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center"
    >
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 font-mono text-sm">
        <span className="text-white/60">1-Analysis</span>
        <span className="text-secondary">→</span>
        <span className="text-white/60">2-Planning</span>
        <span className="text-secondary">→</span>
        <span className="text-white/60">3-Solutioning</span>
        <span className="text-secondary">→</span>
        <span className="text-white/60">4-Implementation</span>
      </div>
    </motion.div>

    <div className="grid grid-cols-4 gap-4">
      {[
        {
          icon: <Search className="w-8 h-8 text-purple-400" />,
          phase: '1-Analysis',
          agent: 'Mary (📊 Analyst)',
          required: 'Optional',
          requiredColor: 'text-purple-400',
          workflows: ['Brainstorm', 'Market Research', 'Product Brief'],
          color: 'border-purple-500/20 bg-purple-500/5',
        },
        {
          icon: <ClipboardList className="w-8 h-8 text-blue-400" />,
          phase: '2-Planning',
          agent: 'John (📋 PM)',
          required: 'Required',
          requiredColor: 'text-blue-400',
          workflows: ['Create PRD', 'Validate PRD', 'Create UX'],
          color: 'border-blue-500/20 bg-blue-500/5',
        },
        {
          icon: <Wrench className="w-8 h-8 text-orange-400" />,
          phase: '3-Solutioning',
          agent: 'Winston (🏗️ Architect)',
          required: 'Required',
          requiredColor: 'text-orange-400',
          workflows: ['Architecture', 'Epics & Stories', 'Readiness Check'],
          color: 'border-orange-500/20 bg-orange-500/5',
        },
        {
          icon: <Code className="w-8 h-8 text-green-400" />,
          phase: '4-Implementation',
          agent: 'Bob (🏃 SM) + Amelia (💻 Dev)',
          required: 'Required',
          requiredColor: 'text-green-400',
          workflows: ['Sprint Planning', 'Dev Story', 'Code Review'],
          color: 'border-green-500/20 bg-green-500/5',
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className={`p-6 rounded-3xl border ${item.color} space-y-4`}
        >
          <div className="flex flex-col items-center text-center gap-2">
            {item.icon}
            <h3 className="text-lg font-black text-white">{item.phase}</h3>
            <span className={`text-xs font-mono ${item.requiredColor}`}>{item.required}</span>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-white/60 font-semibold">Agent:</p>
            <p className="text-xs text-white/80">{item.agent}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-white/60 font-semibold">Key Workflows:</p>
            {item.workflows.map((wf, j) => (
              <p key={j} className="text-xs text-white/70">• {wf}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
    >
      <p className="text-sm text-white/60 italic">
        The full flow has <span className="text-secondary font-bold">18+ steps</span>.
        For smaller work, there's a better path → <span className="text-secondary font-bold">Quick Flow</span>
      </p>
    </motion.div>
  </div>
);

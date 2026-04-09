'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitBranch, Play, TestTube, Shield, Wrench } from 'lucide-react';

export const QuickDevSlide = () => (
  <div className="w-full max-w-6xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <Code2 className="w-4 h-4 text-green-400" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Quick Dev</span>
      </div>
      <h2 className="text-4xl font-black text-white tracking-tighter">
        Autonomous Implementation from <span className="text-green-400 italic">Spec to Shipped Code</span>
      </h2>
      <code className="text-sm text-green-400 font-mono">/bmad-bmm-quick-dev</code>
    </motion.div>

    <div className="grid grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Two Execution Modes</h3>
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-4 h-4 text-blue-400" />
                <h4 className="text-sm font-bold text-white">Mode A: Tech-Spec</h4>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-mono">Recommended</span>
              </div>
              <p className="text-xs text-white/60">Provide tech-spec-{'{slug}'}.md</p>
              <p className="text-xs text-white/50 mt-1">→ Skips context, goes straight to execution</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-4 h-4 text-purple-400" />
                <h4 className="text-sm font-bold text-white">Mode B: Direct</h4>
              </div>
              <p className="text-xs text-white/60">Describe task in plain text</p>
              <p className="text-xs text-white/50 mt-1">→ Gathers context, builds plan, then executes</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
          <h3 className="text-xl font-bold text-white mb-4">Recommended Full Quick Flow</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">1</div>
              <span className="text-white/70">Fresh session: <code className="text-xs text-blue-400">/bmad-bmm-quick-spec</code></span>
            </div>
            <div className="ml-8 text-xs text-white/50">→ tech-spec-{'{slug}'}.md</div>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold">2</div>
              <span className="text-white/70">Fresh session: <code className="text-xs text-green-400">/bmad-bmm-quick-dev</code></span>
            </div>
            <div className="ml-8 text-xs text-white/50">→ Shipped code</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-bold text-white">The 6-Step Flow (Mode A)</h3>
        <div className="space-y-3">
          {[
            {
              step: 1,
              title: 'Mode Detection',
              icon: <GitBranch className="w-5 h-5 text-blue-400" />,
              desc: 'Detects tech-spec file',
            },
            {
              step: 3,
              title: 'Execute',
              icon: <Play className="w-5 h-5 text-green-400" />,
              desc: 'Autonomous implementation, no stops',
              highlight: true,
            },
            {
              step: 4,
              title: 'Self-Check',
              icon: <TestTube className="w-5 h-5 text-yellow-400" />,
              desc: 'Runs tests, fixes failures',
            },
            {
              step: 5,
              title: 'Adversarial Code Review',
              icon: <Shield className="w-5 h-5 text-red-400" />,
              desc: 'Builds diff, finds issues',
              highlight: true,
            },
            {
              step: 6,
              title: 'Resolve Findings',
              icon: <Wrench className="w-5 h-5 text-purple-400" />,
              desc: 'Walk through / Fix auto / Skip',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`p-4 rounded-xl border ${item.highlight ? 'bg-secondary/5 border-secondary/20' : 'bg-white/5 border-white/10'}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-white/60 mt-1">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

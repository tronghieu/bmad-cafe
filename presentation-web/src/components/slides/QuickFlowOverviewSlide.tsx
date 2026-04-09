'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, FileText, Code2, Shield } from 'lucide-react';

export const QuickFlowOverviewSlide = () => (
  <div className="w-full max-w-6xl space-y-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <Zap className="w-4 h-4 text-secondary" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Quick Flow</span>
      </div>
      <h2 className="text-5xl font-black text-white tracking-tighter">
        Quick <span className="text-secondary italic">Flow</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">When to Use Quick Flow</h3>
          <div className="space-y-2 text-sm text-white/70">
            <p>• Adding a feature to an <span className="text-secondary">established brownfield codebase</span></p>
            <p>• The "what" is already clear — you just need the "how"</p>
            <p>• <span className="text-secondary">Small, well-scoped change</span> (a few files, a few days)</p>
            <p>• Skip product planning and go straight to implementation</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
          <h3 className="text-xl font-bold text-white mb-4">What Quick Flow Compresses</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/60">Full Flow</span>
              <span className="text-sm text-white/80">18+ steps, 3+ agents</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/60">Quick Flow</span>
              <span className="text-sm text-secondary font-bold">4 steps, 1 agent</span>
            </div>
            <div className="h-px bg-white/10"></div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/60">Full Flow</span>
              <span className="text-sm text-white/80">Multiple files</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white/60">Quick Flow</span>
              <span className="text-sm text-secondary font-bold">1 file: tech-spec-{'{slug}'}.md</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Three Workflows</h3>
          <div className="space-y-4">
            {[
              {
                icon: <FileText className="w-6 h-6 text-blue-400" />,
                name: 'Quick Spec',
                cmd: '/bmad-bmm-quick-spec',
                desc: 'Feature idea → implementation-ready spec',
              },
              {
                icon: <Code2 className="w-6 h-6 text-green-400" />,
                name: 'Quick Dev',
                cmd: '/bmad-bmm-quick-dev',
                desc: 'Spec → shipped code with tests',
              },
              {
                icon: <Shield className="w-6 h-6 text-red-400" />,
                name: 'Adversarial Review',
                cmd: '/bmad-review-adversarial-general',
                desc: 'Cynical critique before finalizing',
              },
            ].map((wf, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                {wf.icon}
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">{wf.name}</h4>
                  <code className="text-xs text-white/50 font-mono">{wf.cmd}</code>
                  <p className="text-xs text-white/60 mt-1">{wf.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
          <p className="text-sm text-white/70">
            <span className="text-blue-400 font-bold">Quick Flow asks:</span><br />
            "What code needs to change, and exactly how?"
          </p>
          <p className="text-sm text-white/70 mt-3">
            <span className="text-blue-400 font-bold">Full Flow asks:</span><br />
            "What product should we build, for whom, and why?"
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

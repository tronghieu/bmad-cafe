'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileCheck, GitCompare, AlertCircle } from 'lucide-react';

export const ReviewWorkflowSlide = () => (
  <div className="w-full max-w-6xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <Shield className="w-4 h-4 text-red-400" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Adversarial Review</span>
      </div>
      <h2 className="text-4xl font-black text-white tracking-tighter">
        Adversarial Review <span className="text-red-400 italic"> General purpose</span>
      </h2>
      <code className="text-sm text-red-400 font-mono">/bmad-review-adversarial-general</code>
    </motion.div>

    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">When to Run It</h3>
          <div className="space-y-3">
            {[
              {
                icon: <FileCheck className="w-5 h-5 text-blue-400" />,
                stage: 'After Quick Spec',
                trigger: 'Step 4 review menu → [R]',
                what: 'The tech-spec-{slug}.md file',
              },
              {
                icon: <GitCompare className="w-5 h-5 text-green-400" />,
                stage: 'After Quick Dev',
                trigger: 'Step 5 (runs automatically)',
                what: 'Full git diff of all changes',
              },
              {
                icon: <AlertCircle className="w-5 h-5 text-purple-400" />,
                stage: 'Standalone',
                trigger: '/bmad-review-adversarial-general',
                what: 'Any spec, doc, or code diff',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                {item.icon}
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">{item.stage}</h4>
                  <p className="text-xs text-white/60 mt-1">Trigger: {item.trigger}</p>
                  <p className="text-xs text-white/50 mt-1">Reviews: {item.what}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >

        <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
          <h3 className="text-xl font-bold text-white mb-3">What It Does</h3>
          <div className="space-y-2 text-sm text-white/70">
            <p>• Reviews from adversarial (cynical, skeptical) perspective</p>
            <p>• Surfaces missing edge cases, ambiguous requirements</p>
            <p>• Identifies risky assumptions, broken logic</p>
            <p>• Orders findings: <span className="text-red-400 font-bold">Critical → High → Medium → Low</span></p>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
          <h3 className="text-xl font-bold text-white mb-3">Recommended Strategy</h3>
          <div className="space-y-2 text-sm text-white/70">
            <p>1. Run adversarial review <span className="text-secondary font-bold">on the spec</span> before Quick Dev</p>
            <p>1. Run adversarial review for the new code changes, new PR</p>
            <p>3. For validation, consider using a <span className="text-secondary font-bold">different high-quality LLM</span></p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

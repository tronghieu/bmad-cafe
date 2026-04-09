'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProjectContextSlide = () => (
  <div className="w-full max-w-5xl space-y-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <FileText className="w-4 h-4 text-secondary" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Do This Before Anything Else</span>
      </div>
      <h2 className="text-5xl font-black text-white tracking-tighter">
        <span className="text-secondary italic">Project Context</span>
      </h2>
      <p className="italic text-lg text-white/60">"Prepare onboarding documentation for your new team members"</p>
    </motion.div>

    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Without Project Context</h3>
            <p className="text-sm text-red-400">❌ Agents ask generic questions</p>
            <p className="text-sm text-red-400">❌ You're forcing the new member to do a new task without an onboarding process.</p>
            <p className="text-sm text-red-400">❌ Waste time on back-and-forth</p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
            <h3 className="text-xl font-bold text-white mb-3">With Project Context</h3>
            <p className="text-sm text-green-400">✓ Follow project conventions & patterns</p>
            <p className="text-sm text-green-400">✓ Understand the big picture</p>
            <p className="text-sm text-green-400">✓ Deliver closer results to our expectation</p>
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
          <h3 className="text-xl font-bold text-white mb-4">What It Contains</h3>
          <div className="space-y-2">
            {[
              'Critical implementation rules',
              'Code patterns and conventions',
              'Tech stack and architectural decisions',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span className="text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white mb-1">How to Generate</h4>
              <code className="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded">
                /bmad-bmm-generate-project-context
              </code>
              <p className="text-xs text-white/50 mt-2">Agent: Mary (📊 Business Analyst)</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, RefreshCw, FileText, Archive, HelpCircle, Terminal } from 'lucide-react';

export const NotesTipsSlide = () => (
  <div className="w-full max-w-6xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <Lightbulb className="w-4 h-4 text-yellow-400" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Lessons from the Field</span>
      </div>
      <h2 className="text-4xl font-black text-white tracking-tighter">
          Key <span className="text-yellow-400 italic">Takeaways</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-2 gap-6">
      {[
        {
          icon: <RefreshCw className="w-8 h-8 text-blue-400" />,
          title: 'Fresh Context Windows',
          desc: 'Run each step in a fresh context window',
          details: [
            'Quick Spec in session 1 → saves tech-spec-{slug}.md',
            'Quick Dev in session 2 → loads spec fresh',
            'Avoid context bloat and degraded agent quality',
          ],
          color: 'border-blue-500/20 bg-blue-500/5',
        },
        {
          icon: <FileText className="w-8 h-8 text-green-400" />,
          title: 'Generate Project Context First',
          desc: 'Before any Quick Flow work',
          details: [
            'Command: /bmad-bmm-generate-project-context',
            'Prevents wasted back-and-forth',
            'Agents know your conventions upfront',
          ],
          color: 'border-green-500/20 bg-green-500/5',
        },
        {
          icon: <Archive className="w-8 h-8 text-purple-400" />,
          title: 'Archive After Sprints',
          desc: 'BMAD does not auto-archive specs',
          details: [
            'Manually move completed specs',
            'Consider creating a skill for this',
            'Archive at sprint close',
          ],
          color: 'border-purple-500/20 bg-purple-500/5',
        },
        {
          icon: <HelpCircle className="w-8 h-8 text-orange-400" />,
          title: 'Use /bmad-help When Stuck',
          desc: 'Get contextual guidance anytime',
          details: [
            'Analyzes your current state',
            'Detects which phase you\'re in',
            'Recommends the right next step',
          ],
          color: 'border-orange-500/20 bg-orange-500/5',
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className={`p-6 rounded-3xl border ${item.color} space-y-4`}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <div>
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          </div>
          <div className="space-y-2">
            {item.details.map((detail, j) => (
              <p key={j} className="text-xs text-white/70">• {detail}</p>
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
      <div className="flex items-start gap-4">
        <Terminal className="w-6 h-6 text-secondary mt-1" />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-3">Quick Reference: Core Commands</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Get help', cmd: '/bmad-help' },
              { label: 'Generate project context', cmd: '/bmad-bmm-generate-project-context' },
              { label: 'Start Quick Flow (QS + QD)', cmd: '/bmad-agent-bmm-quick-flow-solo-dev' },
              { label: 'Quick Spec only', cmd: '/bmad-bmm-quick-spec' },
              { label: 'Quick Dev only', cmd: '/bmad-bmm-quick-dev' },
              { label: 'Code review', cmd: '/bmad-bmm-code-review' },
            ].map((item, i) => (
              <div key={i} className="text-sm">
                <span className="text-white/60">{item.label}</span>
                <code className="block text-xs text-secondary font-mono mt-1">{item.cmd}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

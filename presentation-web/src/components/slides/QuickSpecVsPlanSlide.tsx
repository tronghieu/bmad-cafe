'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, MessageSquare } from 'lucide-react';

export const QuickSpecVsPlanSlide = () => (
  <div className="w-full max-w-6xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <h2 className="text-4xl font-black text-white tracking-tighter">
        Quick Spec vs <span className="text-secondary italic">Claude Plan Mode</span>
      </h2>
      <p className="text-lg text-white/60">Two ways to plan — very different results</p>
    </motion.div>

    <div className="grid grid-cols-2 gap-8">
      {[
        {
          icon: <FileCheck className="w-10 h-10 text-blue-400" />,
          title: 'Quick Spec',
          subtitle: 'Persistent & Fresh-Agent Ready',
          color: 'border-blue-500/20 bg-blue-500/5',
          badgeColor: 'bg-blue-500/10 text-blue-400',
          features: [
            { label: 'Output', value: 'Persistent spec file saved to disk' },
            { label: 'Code investigation', value: 'Dedicated step that deep-reads files' },
            { label: 'Discovery process', value: 'Step-by-step with checkpoints' },
            { label: 'Fresh-agent ready', value: 'Self-contained spec file' },
            { label: 'Handoff', value: 'Clean handoff to Quick Dev' },
            { label: 'Adversarial review', value: 'Built-in [R] option' },
            { label: 'System prompt', value: 'Opened' },
          ],
        },
        {
          icon: <MessageSquare className="w-10 h-10 text-purple-400" />,
          title: 'Claude Plan (/plan)',
          subtitle: 'Ephemeral & Context-Bound',
          color: 'border-purple-500/20 bg-purple-500/5',
          badgeColor: 'bg-purple-500/10 text-purple-400',
          features: [
            { label: 'Output', value: 'Ephemeral — lives in conversation only' },
            { label: 'Code investigation', value: 'Ad-hoc — depends on what you ask' },
            { label: 'Discovery process', value: 'Single pass, can miss edge cases' },
            { label: 'Fresh-agent ready', value: 'Tied to current context window' },
            { label: 'Handoff', value: 'Cannot be handed off cleanly' },
            { label: 'Adversarial review', value: 'Not available' },
            { label: 'System prompt', value: 'Closed' },
          ],
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-3xl border ${item.color} space-y-4`}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <div>
              <h3 className="text-2xl font-black text-white">{item.title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${item.badgeColor} font-mono`}>
                {item.subtitle}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            {item.features.map((feature, j) => (
              <div key={j} className="text-sm">
                <span className="text-white/50 font-semibold">{feature.label}:</span>
                <p className="text-white/70 mt-0.5">{feature.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

  </div>
);

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Layers, Zap } from 'lucide-react';

export const WhatIsBmadSlide = () => (
  <div className="w-full max-w-6xl space-y-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <Workflow className="w-4 h-4 text-secondary" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Definition</span>
      </div>
      <h2 className="text-5xl font-black text-white tracking-tighter">
        What is <span className="text-secondary italic">BMAD</span>?
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center max-w-4xl mx-auto space-y-4"
    >
      <p className="text-lg text-white/70 leading-relaxed">
        A <span className="text-white font-semibold">structured AI-driven software development methodology</span> —
        a framework that orchestrates specialized <span className="text-secondary font-semibold">AI agents</span> through
        a <span className="text-secondary font-semibold">defined workflow</span> to take a product from idea to shipped code.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-white text-center">Two Primary Flows</h3>
      <div className="grid grid-cols-2 gap-6">
        {[
          {
            icon: <Layers className="w-8 h-8 text-blue-400" />,
            label: 'Full Flow',
            badge: 'New Products · Complex Features',
            badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
            desc: 'For new products, complex features, or when you need stakeholder alignment via a PRD + Architecture doc.',
            color: 'border-blue-500/20 bg-blue-500/5',
          },
          {
            icon: <Zap className="w-8 h-8 text-secondary" />,
            label: 'Quick Flow',
            badge: 'Small/Medium Changes',
            badgeColor: 'bg-secondary/10 text-secondary border-secondary/20',
            desc: 'For small/medium changes, isolated features, brownfield additions where the full ceremony is overkill.',
            color: 'border-secondary/20 bg-secondary/5',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className={`p-6 rounded-3xl border ${item.color} space-y-4`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <div className="flex-1">
                <h4 className="text-xl font-black text-white">{item.label}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${item.badgeColor} font-mono inline-block mt-1`}>
                  {item.badge}
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

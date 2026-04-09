'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Shield, Brain, Package, RefreshCw, Zap, BookOpen } from 'lucide-react';

export const WhyBmadSlide = () => (
  <div className="w-full max-w-6xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <h2 className="text-4xl font-black text-white tracking-tighter">
        Why <span className="text-secondary italic">BMAD</span>?
      </h2>
      <p className="text-lg text-white/60">The difference between BMAD and pure prompting</p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
         {
          icon: <Package className="w-6 h-6" />,
          title: 'Open source',
          desc: 'vs Closed system prompt',
          color: 'text-pink-400',
          bgColor: 'bg-pink-500/10',
          borderColor: 'border-pink-500/20',
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: 'Structured Workflow',
          desc: 'vs Ad-hoc Prompting',
          color: 'text-blue-400',
          bgColor: 'bg-blue-500/10',
          borderColor: 'border-blue-500/20',
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'Specialized Agents',
          desc: 'vs Generic AI',
          color: 'text-purple-400',
          bgColor: 'bg-purple-500/10',
          borderColor: 'border-purple-500/20',
        },
        {
          icon: <Brain className="w-6 h-6" />,
          title: 'Context management',
          desc: 'vs Single CLAUDE.md file',
          color: 'text-orange-400',
          bgColor: 'bg-orange-500/10',
          borderColor: 'border-orange-500/20',
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + i * 0.05 }}
          className={`p-4 rounded-2xl border ${item.borderColor} ${item.bgColor} space-y-2`}
        >
          <div className={item.color}>{item.icon}</div>
          <h4 className="font-bold text-white text-sm">{item.title}</h4>
          <p className="text-xs text-white/50">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center max-w-3xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10"
    >
      <p className="text-lg text-white/80 italic">
        <span className="text-secondary font-bold">Pure Prompting</span> = Asking questions individually
      </p>
      <p className="text-lg text-white/80 italic mt-2">
        <span className="text-secondary font-bold">BMAD</span> = Having a team of <strong>specialists</strong> guide you through <strong>workflows</strong>
      </p>
    </motion.div>
  </div>
);

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Eye, CodeXml } from 'lucide-react';

export const ChallengesSlide = () => (
  <div className="w-full max-w-6xl space-y-8">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
        <AlertTriangle className="w-4 h-4 text-orange-400" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Real-World Obstacles</span>
      </div>
      <h2 className="text-4xl font-black text-white tracking-tighter">
        <span className="text-orange-400 italic">Challenges</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
      {[
        {
          icon: <Eye className="w-10 h-10 text-red-400" />,
          title: 'Code Review Workload',
          desc: 'AI generates code fast — humans still need to review every line',
          details: [
            'Higher velocity means more PRs to review',
            'Review fatigue is real',
            'Quality gates are non-negotiable',
          ],
          color: 'border-red-500/20 bg-red-500/5',
        },
        {
          icon: <DollarSign className="w-10 h-10 text-yellow-400" />,
          title: 'Cost Control & Limitations',
          desc: 'Token usage adds up quickly at scale',
          details: [
            'Large context windows = higher costs',
            'Rate limits can block workflows',
            'Budget planning becomes critical',
          ],
          color: 'border-yellow-500/20 bg-yellow-500/5',
        },
        {
          icon: <CodeXml className="w-10 h-10 text-purple-400" />,
          title: 'Hallucinations vs Dynamic Typing',
          desc: 'AI confidence doesn\'t guarantee correctness',
          details: [
            'Dynamic languages hide type errors until runtime',
            'AI may invent APIs or assume wrong types',
            'Strong typing + linters help catch issues early',
          ],
          color: 'border-purple-500/20 bg-purple-500/5',
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className={`p-6 rounded-3xl border ${item.color} space-y-4`}
        >
          <div className="flex items-center gap-4">
            {item.icon}
            <div className="flex-1">
              <h3 className="text-2xl font-black text-white">{item.title}</h3>
              <p className="text-sm text-white/70 mt-1">{item.desc}</p>
            </div>
          </div>
          <div className="space-y-2 pl-14">
            {item.details.map((detail, j) => (
              <p key={j} className="text-sm text-white/60">• {detail}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export const HeroSlide = () => (
  <div className="text-center space-y-8 max-w-4xl">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-block p-4 bg-secondary/10 rounded-2xl border border-secondary/20 mb-4"
    >
      <Cpu className="w-16 h-16 text-secondary mx-auto mb-4 animate-pulse" />
      <span className="text-secondary font-mono tracking-widest text-lg uppercase">Beyond Vibe Coding</span>
    </motion.div>
    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-tight">
      BMAD Method
    </h1>
    <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
      Kỷ nguyên mới của phát triển phần mềm bằng AI Agentic Engineering
    </p>
    <div className="pt-8 flex justify-center gap-6">
      <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-mono text-white/50">
        AI-DRIVEN AGILE
      </div>
      <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-mono text-white/50">
        VERSION CONTROLLED
      </div>
    </div>
  </div>
);

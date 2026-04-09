'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Terminal, Globe } from 'lucide-react';

export const ThanksSlide = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-12 w-full max-w-4xl px-6 relative">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative z-10"
    >
      <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
        BMAD
      </h2>
      <p className="mt-6 text-2xl text-foreground/60 font-light max-w-2xl mx-auto leading-relaxed italic">
        "Ship fast, learn faster, but never compromise on quality."
      </p>
    </motion.div>

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex flex-wrap items-center justify-center gap-6 mt-8 relative z-10"
    >
      <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
        <Globe className="w-5 h-5 text-white/70" />
        <span className="font-mono text-sm text-white/80">http://bmad-method.org/</span>
      </div>
      <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
        <Terminal className="w-5 h-5 text-secondary" />
        <span className="font-mono text-sm text-secondary">BMAD Method V6</span>
      </div>
    </motion.div>

    {/* Background elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-[0.05] pointer-events-none z-0 bg-secondary"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none z-0 bg-blue-500"></div>
    
  </div>
);

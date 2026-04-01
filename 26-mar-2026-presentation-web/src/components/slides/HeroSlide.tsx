'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import Image from 'next/image';

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
      BMAD Cafe
    </h1>
    <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
      Giới thiệu về BMAD METHOD và kinh nghiệm áp dụng
    </p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex justify-center flex-wrap gap-12 pt-4"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-accent/30 ring-4 ring-accent/10">
          <Image
            src="/tathuan.jpg"
            alt="Tất Huân"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <span className="text-white/80 font-medium text-sm">Tất Huân</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-secondary/30 ring-4 ring-secondary/10">
          <Image
            src="/luuhieu.png"
            alt="Lưu Trọng Hiếu"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <span className="text-white/80 font-medium text-sm">Lưu Trọng Hiếu</span>
      </div>
    </motion.div>

    <div className="pt-4 flex justify-center flex-wrap gap-4">
      <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-mono text-white/50 uppercase tracking-wider">
        AI Agent Agile Teams
      </div>
      <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-mono text-white/50 uppercase tracking-wider">
        Context Engineering Framework
      </div>
    </div>
  </div>
);

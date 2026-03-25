'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

export const VibeCodingSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Vượt Qua Giới Hạn Của <span className="text-accent">"Vibe Coding"</span>
      </h2>
      <div className="p-8 bg-accent/5 border border-accent/20 rounded-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
          <Terminal className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-accent mb-4 italic">Vibe Coding</h3>
        <p className="text-foreground/80 leading-relaxed">
          Lộ trình chuyển đổi từ Prompting tự do sang Kỹ nghệ AI có cấu trúc. Giới thiệu BMAD Method: Kỷ nguyên mới của phát triển phần mềm bằng AI.
        </p>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="relative w-full h-80 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="z-10 text-center space-y-4">
          <div className="text-7xl">🌀</div>
          <div className="font-mono text-accent/50">Prompting tự do</div>
        </div>
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" 
        />
      </div>
    </div>
  </div>
);

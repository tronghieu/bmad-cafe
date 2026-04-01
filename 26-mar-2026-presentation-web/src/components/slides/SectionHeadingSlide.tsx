'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Share2 } from 'lucide-react';

interface SectionHeadingSlideProps {
  number: string;
  title: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const SectionHeadingSlide = ({ 
  number, 
  title, 
  subtitle, 
  variant = 'secondary' 
}: SectionHeadingSlideProps) => {
  const icon = variant === 'accent' ? <Share2 className="w-12 h-12" /> : <Cpu className="w-12 h-12" />;
  const colorClass = variant === 'secondary' ? 'text-secondary bg-secondary/10' : 'text-accent bg-accent/10';
  const borderColorClass = variant === 'secondary' ? 'border-secondary/20' : 'border-accent/20';

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 w-full max-w-4xl px-6 relative">
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className={`p-6 rounded-3xl border ${borderColorClass} ${colorClass} mb-4 relative z-10`}
      >
        {icon}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <div className="text-xl md:text-2xl font-mono text-white/40 tracking-[0.5em] uppercase">
          Phần <span className={variant === 'secondary' ? 'text-secondary' : 'text-accent'}>{number}</span>
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed italic">
            "{subtitle}"
          </p>
        )}
      </motion.div>

      {/* Decorative elements */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none z-0 ${variant === 'secondary' ? 'bg-secondary' : 'bg-accent'}`}></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent bottom-0"
      ></motion.div>
    </div>
  );
};

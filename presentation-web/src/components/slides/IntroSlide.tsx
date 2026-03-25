'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Quote, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const IntroSlide = () => {
  const experiences = [
    'Ex-CPO Sabomall',
    'Ex-CTO Agilead Global & CEO Agilearn',
    'Ex-CPO Velacorp',
    'Ex-CTO Alitech',
    'PM VCCorp',
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-5xl px-4 py-4">
      {/* Left Column: Image with animated backdrop */}
      <motion.div 
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-4 flex justify-center lg:justify-end"
      >
        <div className="relative group">
          {/* Animated Glow Backdrop */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-secondary/50 via-accent/30 to-secondary/50 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative aspect-[3/4] w-56 md:w-72 overflow-hidden rounded-3xl border border-white/10 ring-1 ring-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <Image
              src="/luuhieu.png"
              alt="Lưu Trọng Hiếu"
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          {/* Floaters for aesthetics */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-10 h-10 bg-secondary/20 backdrop-blur-xl border border-secondary/30 rounded-2xl flex items-center justify-center z-20"
          >
            <CheckCircle2 className="w-5 h-5 text-secondary" />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Column: Content */}
      <div className="lg:col-span-8 flex flex-col space-y-6">
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-secondary font-mono tracking-widest text-xs uppercase"
          >
            <div className="h-px w-6 bg-secondary/30"></div>
            <User className="w-3.5 h-3.5" />
            <span>Profile Summary</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-3">
              Lưu Trọng Hiếu
            </h2>
            <div className="inline-flex items-center px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <span className="text-lg md:text-xl text-secondary font-semibold font-mono">
                CIO @ Vtech
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 text-white/30 font-mono text-[10px] uppercase tracking-[0.2em]">
            <Briefcase className="w-3 h-3" />
            <span>Professional Career</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                className="group flex items-center gap-3 px-4 py-3 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-sm rounded-xl border border-white/5 hover:border-secondary/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground/80 font-light text-base transition-colors group-hover:text-white">{exp}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative mt-4 pt-6 border-t border-white/5 group"
        >
          <Quote className="absolute top-1 -left-3 w-10 h-10 text-secondary/10 group-hover:text-secondary/20 transition-colors" />
          <p className="text-xl md:text-2xl text-white/90 font-light italic leading-relaxed pl-4 tracking-tight">
            "Chỉ là một người làm sản phẩm công nghệ"
          </p>
        </motion.div>
      </div>
    </div>
  );
};

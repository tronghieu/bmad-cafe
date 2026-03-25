'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Quote, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export const SpeakerSlide = () => {
  const experiences = [
    '10+ years of experience in software development',
    'Experienced in Affiliate, Marketing, Advertising, and Fintech domains',
    'Founder of Pushtimize – Web Push Notifications network',
    'Founder of VnTraffic – Smart traffic signal navigation',
    'Founder of Thongtincuuho.org – Social rescue platform',
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
          <div className="absolute -inset-2 bg-gradient-to-tr from-accent/50 via-secondary/30 to-accent/50 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative aspect-[3/4] w-56 md:w-72 overflow-hidden rounded-3xl border border-white/10 ring-1 ring-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <Image
              src="/tathuan.jpg"
              alt="Tất Huân"
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
            className="absolute -top-4 -right-4 w-10 h-10 bg-accent/20 backdrop-blur-xl border border-accent/30 rounded-2xl flex items-center justify-center z-20"
          >
            <CheckCircle2 className="w-5 h-5 text-accent" />
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
            className="flex items-center gap-3 text-accent font-mono tracking-widest text-xs uppercase"
          >
            <div className="h-px w-6 bg-accent/30"></div>
            <User className="w-3.5 h-3.5" />
            <span>Speaker Profile</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-3">
              Tất Huân
            </h2>
            <div className="inline-flex flex-col gap-1">
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit">
                <span className="text-lg md:text-xl text-accent font-semibold font-mono">
                  Senior Dev @ Money Forward
                </span>
              </div>
              <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit">
                <span className="text-lg md:text-xl text-accent font-semibold font-mono">
                  CTO @ PIGGI
                </span>
              </div>
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
            <span>Core Expertise & Ventures</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                className="group flex items-center gap-3 px-4 py-3 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-sm rounded-xl border border-white/5 hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(245,158,11,0.5)] group-hover:scale-125 transition-transform"></div>
                <span className="text-foreground/80 font-light text-base md:text-lg transition-colors group-hover:text-white leading-tight">
                  {exp}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

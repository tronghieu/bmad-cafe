'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const FullFlowDiagramSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <h2 className="text-4xl font-black text-white tracking-tighter mb-2">
        Full Flow <span className="text-secondary italic">Workflow</span>
      </h2>
      <p className="text-sm text-white/60">Complete process from analysis to implementation</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="relative w-full max-w-4xl h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-white/5"
    >
      <Image
        src="/full-flow.png"
        alt="Full Flow Workflow Diagram"
        fill
        className="object-contain p-6"
        priority
      />
    </motion.div>
  </div>
);

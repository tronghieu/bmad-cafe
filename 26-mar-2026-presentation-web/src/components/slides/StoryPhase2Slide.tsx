'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Fingerprint, RefreshCcw, Activity } from 'lucide-react';

export const StoryPhase2Slide = () => {
  const particleValues = useMemo(() =>
    [0, 1, 2].map(() => ({
      opacity: 0.5 + Math.random() * 0.5,
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
    })), []);

  return (
  <div className="w-full max-w-5xl flex flex-col md:flex-row-reverse gap-12 items-center px-6">
    <div className="flex-1 space-y-8">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-mono text-sm"
      >
        <AlertTriangle className="w-4 h-4" />
        <span>Điểm Xoay Chuyển</span>
      </motion.div>
      
      <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
        Khi Nghiệp Vụ <span className="text-accent underline decoration-accent/40 decoration-4 underline-offset-8">Phình To</span>
      </h2>
      
      <div className="space-y-6 text-xl text-foreground/70 font-light leading-relaxed">
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex gap-4">
          <Fingerprint className="w-6 h-6 text-accent shrink-0 mt-1" />
          <p><strong className="text-white font-medium">Bất lực trong kiểm soát ngữ cảnh:</strong> AI không tự đóng khu được context. Nó có thể phá hỏng cả những module đã chạy ổn trước đó, dù đã nỗ lực cài đặt các &quot;rule&quot; rất chặt trong Cursor.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex gap-4">
          <RefreshCcw className="w-6 h-6 text-accent shrink-0 mt-1" />
          <p><strong className="text-white font-medium">Công sức Control &gt; Tự Code:</strong> Nỗ lực điều hướng, giải thích và kiểm soát AI thực thi đôi khi còn tốn nhiều công sức hơn cả việc tự lập trình.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex gap-4">
          <Activity className="w-6 h-6 text-accent shrink-0 mt-1" />
          <p><strong className="text-white font-medium">Tỷ lệ nghịch lũy tiến:</strong> Dự án càng phình to, AI càng không nắm vững trọn vẹn bức tranh nghiệp vụ, dẫn đến hiệu suất giảm sút trầm trọng.</p>
        </motion.div>
      </div>
    </div>

    <div className="flex-1 relative aspect-square w-full max-w-sm">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 rounded-full blur-[120px]"></div>
      
      {/* Visualizing chaos and context loss */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-4">
        {particleValues.map((vals, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ 
              opacity: vals.opacity, 
              scale: 1, 
              x: vals.x,
              y: vals.y
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: i * 0.5 
            }}
            className="w-full bg-white/5 border border-accent/20 p-4 rounded-xl backdrop-blur-md flex items-center justify-between"
          >
            <div className="h-2 bg-white/10 rounded w-1/2"></div>
            <div className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]' : 'bg-white/20'}`}></div>
          </motion.div>
        ))}
        <div className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-3xl z-[-1]"></div>
      </div>
    </div>
  </div>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Quote } from 'lucide-react';

export const StoryPhase1Slide = () => (
  <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 items-center px-6">
    <div className="flex-1 space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-mono text-sm"
      >
        <Rocket className="w-4 h-4" />
        <span>Tháng 04/2025</span>
      </motion.div>
      
      <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
        Khởi đầu đầy <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Tốc Độ</span>
      </h2>
      
      <div className="space-y-6 text-xl text-foreground/70 font-light leading-relaxed">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <strong className="text-white font-medium">Niềm tin mãnh liệt:</strong> Những dự án nhỏ ban đầu chứng minh năng lực thực sự của AI trong việc tạo ra mã nguồn chất lượng với tốc độ phi thường.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <strong className="text-white font-medium">Tư duy Product Maker:</strong> Mong muốn "ship" sản phẩm nhanh nhất có thể để thử nghiệm ý tưởng liên tục trên thị trường.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <strong className="text-white font-medium">Vibe Coding:</strong> Bắt đầu áp dụng sâu rộng phương pháp này cùng với Cursor. Mọi thứ trong giai đoạn đầu diễn ra cực kỳ thuận lợi và mượt mà.
        </motion.p>
      </div>
    </div>

    <div className="flex-1 relative aspect-square w-full max-w-sm">
      <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] flex flex-col items-center justify-center p-8 backdrop-blur-xl"
      >
        <Target className="w-32 h-32 text-secondary mb-8" />
        <Quote className="w-8 h-8 text-white/20 absolute top-8 left-8" />
        <p className="text-center text-2xl font-bold text-white italic">
          "Ship Fast,<br/>Learn Faster"
        </p>
      </motion.div>
    </div>
  </div>
);

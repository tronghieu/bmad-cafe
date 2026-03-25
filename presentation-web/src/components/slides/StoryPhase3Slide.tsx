'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Blocks, Lightbulb, Combine } from 'lucide-react';

export const StoryPhase3Slide = () => (
  <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 items-center px-6">
    <div className="flex-1 space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-mono text-sm"
      >
        <Lightbulb className="w-4 h-4" />
        <span>Hành Trình Chuyển Đổi</span>
      </motion.div>
      
      <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
        Tái Định Hình <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Tư Duy</span>
      </h2>
      
      <div className="space-y-6 text-xl text-foreground/70 font-light leading-relaxed">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <strong className="text-white font-medium flex items-center gap-2 mb-2"><FolderGit2 className="w-5 h-5 text-secondary" /> Context Engineering:</strong> Giải pháp nằm ở cách tổ chức tài liệu và ngữ cảnh một cách có cấu trúc, không phải ở sức mạnh thô của AI.
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <strong className="text-white font-medium flex items-center gap-2 mb-2"><Blocks className="w-5 h-5 text-secondary" /> Lựa chọn BMAD vì chữ "Agile":</strong> Phương pháp Agile đã được chứng minh hiệu quả trong việc tạo đột phá cho các tổ chức công nghệ trong quá khứ.
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <strong className="text-white font-medium flex items-center gap-2 mb-2"><Combine className="w-5 h-5 text-secondary" /> Tư duy Role Playing:</strong> BMAD mô phỏng cấu trúc của một tổ chức con người, giúp biến những dòng lệnh khô khan thành các Agentic Roles phối hợp nhịp nhàng.
        </motion.div>
      </div>
    </div>

    <div className="flex-1 relative aspect-square w-full max-w-sm">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/20 rounded-full blur-[120px]"></div>
      
      {/* Visualizing connection and puzzle */}
      <motion.div 
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
        className="relative z-10 w-full h-full flex items-center justify-center p-8 backdrop-blur-xl border border-secondary/30 rounded-[3rem] bg-secondary/10"
      >
        <div className="flex items-center justify-center gap-2">
           <div className="p-4 bg-white border-2 border-secondary/50 rounded-lg transform -rotate-6 shadow-xl text-black font-black text-2xl">AGILE</div>
           <div className="w-8 h-1 bg-secondary rounded-full"></div>
           <div className="p-4 bg-primary text-white border-2 border-secondary/50 rounded-lg transform rotate-6 shadow-xl font-mono text-2xl font-bold">AI</div>
        </div>
      </motion.div>
    </div>
  </div>
);

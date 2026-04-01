'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Scissors } from 'lucide-react';

export const ShardingSlide = () => (
  <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 items-center">
    <div className="flex-1 relative">
      <div className="p-8 bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <FileCode className="text-foreground/40" />
            <span className="text-sm font-mono text-foreground/40">PRD (100+ trang)</span>
          </div>
          <motion.div 
            animate={{ y: [0, 200, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-secondary"
          >
            <Scissors className="w-8 h-8" />
          </motion.div>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ x: 0 }}
              animate={{ x: [0, 100, 0] }}
              transition={{ delay: i * 0.5, duration: 2, repeat: Infinity }}
              className="p-3 bg-secondary/10 border border-secondary/30 rounded-lg text-xs font-mono text-secondary"
            >
              Atomic Story File {i}.md
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="flex-1 space-y-8">
      <h2 className="text-4xl font-bold text-white">Vũ Khí Bí Mật: Kỹ Thuật Băm Nhỏ Ngữ Cảnh</h2>
      <div className="space-y-6">
        <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
          <h4 className="font-bold text-red-400 mb-2">Vấn đề</h4>
          <p className="text-sm text-foreground/60">Các mô hình LLM sẽ bị "quá tải ngữ cảnh" và ảo giác nếu phải đọc toàn bộ tài liệu dự án lớn cùng lúc.</p>
        </div>
        <div className="p-6 bg-secondary/5 border border-secondary/20 rounded-2xl">
          <h4 className="font-bold text-secondary mb-2">Giải pháp BMAD</h4>
          <p className="text-sm text-foreground/60">Lệnh `shard` tự động cắt nhỏ các tài liệu PRD khổng lồ thành các Tệp tính năng độc lập (Atomic Story Files).</p>
        </div>
        <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
          <h4 className="font-bold text-blue-400 mb-2">Kết quả</h4>
          <p className="text-sm text-foreground/60">Dev Agent chỉ nhìn thấy chính xác những gì nó cần cho nhiệm vụ hiện tại. Không dư thừa, không ảo giác.</p>
        </div>
      </div>
    </div>
  </div>
);

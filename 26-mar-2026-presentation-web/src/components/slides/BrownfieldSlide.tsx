'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';

export const BrownfieldSlide = () => (
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="relative p-12 bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="aspect-square border border-white/20" />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative">
          <Search className="w-24 h-24 text-secondary animate-pulse" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl" 
          />
        </div>
        <div className="px-6 py-3 bg-card border border-border rounded-xl font-mono text-xs">
          architectural mapping scanner
        </div>
        <ArrowRight className="w-8 h-8 text-foreground/20" />
        <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-xl font-mono text-secondary font-bold">
          project-context.md
        </div>
      </div>
    </div>
    
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white leading-tight">
        Áp Dụng BMAD Cho Dự Án Đã Có (Brownfield)
      </h2>
      <p className="text-lg text-foreground/60">BMAD không chỉ dành cho các dự án xây mới từ đầu.</p>
      
      <ul className="space-y-4">
        {[
          "Sử dụng lệnh `document-project`.",
          "AI tự động quét toàn bộ mã nguồn cũ, phân tích nợ kỹ thuật và kiến trúc hiện tại.",
          "Xuất ra tệp `project-context.md` chứa định dạng của hệ thống.",
          "Các tác nhân AI sẽ tuân thủ nghiêm ngặt các quy ước viết code (conventions) có sẵn."
        ].map((text, i) => (
          <li key={i} className="flex gap-4 items-start text-foreground/80">
            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
            <span className="text-sm">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

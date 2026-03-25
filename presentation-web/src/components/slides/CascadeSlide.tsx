'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileCode, Cpu, Code2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CascadeSlide = () => (
  <div className="w-full max-w-6xl space-y-16">
    <div className="text-center space-y-4">
      <h2 className="text-4xl font-bold text-white">Dòng Chảy Ngữ Cảnh (Cascade of Context)</h2>
      <p className="text-2xl font-light text-foreground/50 italic">"Tài liệu dẫn dắt phát triển, không phải các dòng chat."</p>
    </div>

    <div className="flex justify-between items-center relative">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-emerald-500 opacity-20 -translate-y-1/2" />
      
      {[
        { label: "Con Người", icon: <Users />, color: "bg-orange-500" },
        { label: "Project Brief", icon: <FileCode />, color: "bg-orange-500/50" },
        { label: "PM Agent", icon: <Cpu />, color: "bg-blue-500" },
        { label: "PRD", icon: <FileCode />, color: "bg-blue-500/50" },
        { label: "Architect Agent", icon: <Cpu />, color: "bg-indigo-500" },
        { label: "Tech Spec", icon: <FileCode />, color: "bg-indigo-500/50" },
        { label: "Dev Agent", icon: <Cpu />, color: "bg-emerald-500" },
        { label: "Mã Nguồn", icon: <Code2 />, color: "bg-emerald-500/50" }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-4 relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={cn("w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl", item.color)}
          >
            {item.icon}
          </motion.div>
          <span className="text-[10px] font-bold uppercase tracking-tighter text-foreground/60 whitespace-nowrap">{item.label}</span>
          {i < 7 && <ArrowRight className="absolute left-[calc(100%+8px)] top-8 w-4 h-4 text-white/20" />}
        </div>
      ))}
    </div>

    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl max-w-3xl mx-auto text-center">
      <p className="text-foreground/70 leading-relaxed">
        Bằng cách buộc các tác nhân AI phải viết, kiểm tra chéo và thống nhất các bản thiết kế trước khi code, BMAD loại bỏ hoàn toàn sự mơ hồ. Tài liệu sinh ra từ bước trước trở thành hành lang pháp lý bắt buộc cho tác nhân AI ở bước sau.
      </p>
    </div>
  </div>
);

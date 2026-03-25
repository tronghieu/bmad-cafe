'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export const LifecycleSlide = () => (
  <div className="w-full max-w-5xl space-y-12">
    <h2 className="text-4xl font-bold text-center text-white">Vòng Đời 4 Giai Đoạn Của BMAD</h2>
    
    <div className="relative h-[400px] flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 800 400">
        <rect x="100" y="50" width="600" height="300" rx="40" fill="none" stroke="white" strokeWidth="4" strokeDasharray="10 10" />
      </svg>
      
      <div className="grid grid-cols-2 gap-32 relative z-10">
        {[
          { title: "1. Phân Tích", desc: "Khám phá ý tưởng. Tạo Project Brief (Tại sao?)", color: "bg-orange-500", pos: "-top-16" },
          { title: "2. Lập Kế Hoạch", desc: "Chuyển đổi yêu cầu. Tạo PRD & Epics (Cái gì?)", color: "bg-blue-500", pos: "-top-16" },
          { title: "4. Triển Khai", desc: "Viết code và kiểm thử QA (Thực thi chính xác).", color: "bg-emerald-500", pos: "top-0" },
          { title: "3. Thiết Kế Giải Pháp", desc: "Lên bản vẽ kỹ thuật. Tạo Architecture & UX Spec (Như thế nào?).", color: "bg-indigo-500", pos: "top-0" }
        ].map((step, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className="w-64 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative"
          >
            <div className={cn("absolute w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl -top-6 -left-6 shadow-xl shadow-black/20", step.color)}>
              {i + 1}
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">{step.title}</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="absolute bottom-[-60px] w-full max-w-2xl p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
        <ShieldCheck className="text-secondary w-8 h-8 flex-shrink-0" />
        <p className="text-xs italic text-foreground/50">Bất kỳ sự thay đổi nào giữa chừng đều có lệnh `correct-course` để cập nhật lại toàn bộ tài liệu thay vì vá lỗi trực tiếp vào code.</p>
      </div>
    </div>
  </div>
);

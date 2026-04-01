'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Layout, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ProblemSlide = () => (
  <div className="w-full max-w-6xl space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Vấn Đề Cốt Lõi Của <span className="text-accent">"Vibe Coding"</span>
      </h2>
      <p className="text-foreground/60 max-w-2xl mx-auto">
        Việc liên tục chat với AI rất tuyệt vời để làm prototype, nhưng sẽ sụp đổ khi áp dụng cho các hệ thống phần mềm phức tạp.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Mất Ngữ Cảnh (Context Loss)",
          desc: "LLM mắc hội chứng 'lãng quên ở giữa' khi lịch sử chat quá dài.",
          icon: <Layers className="w-8 h-8 text-orange-400" />,
          color: "border-orange-500/30 bg-orange-500/5 text-orange-400"
        },
        {
          title: "Suy Thoái Kiến Trúc (Architectural Decay)",
          desc: "Không có tài liệu định hướng, AI liên tục tạo ra các đoạn code chắp vá.",
          icon: <Layout className="w-8 h-8 text-emerald-400" />,
          color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
        },
        {
          title: "Vòng Lặp Ảo Giác (Hallucination Loop)",
          desc: "Bạn càng prompt để sửa lỗi, AI càng làm rối tinh mã nguồn.",
          icon: <Zap className="w-8 h-8 text-red-400" />,
          color: "border-red-500/30 bg-red-500/5 text-red-400"
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className={cn("p-8 rounded-3xl border flex flex-col gap-6 group hover:scale-105 transition-all cursor-default", item.color)}
        >
          <div className="p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">{item.icon}</div>
          <div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layout, Workflow, Users, FileCode, Layers, ShieldCheck, Zap, Scissors, GitBranch } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Hero Slide ---
export const HeroSlide = () => (
  <div className="text-center space-y-8 max-w-4xl">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-block p-4 bg-secondary/10 rounded-2xl border border-secondary/20 mb-4"
    >
      <Cpu className="w-16 h-16 text-secondary mx-auto mb-4 animate-pulse" />
      <span className="text-secondary font-mono tracking-widest text-lg uppercase">Beyond Vibe Coding</span>
    </motion.div>
    <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-tight">
      BMAD Method
    </h1>
    <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
      Kỷ nguyên mới của phát triển phần mềm bằng AI Agentic Engineering
    </p>
    <div className="pt-8 flex justify-center gap-6">
      <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-mono text-white/50">
        AI-DRIVEN AGILE
      </div>
      <div className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-sm font-mono text-white/50">
        VERSION CONTROLLED
      </div>
    </div>
  </div>
);

// --- Slide 1: Beyond "Vibe Coding" ---
export const VibeCodingSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Vượt Qua Giới Hạn Của <span className="text-accent">"Vibe Coding"</span>
      </h2>
      <div className="p-8 bg-accent/5 border border-accent/20 rounded-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
          <Terminal className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-accent mb-4 italic">Vibe Coding</h3>
        <p className="text-foreground/80 leading-relaxed">
          Lộ trình chuyển đổi từ Prompting tự do sang Kỹ nghệ AI có cấu trúc. Giới thiệu BMAD Method: Kỷ nguyên mới của phát triển phần mềm bằng AI.
        </p>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="relative w-full h-80 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="z-10 text-center space-y-4">
          <div className="text-7xl">🌀</div>
          <div className="font-mono text-accent/50">Prompting tự do</div>
        </div>
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" 
        />
      </div>
    </div>
  </div>
);

// --- Slide 2: Core Issues ---
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

// --- Slide 3: Model Shift ---
export const ShiftSlide = () => (
  <div className="w-full max-w-5xl space-y-12">
    <h2 className="text-4xl font-bold text-center text-white">Sự Dịch Chuyển Mô Hình</h2>
    
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/5">
            <th className="p-6 text-white/40 font-mono text-sm uppercase">Đặc tính</th>
            <th className="p-6 text-accent font-bold text-xl text-center">VIBE CODING</th>
            <th className="p-6 text-secondary font-bold text-xl text-center border-l border-white/10 bg-secondary/10">BMAD METHOD</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          {[
            ["Phương Pháp", "Cảm tính, ngẫu hứng", "Có cấu trúc, chuẩn Agile"],
            ["Tài Sản Cốt Lõi", "Lịch sử chat tạm thời", "Tài liệu kỹ thuật lưu trên Git"],
            ["Quản Lý Ngữ Cảnh", "Dễ suy giảm, trôi dạt", "Cô lập ngữ cảnh, chính xác"],
            ["Tính Dự Đoán", "Rủi ro ảo giác cao", "Có thể tái tạo, tự kiểm tra chéo"],
            ["Vai Trò Lập Trình Viên", "Người gõ Prompt", "Kiến trúc sư hệ thống"]
          ].map(([label, vibe, bmad], i) => (
            <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-6 font-medium text-white/70">{label}</td>
              <td className="p-6 text-center text-accent/80 italic">{vibe}</td>
              <td className="p-6 text-center text-secondary font-bold border-l border-white/10 bg-secondary/5">{bmad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

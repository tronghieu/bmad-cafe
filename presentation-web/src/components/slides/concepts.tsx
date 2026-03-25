'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layout, Workflow, Users, FileCode, Layers, ShieldCheck, Zap, Scissors, GitBranch, Code2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Slide 4: What is BMAD? ---
export const DefinitionSlide = () => (
  <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 items-center">
    <div className="flex-1 space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        BMAD Method Là Gì?
      </h2>
      <p className="text-xl text-foreground/70 leading-relaxed">
        BMAD (Breakthrough Method for Agile AI-Driven Development) là một framework mã nguồn mở biến AI thành một nhóm Agile chuyên biệt, được quản lý chặt chẽ bằng tài liệu và version control.
      </p>
      
      <div className="space-y-4">
        {[
          { title: "Không Chỉ Là Công Cụ", desc: "Không phải một AI model mới, mà là một kiến trúc luồng công việc (workflow architecture) để điều phối AI.", icon: <Workflow className="text-secondary" /> },
          { title: "Tài Liệu Là Chân Lý", desc: "AI buộc phải viết và thống nhất bản thiết kế kỹ thuật trước khi viết bất kỳ dòng code nào.", icon: <FileCode className="text-secondary" /> },
          { title: "Mở & Tương Thích", desc: "Hoạt động trơn tru với các IDE phổ biến như Claude Code, Cursor, Windsurf và VS Code.", icon: <Layout className="text-secondary" /> }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h4 className="font-bold text-white">{item.title}</h4>
              <p className="text-sm text-foreground/60">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    <div className="flex-1 relative flex items-center justify-center p-12">
      <div className="relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-80 h-80 rounded-full border-2 border-dashed border-secondary/20 flex items-center justify-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 bg-secondary rounded-3xl flex flex-col items-center justify-center text-secondary-foreground shadow-2xl shadow-secondary/20">
            <span className="text-4xl font-black">C.O.R.E.</span>
            <span className="text-sm font-mono tracking-widest">ENGINE</span>
          </div>
        </div>
        {[
          { label: "Biệt Đội AI Đa Nhiệm", icon: <Users />, pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
          { label: "Quy Trình Agile", icon: <Zap />, pos: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2" },
          { label: "Quản Trị Git", icon: <GitBranch />, pos: "bottom-0 right-0 translate-x-1/2 translate-y-1/2" }
        ].map((node, i) => (
          <div key={i} className={cn("absolute bg-card border border-border p-4 rounded-2xl flex items-center gap-3 shadow-xl", node.pos)}>
            <div className="text-secondary">{node.icon}</div>
            <span className="text-xs font-bold whitespace-nowrap">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Slide 5: Virtual Squad ---
export const VirtualSquadSlide = () => (
  <div className="w-full max-w-5xl space-y-12">
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Khái Niệm 1: Biệt Đội Agile Ảo (Virtual Squad)</h2>
      <p className="text-foreground/60">BMAD không dùng một AI 'biết tuốt'. Sử dụng các tác nhân chuyên biệt sẽ ngăn AI đi đường tắt.</p>
    </div>

    <div className="relative p-12 bg-white/5 rounded-3xl border border-white/10">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-3 flex justify-center mb-8">
          <div className="px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-bold flex items-center gap-3">
            <Users className="w-6 h-6" /> Con Người (Vibe CEO)
          </div>
        </div>
        
        {[
          { name: "Mary", role: "Phân tích viên", color: "bg-primary border-blue-500/50" },
          { name: "John", role: "Giám đốc Sản phẩm", color: "bg-primary border-blue-500/50" },
          { name: "Sarah", role: "Kiến trúc sư", color: "bg-primary border-blue-500/50" },
          { name: "Bob", role: "Scrum Master", color: "bg-secondary/20 border-secondary/50" },
          { name: "James", role: "Lập trình viên", color: "bg-secondary/20 border-secondary/50" },
          { name: "Quinn", role: "Kỹ sư QA", color: "bg-secondary/20 border-secondary/50" }
        ].map((agent, i) => (
          <motion.div 
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={cn("p-6 rounded-2xl border flex flex-col items-center gap-2", agent.color)}
          >
            <div className="font-bold text-white">{agent.name}</div>
            <div className="text-xs text-foreground/50 italic">({agent.role})</div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative connecting lines (simplified) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <path d="M400 100 L200 200 M400 100 L400 200 M400 100 L600 200" stroke="white" strokeWidth="2" fill="none" />
          <path d="M200 250 L200 350 M400 250 L400 350 M600 250 L600 350" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  </div>
);

// --- Slide 6: Agent as Source Code ---
export const AgentCodeSlide = () => (
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white leading-tight">
        Khái Niệm 2: Tác Nhân Dưới Dạng Mã Nguồn
      </h2>
      <p className="text-lg text-foreground/70">
        Tác nhân AI không phải là những system prompts ẩn. Chúng là các tệp .md khai báo được lưu trực tiếp trong Git repo của bạn.
      </p>
      
      <div className="p-6 bg-secondary/10 border border-secondary/30 rounded-2xl">
        <p className="text-secondary font-bold text-xl">
          (Ý định Con người + Chuyên môn AI) × Version Control = Phần mềm có tính dự đoán
        </p>
      </div>
    </div>

    <div className="bg-[#1E1E1E] rounded-3xl p-8 border border-white/10 shadow-2xl font-mono text-sm overflow-hidden relative group">
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-4 text-white/20">senior-backend-architect.md</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <span className="text-blue-400">name:</span> <span className="text-orange-300">Senior Backend Architect</span>
          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 2 }} className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] rounded border border-blue-500/30">PERSONA</motion.div>
        </div>
        <div>
          <span className="text-blue-400">capabilities:</span>
          <div className="pl-4 space-y-1">
            <div className="text-foreground/60">- draw_architecture_diagrams</div>
            <div className="text-foreground/60">- define_database_schema</div>
          </div>
          <div className="mt-2 px-2 py-0.5 w-fit bg-orange-500/20 text-orange-400 text-[10px] rounded border border-orange-500/30 uppercase tracking-tighter">Năng Lực</div>
        </div>
        <div>
          <span className="text-blue-400">constraints:</span>
          <div className="pl-4 space-y-1 text-red-400/80 italic">
            <div>- Không bao giờ tự ý chọn thư viện mới</div>
            <div>- Phải tuân thủ REST API conventions</div>
          </div>
          <div className="mt-2 px-2 py-0.5 w-fit bg-red-500/20 text-red-400 text-[10px] rounded border border-red-500/30 uppercase tracking-tighter">Giới Hạn</div>
        </div>
      </div>
    </div>
  </div>
);

// --- Slide 7: Lifecycle ---
export const LifecycleSlide = () => (
  <div className="w-full max-w-5xl space-y-12">
    <h2 className="text-4xl font-bold text-center text-white">Vòng Đời 4 Giai Đoạn Của BMAD</h2>
    
    <div className="relative h-[400px] flex items-center justify-center">
      {/* Central Path */}
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

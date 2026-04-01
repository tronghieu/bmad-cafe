'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, FileCode, Layout, Users, Zap, GitBranch } from 'lucide-react';
import { cn } from '@/lib/utils';

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

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, LayoutDashboard, IterationCcw } from 'lucide-react';

export const StoryLesson1Slide = () => (
  <div className="w-full max-w-6xl flex flex-col items-center justify-center p-6 space-y-12">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-3xl"
    >
      <div className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-mono text-sm tracking-widest uppercase mb-6 shadow-xl">
        <Users className="w-4 h-4" />
        Lesson 01
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
        Tư duy: <span className="text-secondary italic">"Trần sao, Âm vậy"</span>
      </h2>
      <p className="mt-6 text-xl text-foreground/70 font-light leading-relaxed">
        Áp dụng tư duy tương tự (Analogical thinking). Vận hành các AI Agent y hệt như đang điều phối một team Scrum con người ngoài đời thực.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-8 bg-white/5 border border-white/10 hover:border-secondary/30 rounded-[2rem] backdrop-blur-md group"
      >
        <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <IterationCcw className="w-7 h-7 text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Tổ chức Scrum</h3>
        <p className="text-foreground/60 text-base leading-relaxed">
          Giao tiếp với Agent không phải là "prompt", mà là một phiên "Sprint Planning" hay "Grooming". Tổ chức công việc với Backlog rõ ràng.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-8 bg-white/5 border border-white/10 hover:border-secondary/30 rounded-[2rem] backdrop-blur-md group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative z-10 w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <FileText className="w-7 h-7 text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Jira ➡️ Markdown</h3>
        <p className="text-foreground/60 text-base leading-relaxed">
          Loại bỏ hoàn toàn Jira. Mọi User Story, Epic, Requirement đều được quản lý 100% bằng file Markdown ngay trong codebase.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-8 bg-white/5 border border-white/10 hover:border-secondary/30 rounded-[2rem] backdrop-blur-md group"
      >
        <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <LayoutDashboard className="w-7 h-7 text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Làm mịn Story</h3>
        <p className="text-foreground/60 text-base leading-relaxed">
          Sử dụng V4 để thảo luận, làm mịn, cắt nhỏ các yêu cầu (Specs) y như một buổi họp phân tích phân tích nghiệp vụ thực tế.
        </p>
      </motion.div>
    </div>
  </div>
);

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const ProjectContextSlide = () => (
  <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Visual */}
    <div className="relative p-10 bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[340px]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="aspect-square border border-white/20" />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5">
        <div className="px-5 py-2 bg-card border border-border rounded-xl font-mono text-xs text-white/60">
          /bmad-bmm-generate-project-context
        </div>
        <ArrowRight className="w-6 h-6 text-white/30" />
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex items-center gap-3 p-4 bg-secondary/10 border border-secondary/30 rounded-xl"
        >
          <FileText className="w-6 h-6 text-secondary" />
          <span className="font-mono text-secondary font-bold text-sm">project-context.md</span>
        </motion.div>
        <div className="text-center space-y-2 mt-2">
          {['Tech stack & kiến trúc', 'Code patterns & conventions', 'Test patterns', 'Implementation rules'].map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-white/50">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 flex-shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="space-y-7">
      <div>
        <h2 className="text-4xl font-bold text-white leading-tight mb-2">
          Project Context — <span className="text-secondary">Làm trước tiên</span>
        </h2>
        <p className="text-base text-white/50">
          Chứa những context quan trọng về dự án như framework và các patterns cần follow khi thêm mới hoặc chỉnh sửa.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-300 mb-0.5">Không có Project Context</p>
            <p className="text-xs text-white/50">Agent hỏi câu hỏi chung chung, có thể bỏ qua các convention đã có sẵn trong codebase.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/5 border border-secondary/10">
          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-secondary mb-0.5">Có Project Context</p>
            <p className="text-xs text-white/50">Agent hỏi các câu hỏi <em>có căn cứ, cụ thể</em> dựa trên những gì đã tìm thấy trong dự án.</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
        <p className="text-xs italic text-white/40">
          💡 Luôn tạo Project Context trước khi thực hiện bất kỳ Quick Flow nào. Tốn vài phút nhưng tiết kiệm rất nhiều thời gian trao đổi sau đó.
        </p>
      </div>
    </div>
  </div>
);

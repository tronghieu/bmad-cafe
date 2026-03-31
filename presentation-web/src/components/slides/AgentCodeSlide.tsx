'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
          <div className="mt-2 px-2 py-0.5 w-fit bg-orange-500/20 text-orange-400 text-[10px] rounded border border-orange-500/30 font-sans tracking-tighter">NĂNG LỰC</div>
        </div>
        <div>
          <span className="text-blue-400">constraints:</span>
          <div className="pl-4 space-y-1 text-red-400/80 italic">
            <div>- Không bao giờ tự ý chọn thư viện mới</div>
            <div>- Phải tuân thủ REST API conventions</div>
          </div>
          <div className="mt-2 px-2 py-0.5 w-fit bg-red-500/20 text-red-400 text-[10px] rounded border border-red-500/30 font-sans tracking-tighter">GIỚI HẠN</div>
        </div>
      </div>
    </div>
  </div>
);

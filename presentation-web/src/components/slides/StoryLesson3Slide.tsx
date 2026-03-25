'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Timer, BugOff, Trophy } from 'lucide-react';

export const StoryLesson3Slide = () => (
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
    <div className="space-y-8 relative z-10">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-mono text-sm tracking-widest uppercase mb-4">
        <Trophy className="w-4 h-4" />
        Lesson 03
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
        Chất lượng là<br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Không Đàm Phán</span>
      </h2>
      
      <div className="space-y-4 pt-2">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-4 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-secondary/5 opacity-50"></div>
          <Timer className="w-8 h-8 text-white shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-white">Lợi ích thực thụ</h3>
            <p className="mt-1 text-foreground/70 font-light text-sm md:text-base">
              Tốc độ 'deliver' (phân phối mã nguồn) thực sự tăng vọt với AI. Nhưng giá trị cao nhất không nằm ở việc ship nhanh để có sản phẩm tồi.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-secondary/10 border border-secondary/30 p-5 rounded-2xl flex items-start gap-4 relative overflow-hidden"
        >
          <ShieldCheck className="w-8 h-8 text-secondary shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-secondary">Dư địa dành cho Test</h3>
            <p className="mt-1 text-white/80 font-medium text-sm md:text-base">
              Sự dư dả về "tay nghề" của AI mở ra khả năng thiết lập <strong className="text-secondary tracking-wide">Automated Test</strong> (Kiểm tra tự động) - thứ vốn bị coi là "xa xỉ" trong các dự án agile di chuyển quá nhanh.
            </p>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="relative aspect-square w-full max-w-sm mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] z-0"></div>
      
      <motion.div
        initial={{ rotate: -5, opacity: 0, y: 20 }}
        whileInView={{ rotate: 0, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 w-full aspect-[4/5] bg-[#0A192F] border-2 border-secondary/30 rounded-[3rem] shadow-2xl p-6 flex flex-col pt-12"
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/10 rounded-full"></div>
        
        <div className="flex-1 overflow-hidden relative rounded-2xl border border-secondary/20 bg-black/50 p-6 font-mono text-sm text-secondary/70 flex flex-col gap-3">
           <div className="text-white/40 mb-2">// Automated Test Suite</div>
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5 }}
             className="flex gap-3 items-center text-green-400"
           >
             <ShieldCheck className="w-4 h-4 shrink-0" />
             <span>PASS user_auth_flow.e2e.ts</span>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.7 }}
             className="flex gap-3 items-center text-green-400"
           >
             <ShieldCheck className="w-4 h-4 shrink-0" />
             <span>PASS inbound_receipt.spec.ts</span>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.9 }}
             className="flex gap-3 items-center text-green-400"
           >
             <ShieldCheck className="w-4 h-4 shrink-0" />
             <span>PASS product_catalog.unit.ts</span>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 1.1 }}
             className="flex gap-3 items-center text-green-400"
           >
             <ShieldCheck className="w-4 h-4 shrink-0" />
             <span>PASS pos_checkout.spec.ts</span>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 1.3 }}
             className="flex gap-3 items-center text-secondary/50 animate-pulse mt-4"
           >
             <BugOff className="w-4 h-4 shrink-0" />
             <span>0 bugs found. Quality uncompromised.</span>
           </motion.div>
        </div>
        
        <div className="h-16 flex items-center justify-between text-white/50 px-2 mt-4 text-xs font-mono uppercase tracking-widest">
           <span>Code Coverage: 98%</span>
           <span className="text-secondary font-bold">Stable</span>
        </div>
      </motion.div>
    </div>
  </div>
);

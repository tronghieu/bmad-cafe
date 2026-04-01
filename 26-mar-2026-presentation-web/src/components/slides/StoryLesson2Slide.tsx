'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCog, GitPullRequestDraft, Sparkles } from 'lucide-react';

export const StoryLesson2Slide = () => (
  <div className="w-full max-w-6xl flex items-center justify-center p-6">
    <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
      
      <div className="flex-1 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-mono text-sm tracking-widest uppercase">
          <UserCog className="w-4 h-4" />
          Lesson 02
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
          Nhân Bàn Cờ Đổi Chủ
        </h2>
        
        <p className="text-2xl text-foreground/70 font-light leading-relaxed">
          Tái định vị hoàn toàn vai trò của con người trong dự án công nghệ.
        </p>

        <ul className="space-y-6 pt-4">
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="p-2 bg-white/10 rounded-xl mt-1 shrink-0">
              <GitPullRequestDraft className="w-6 h-6 text-white text-opacity-80" />
            </div>
            <div>
              <strong className="text-xl text-white font-medium block mb-1">Dẫn dắt thay vì Đánh máy</strong>
              <span className="text-foreground/60 text-lg">Khi AI trở thành "tay đánh máy" siêu tốc, con người lùi lại đóng vai trò là Tech Lead / Manager điều phối luồng công việc.</span>
            </div>
          </motion.li>
          
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-4"
          >
            <div className="p-2 bg-accent/20 rounded-xl mt-1 shrink-0">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <div>
              <strong className="text-xl text-accent font-medium block mb-1">Năng lực ra quyết định</strong>
              <span className="text-foreground/60 text-lg">Giá trị lõi không còn ở tốc độ sinh mã (code generation), mà nằm ở năng lực ra quyết định nhanh, tư duy kiến trúc và kiểm duyệt chất lượng của người Product Maker.</span>
            </div>
          </motion.li>
        </ul>
      </div>

      <div className="flex-1 w-full md:w-auto relative z-10 flex justify-center">
        <motion.div
           initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
           whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
           transition={{ type: "spring", duration: 1.5 }}
           className="relative aspect-square w-80 max-w-full"
        >
          {/* Abstract visual of director/manager */}
          <div className="absolute inset-0 border-4 border-dashed border-accent/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute inset-4 border-4 border-white/5 rounded-full"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-accent/20 fill-accent/50 rounded-full blur-xl absolute"></div>
              <UserCog className="w-24 h-24 text-accent relative z-10" />
            </div>
          </div>
          
          {/* Orbiting nodes (AI instances) */}
          <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-md">
            <span className="text-[10px] font-mono text-white">AI</span>
          </motion.div>
          <motion.div className="absolute bottom-1/4 right-0 translate-x-1/2 w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-md">
            <span className="text-[10px] font-mono text-white">AI</span>
          </motion.div>
          <motion.div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-md">
            <span className="text-[10px] font-mono text-white">AI</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
);

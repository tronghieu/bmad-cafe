'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { List, ChevronRight, Cpu, UserCheck } from 'lucide-react';

export const AgendaSlide = () => {
  const agendaItems = [
    {
      id: '01',
      title: 'Giới thiệu về BMAD Method',
      subtitle: 'Quy trình Agentic Engineering dựa trên cấu trúc Specs-Plan-Solve.',
      icon: <Cpu className="w-6 h-6 text-secondary" />,
      color: 'secondary'
    },
    {
      id: '02',
      title: 'Chia sẻ kinh nghiệm áp dụng',
      subtitle: 'Từ Tất Huân và Lưu Hiếu - Hành trình tối ưu hóa với AI Agent.',
      icon: <UserCheck className="w-6 h-6 text-accent" />,
      color: 'accent'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
          <List className="w-4 h-4 text-secondary" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Session Roadmap</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          Nội dung buổi <span className="text-secondary italic">chia sẻ</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 w-full">
        {agendaItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            className="group relative flex items-center p-8 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-[2rem] transition-all duration-500 overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 bg-${item.color}`}></div>
            
            <div className="flex-shrink-0 mr-8 relative">
              <div className="text-4xl md:text-5xl font-black font-mono text-white/10 group-hover:text-white/20 transition-colors duration-500">
                {item.id}
              </div>
              <div className="absolute inset-0 flex items-center justify-center translate-x-4 translate-y-4">
                 <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-lg">
                    {item.icon}
                 </div>
              </div>
            </div>

            <div className="flex-grow space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-lg text-white/50 font-light leading-relaxed">
                {item.subtitle}
              </p>
            </div>

            <div className="flex-shrink-0 ml-4">
              <div className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                <ChevronRight className="w-6 h-6 text-white/20 group-hover:text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]"
      >
        BMAD Method • AI Engineering • 2026
      </motion.div>
    </div>
  );
};

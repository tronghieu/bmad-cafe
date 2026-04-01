'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400">
          <path d="M400 100 L200 200 M400 100 L400 200 M400 100 L600 200" stroke="white" strokeWidth="2" fill="none" />
          <path d="M200 250 L200 350 M400 250 L400 350 M600 250 L600 350" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  </div>
);

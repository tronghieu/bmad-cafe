'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Box, User, Network, AlertTriangle, Puzzle, Triangle } from 'lucide-react';

/**
 * Slide showcasing the challenges and limitations of the BMAD Method.
 * Uses a more intense visual palette for balanced perspective.
 */
export const ConsSlide = () => (
  <div className="w-full max-w-6xl flex flex-col items-center max-h-[85vh]">
    <div className="text-center mb-8 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-20"
      >
        <Triangle className="w-24 h-24 fill-amber-500 text-amber-500 blur-xl" />
      </motion.div>
      
      <h2 className="text-4xl font-black text-white mb-2 italic tracking-tight">
        Nhược Điểm & Thách Thức
      </h2>
      <p className="text-lg text-amber-500/60 font-medium font-mono uppercase tracking-[0.2em]">
        Góc Nhìn Khách Quan - Real World Case
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-2 relative">
      {[
        { 
          title: "Đường Cong Học Tập", 
          desc: "Đòi hỏi làm quen nhanh với CLI, cấu hình YAML/Markdown và điều phối đa tác tử chuyên biệt.", 
          icon: <Brain className="w-10 h-10" />,
          color: "bg-white/5 border-white/10 hover:border-amber-500/40",
          accent: "text-amber-500"
        },
        { 
          title: "Cồng Kềnh Dự Án Nhỏ", 
          desc: "Bộ quy trình đầy đủ của BMAD có thể là 'quá mức' cần thiết cho các script đơn giản, dùng một lần.", 
          icon: <Box className="w-10 h-10" />,
          color: "bg-white/5 border-white/10 hover:border-orange-500/40",
          accent: "text-orange-500"
        },
        { 
          title: "Con Người Giám Sát", 
          desc: "Phương pháp không phải là 'giao việc rồi bỏ đi'. Con người phải liên tục định hướng, đánh giá AI.", 
          icon: <User className="w-10 h-10" />,
          color: "bg-white/5 border-white/10 hover:border-rose-500/40",
          accent: "text-rose-500"
        },
        { 
          title: "Chưa Đa Tác Tử 100%", 
          desc: "Vẫn phụ thuộc nhiều vào các phiên làm việc (sessions) được điều phối thủ công thay vì tự động hoàn toàn.", 
          icon: <Network className="w-10 h-10" />,
          color: "bg-white/5 border-white/10 hover:border-pink-500/40",
          accent: "text-pink-500"
        },
        { 
          title: "Bão Hòa Ngữ Cảnh", 
          desc: "Các phiên làm việc dài vẫn có nguy cơ làm AI mất ngữ cảnh hoặc bỏ sót các lỗi tinh vi khi review.", 
          icon: <AlertTriangle className="w-10 h-10" />,
          color: "bg-white/5 border-white/10 hover:border-yellow-500/40",
          accent: "text-yellow-500"
        },
        { 
          title: "Đơn Dịch Vụ Tập Trung", 
          desc: "Cấu trúc hiện tại ưu tiên Sprints cho microservice lẻ; cần tinh chỉnh thêm khi tích hợp hệ thống lớn.", 
          icon: <Puzzle className="w-10 h-10" />,
          color: "bg-white/5 border-white/10 hover:border-violet-500/40",
          accent: "text-violet-500"
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
          className={`p-6 rounded-[2rem] border ${item.color} backdrop-blur-md flex flex-col gap-4 relative group overflow-hidden`}
        >
          <div className="absolute top-0 right-10 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className={`${item.accent} group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all`}>
            {item.icon}
          </div>
          <div>
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-amber-500 transition-colors">
              {item.title}
            </h3>
            <p className="text-lg text-foreground/50 leading-snug font-light italic">
              {item.desc}
            </p>
          </div>
          
          <div className="mt-auto pt-2 self-end">
            <Triangle className={`w-6 h-6 fill-current ${item.accent} opacity-10 rotate-180`} />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

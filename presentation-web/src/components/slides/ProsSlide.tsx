'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GitCompare, Cpu, Maximize, FileText, Eye, ArrowRight } from 'lucide-react';

/**
 * Slide showcasing the advantages of the BMAD Method.
 * Maximizes visuals with a flow-based design and icons.
 */
export const ProsSlide = () => (
  <div className="w-full max-w-6xl flex flex-col items-center max-h-[85vh]">
    <div className="text-center mb-6">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-black text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
      >
        Ưu Điểm Của BMAD Method
      </motion.h2>
      <p className="text-lg text-foreground/60 font-medium italic">
        "Kỷ luật là sức mạnh, cấu trúc là tự do."
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative w-full">
      {/* Background visual element */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-blue-500 rounded-full blur-[150px]" />
      </div>

      {[
        { 
          title: "Kỷ Luật & Cấu Trúc", 
          desc: "Thay thế 'vibe coding' bằng quy trình Agile (Phân tích, Kế hoạch, Giải pháp, Triển khai).", 
          icon: <ShieldCheck className="w-8 h-8" />,
          color: "border-blue-500/30 bg-blue-500/5",
          accent: "text-blue-400"
        },
        { 
          title: "Agent-as-Code", 
          desc: "Lưu cấu hình agent trên Git, giúp truy xuất nguồn gốc (traceability) và bảo mật tuyệt đối.", 
          icon: <GitCompare className="w-8 h-8" />,
          color: "border-emerald-500/30 bg-emerald-500/5",
          accent: "text-emerald-400"
        },
        { 
          title: "Tối Ưu Ngữ Cảnh", 
          desc: "Tiết kiệm 80-90% token và tăng tốc độ phản hồi AI lên 40-60%.", 
          icon: <Cpu className="w-8 h-8" />,
          color: "border-purple-500/30 bg-purple-500/5",
          accent: "text-purple-400"
        },
        { 
          title: "Thích Ứng Quy Mô", 
          desc: "Tự động điều chỉnh kế hoạch từ sửa lỗi nhanh đến hệ thống doanh nghiệp (Enterprise).", 
          icon: <Maximize className="w-8 h-8" />,
          color: "border-cyan-500/30 bg-cyan-500/5",
          accent: "text-cyan-400"
        },
        { 
          title: "Tự Động Tài Liệu", 
          desc: "PRD, Architecture và User Stories luôn song hành cùng mã nguồn như một tiêu chuẩn.", 
          icon: <FileText className="w-8 h-8" />,
          color: "border-orange-500/30 bg-orange-500/5",
          accent: "text-orange-400"
        },
        { 
          title: "Giảm Thiểu Ảo Giác", 
          desc: "Rào cản thông số kỹ thuật rõ ràng giúp AI thực thi chính xác, giảm 75% thời gian lập kế hoạch.", 
          icon: <Eye className="w-8 h-8" />,
          color: "border-rose-500/30 bg-rose-500/5",
          accent: "text-rose-400"
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className={`p-6 rounded-3xl border ${item.color} backdrop-blur-xl relative overflow-hidden group h-full flex flex-col`}
        >
          <div className={`mb-3 p-3 rounded-xl bg-white/5 inline-flex items-center justify-center ${item.accent} group-hover:scale-110 transition-transform w-fit`}>
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
            {item.title} 
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-foreground/60 leading-relaxed font-light italic">
            {item.desc}
          </p>
          
          <div className={`absolute bottom-[-20%] right-[-10%] w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none ${item.color.split(' ')[0]}`} />
        </motion.div>
      ))}
    </div>
  </div>
);

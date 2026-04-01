'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Gauge, FileCode, Rocket } from 'lucide-react';

export const BenefitsSlide = () => (
  <div className="w-full max-w-6xl space-y-12">
    <h2 className="text-4xl font-bold text-center text-white">Lợi Ích Cốt Lõi Khi Áp Dụng BMAD Method</h2>
    
    <div className="grid grid-cols-2 gap-8">
      {[
        { title: "Living Document", desc: "Tất cả tài liệu thiết kế và mã nguồn được lưu trữ đồng bộ trong Git Repo, đảm bảo tính kế thừa và luôn cập nhật theo thời gian thực.", icon: <GitBranch /> },
        { title: "Giảm bớt ảo giác, kiểm soát chặt chẽ thực thi", desc: "Giảm thiểu đáng kể tình trạng AI bị ảo giác và tiết kiệm hàng chục giờ đồng hồ phải đập đi làm lại (rework).", icon: <Gauge /> },
        { title: "Tài Liệu Tự Động", desc: "Sở hữu PRD, sơ đồ kiến trúc và User Story chất lượng cao như một 'sản phẩm phụ' mặc định của quy trình.", icon: <FileCode /> },
        { title: "Tốc Độ Đi Kèm Chất Lượng", desc: "Cho phép triển khai code song song nhờ sự phân chia ranh giới rõ ràng của các tác nhân AI, không làm vỡ kiến trúc.", icon: <Rocket /> }
      ].map((benefit, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 flex gap-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
            {benefit.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{benefit.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

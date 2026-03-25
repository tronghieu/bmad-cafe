'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layout, Workflow, Users, FileCode, Layers, ShieldCheck, Zap, Scissors, GitBranch, Code2, CheckCircle2, Search, ArrowRight, Gauge, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Slide 8: Sharding Technique ---
export const ShardingSlide = () => (
  <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 items-center">
    <div className="flex-1 relative">
      <div className="p-8 bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <FileCode className="text-foreground/40" />
            <span className="text-sm font-mono text-foreground/40">PRD (100+ trang)</span>
          </div>
          <motion.div 
            animate={{ y: [0, 200, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-secondary"
          >
            <Scissors className="w-8 h-8" />
          </motion.div>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ x: 0 }}
              animate={{ x: [0, 100, 0] }}
              transition={{ delay: i * 0.5, duration: 2, repeat: Infinity }}
              className="p-3 bg-secondary/10 border border-secondary/30 rounded-lg text-xs font-mono text-secondary"
            >
              Atomic Story File {i}.md
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="flex-1 space-y-8">
      <h2 className="text-4xl font-bold text-white">Vũ Khí Bí Mật: Kỹ Thuật Băm Nhỏ Ngữ Cảnh</h2>
      <div className="space-y-6">
        <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
          <h4 className="font-bold text-red-400 mb-2">Vấn đề</h4>
          <p className="text-sm text-foreground/60">Các mô hình LLM sẽ bị "quá tải ngữ cảnh" và ảo giác nếu phải đọc toàn bộ tài liệu dự án lớn cùng lúc.</p>
        </div>
        <div className="p-6 bg-secondary/5 border border-secondary/20 rounded-2xl">
          <h4 className="font-bold text-secondary mb-2">Giải pháp BMAD</h4>
          <p className="text-sm text-foreground/60">Lệnh `shard` tự động cắt nhỏ các tài liệu PRD khổng lồ thành các Tệp tính năng độc lập (Atomic Story Files).</p>
        </div>
        <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
          <h4 className="font-bold text-blue-400 mb-2">Kết quả</h4>
          <p className="text-sm text-foreground/60">Dev Agent chỉ nhìn thấy chính xác những gì nó cần cho nhiệm vụ hiện tại. Không dư thừa, không ảo giác.</p>
        </div>
      </div>
    </div>
  </div>
);

// --- Slide 9: Cascade of Context ---
export const CascadeSlide = () => (
  <div className="w-full max-w-6xl space-y-16">
    <div className="text-center space-y-4">
      <h2 className="text-4xl font-bold text-white">Dòng Chảy Ngữ Cảnh (Cascade of Context)</h2>
      <p className="text-2xl font-light text-foreground/50 italic">"Tài liệu dẫn dắt phát triển, không phải các dòng chat."</p>
    </div>

    <div className="flex justify-between items-center relative">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-emerald-500 opacity-20 -translate-y-1/2" />
      
      {[
        { label: "Con Người", icon: <Users />, color: "bg-orange-500" },
        { label: "Project Brief", icon: <FileCode />, color: "bg-orange-500/50" },
        { label: "PM Agent", icon: <Cpu />, color: "bg-blue-500" },
        { label: "PRD", icon: <FileCode />, color: "bg-blue-500/50" },
        { label: "Architect Agent", icon: <Cpu />, color: "bg-indigo-500" },
        { label: "Tech Spec", icon: <FileCode />, color: "bg-indigo-500/50" },
        { label: "Dev Agent", icon: <Cpu />, color: "bg-emerald-500" },
        { label: "Mã Nguồn", icon: <Code2 />, color: "bg-emerald-500/50" }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-4 relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={cn("w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl", item.color)}
          >
            {item.icon}
          </motion.div>
          <span className="text-[10px] font-bold uppercase tracking-tighter text-foreground/60 whitespace-nowrap">{item.label}</span>
          {i < 7 && <ArrowRight className="absolute left-[calc(100%+8px)] top-8 w-4 h-4 text-white/20" />}
        </div>
      ))}
    </div>

    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl max-w-3xl mx-auto text-center">
      <p className="text-foreground/70 leading-relaxed">
        Bằng cách buộc các tác nhân AI phải viết, kiểm tra chéo và thống nhất các bản thiết kế trước khi code, BMAD loại bỏ hoàn toàn sự mơ hồ. Tài liệu sinh ra từ bước trước trở thành hành lang pháp lý bắt buộc cho tác nhân AI ở bước sau.
      </p>
    </div>
  </div>
);

// --- Slide 10: Scalable Intelligence ---
export const ScalableIntelligenceSlide = () => (
  <div className="w-full max-w-6xl space-y-12">
    <h2 className="text-4xl font-bold text-center text-white">Trí Tuệ Thích Ứng Theo Quy Mô</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Quick Flow (Nhẹ & Nhanh)",
          items: ["Sửa lỗi (Bug fixes), tính năng nhỏ.", "Tài liệu yêu cầu: Chỉ cần Tech Spec."],
          cta: "Viết Code Ngay",
          color: "border-blue-500/20 bg-blue-500/5"
        },
        {
          title: "BMAD Method (Tiêu chuẩn)",
          items: ["Sản phẩm mới, nền tảng cốt lõi.", "Tài liệu yêu cầu: PRD + Architecture + UX."],
          cta: "Viết Code Cấu Trúc",
          color: "border-secondary/20 bg-secondary/5 scale-105 shadow-2xl shadow-secondary/10"
        },
        {
          title: "Enterprise (Bảo mật cao)",
          items: ["Hệ thống tài chính, kiến trúc phân tán.", "Tài liệu yêu cầu: PRD + Arch + Test Strategy + DevOps."],
          cta: "Viết Code Chặt Chẽ",
          color: "border-indigo-500/20 bg-indigo-500/5"
        }
      ].map((card, i) => (
        <div key={i} className={cn("p-8 rounded-3xl border flex flex-col justify-between gap-8", card.color)}>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">{card.title}</h3>
            <ul className="space-y-4">
              {card.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-sm text-foreground/70 leading-relaxed">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-bold text-center text-sm">
            → {card.cta}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Slide 11: Brownfield ---
export const BrownfieldSlide = () => (
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="relative p-12 bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="aspect-square border border-white/20" />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative">
          <Search className="w-24 h-24 text-secondary animate-pulse" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl" 
          />
        </div>
        <div className="px-6 py-3 bg-card border border-border rounded-xl font-mono text-xs">
          architectural mapping scanner
        </div>
        <ArrowRight className="w-8 h-8 text-foreground/20" />
        <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-xl font-mono text-secondary font-bold">
          project-context.md
        </div>
      </div>
    </div>
    
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white leading-tight">
        Áp Dụng BMAD Cho Dự Án Đã Có (Brownfield)
      </h2>
      <p className="text-lg text-foreground/60">BMAD không chỉ dành cho các dự án xây mới từ đầu.</p>
      
      <ul className="space-y-4">
        {[
          "Sử dụng lệnh `document-project`.",
          "AI tự động quét toàn bộ mã nguồn cũ, phân tích nợ kỹ thuật và kiến trúc hiện tại.",
          "Xuất ra tệp `project-context.md` chứa định dạng của hệ thống.",
          "Các tác nhân AI sẽ tuân thủ nghiêm ngặt các quy ước viết code (conventions) có sẵn."
        ].map((text, i) => (
          <li key={i} className="flex gap-4 items-start text-foreground/80">
            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
            <span className="text-sm">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// --- Slide 12: Benefits ---
export const BenefitsSlide = () => (
  <div className="w-full max-w-6xl space-y-12">
    <h2 className="text-4xl font-bold text-center text-white">Lợi Ích Cốt Lõi Khi Áp Dụng BMAD Method</h2>
    
    <div className="grid grid-cols-2 gap-8">
      {[
        { title: "Khả năng Truy Xuất & Quản Trị", desc: "Mọi quyết định và đoạn code đều lưu trong Git. Sẵn sàng đáp ứng các tiêu chuẩn kiểm toán hệ thống khắt khe.", icon: <GitBranch /> },
        { title: "Độ Chính Xác Tuyệt Đối", desc: "Giảm thiểu đáng kể tình trạng AI bị ảo giác và tiết kiệm hàng chục giờ đồng hồ phải đập đi làm lại (rework).", icon: <Gauge /> },
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

// --- Slide 13: Personal Experience (Placeholder) ---
export const ExperienceSlide = () => (
  <div className="text-center space-y-8 max-w-3xl">
    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto mb-8">
      <Zap className="w-12 h-12" />
    </div>
    <h2 className="text-5xl font-black text-white">Chia sẻ kinh nghiệm áp dụng BMAD</h2>
    <p className="text-2xl text-foreground/60 font-light leading-relaxed italic">
      "Hành trình từ một solo developer đến việc điều hành một 'biệt đội ảo' 6 nhân sự AI..."
    </p>
    <div className="pt-12">
      <div className="inline-block px-8 py-4 bg-white/5 border border-dashed border-white/20 rounded-2xl text-white/40 font-mono">
        [ Phần chia sẻ trực tiếp của tác giả ]
      </div>
    </div>
  </div>
);

'use client';

import React from 'react';
import { cn } from '@/lib/utils';

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

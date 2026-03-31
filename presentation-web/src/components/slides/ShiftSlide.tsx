'use client';

import React from 'react';


export const ShiftSlide = () => (
  <div className="w-full max-w-5xl space-y-12">
    <h2 className="text-4xl font-bold text-center text-white">Sự Dịch Chuyển Mô Hình</h2>
    
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/5">
            <th className="p-6 text-white/40 font-sans text-sm">ĐẶC TÍNH</th>
            <th className="p-6 text-accent font-bold text-xl text-center">VIBE CODING</th>
            <th className="p-6 text-secondary font-bold text-xl text-center border-l border-white/10 bg-secondary/10">BMAD METHOD</th>
          </tr>
        </thead>
        <tbody className="text-lg">
          {[
            ["Phương Pháp", "Cảm tính, ngẫu hứng", "Có cấu trúc, chuẩn Agile"],
            ["Tài Sản Cốt Lõi", "Lịch sử chat tạm thời", "Tài liệu kỹ thuật lưu trên Git"],
            ["Quản Lý Ngữ Cảnh", "Dễ suy giảm, trôi dạt", "Cô lập ngữ cảnh, chính xác"],
            ["Tính Dự Đoán", "Rủi ro ảo giác cao", "Có thể tái tạo, tự kiểm tra chéo"],
            ["Vai Trò Lập Trình Viên", "Người gõ Prompt", "Kiến trúc sư hệ thống"]
          ].map(([label, vibe, bmad], i) => (
            <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-6 font-medium text-white/70">{label}</td>
              <td className="p-6 text-center text-accent/80 italic">{vibe}</td>
              <td className="p-6 text-center text-secondary font-bold border-l border-white/10 bg-secondary/5">{bmad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

'use client';

import React from 'react';
import { Zap } from 'lucide-react';

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

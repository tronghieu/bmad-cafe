'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Layers, 
  Warehouse, 
  Package, 
  Settings, 
  ShoppingCart, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const CapigoProjectSlide = () => {
  const modules = [
    { name: 'Task & Collaboration', icon: <Terminal className="w-5 h-5" /> },
    { name: 'Warehouse Management', icon: <Warehouse className="w-5 h-5" /> },
    { name: 'Product Catalog', icon: <Package className="w-5 h-5" /> },
    { name: 'Light Manufacture', icon: <Settings className="w-5 h-5" /> },
    { name: 'Point of Sale (POS)', icon: <ShoppingCart className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-mono text-xs uppercase tracking-widest leading-none flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                Case Study: Lưu Hiếu
             </div>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
            CAPIGO
          </h2>
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
             <span className="text-xl md:text-2xl text-accent font-bold italic">"Mini ERP for VTech"</span>
          </div>
        </div>

        <p className="text-xl text-foreground/70 leading-relaxed font-light">
          Một hệ thống quản trị nội bộ (mini ERP) được thiết kế riêng cho đặc thù domain của ngành, tích hợp nhiều module nghiệp vụ chuyên sâu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {modules.map((mod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-2xl group hover:bg-white/[0.08] hover:border-accent/20 transition-all duration-300"
            >
              <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:scale-110 transition-transform">
                {mod.icon}
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{mod.name}</span>
            </motion.div>
          ))}
          <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl">
             <span className="text-sm font-mono text-white/20 italic">And more modules...</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full bg-gradient-to-br from-accent/5 to-transparent rounded-[3rem] border border-white/10 overflow-hidden group shadow-2xl"
      >
        {/* Abstract Architectural Visualization */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
           <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 p-8">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className={`border border-white/20 rounded-sm transition-all duration-1000 ${Math.random() > 0.8 ? 'bg-accent/20 border-accent/40' : ''}`}></div>
              ))}
           </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-6">
           <div className="relative">
              <Layers className="w-32 h-32 text-accent/20 absolute -inset-4 blur-3xl" />
              <Cpu className="w-24 h-24 text-accent relative z-10 animate-pulse" />
           </div>
           
           <div className="space-y-4 max-w-sm">
              <h3 className="text-2xl font-bold text-white uppercase tracking-widest font-mono">System Integrity</h3>
              <p className="text-sm text-white/40 font-light italic">
                Cấu trúc chặt chẽ với các module được thiết kế đồng bộ, đảm bảo tính nhất quán của toàn hệ thống.
              </p>
           </div>
           
           <div className="flex gap-3 pt-6">
              <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-accent/50"></div>
              <div className="w-3 h-3 rounded-full bg-accent/20"></div>
           </div>
        </div>
        
        {/* Floating labels */}
        <div className="absolute top-10 right-10 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl text-[10px] font-mono text-accent uppercase tracking-tighter">
           Complex Domain
        </div>
        <div className="absolute bottom-10 left-10 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl text-[10px] font-mono text-white/40 uppercase tracking-tighter">
           Built with BMAD Method
        </div>
      </motion.div>
    </div>
  );
};

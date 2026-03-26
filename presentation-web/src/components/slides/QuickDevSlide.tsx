'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Terminal, GitBranch, ShieldAlert, Wrench} from 'lucide-react';

export const QuickDevSlide = () => (
    <div className="w-full max-w-5xl space-y-8">
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            className="text-center space-y-2"
        >
            <h2 className="text-5xl font-black text-white tracking-tighter">
                Quick <span className="text-accent italic">Dev</span>
            </h2>
            <p className="text-base text-white/40">
                <code className="font-mono text-accent/80">/bmad-bmm-quick-dev</code>
            </p>
        </motion.div>

        {/* Two modes */}
        <div className="grid grid-cols-2 gap-6">
            {[
                {
                    mode: 'Mode A: Tech-Spec',
                    when: 'Bạn cung cấp tech-spec-{slug}.md',
                    path: 'Bỏ qua thu thập context, đi thẳng vào thực thi',
                    recommended: true,
                    color: 'border-accent/30 bg-accent/5',
                    badge: '✓ Khuyến nghị',
                    badgeColor: 'bg-accent/10 text-accent',
                },
                {
                    mode: 'Mode B: Direct',
                    when: 'Bạn mô tả task bằng văn xuôi',
                    path: 'Thu thập context trước, xây plan, rồi thực thi',
                    recommended: false,
                    color: 'border-white/10 bg-white/5',
                    badge: 'Dự phòng',
                    badgeColor: 'bg-white/10 text-white/40',
                },
            ].map((m, i) => (
                <motion.div
                    key={i}
                    initial={{opacity: 0, x: i === 0 ? -20 : 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.2 + i * 0.1}}
                    className={`p-6 rounded-2xl border ${m.color} space-y-3`}
                >
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-white">{m.mode}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${m.badgeColor}`}>{m.badge}</span>
                    </div>
                    <p className="text-xs text-white/60"><span className="text-white/30">Khi nào: </span>{m.when}</p>
                    <p className="text-xs text-white/60"><span className="text-white/30">Luồng: </span>{m.path}</p>
                </motion.div>
            ))}
        </div>


        {/* Execute + Resolve */}
        <motion.div
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.5}}
            className="p-5 bg-accent/5 border border-accent/20 rounded-2xl space-y-2"
        >
            <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent"/>
                <p className="font-bold text-white text-sm">Triển khai</p>
            </div>
            <p className="text-xs text-white/55 leading-relaxed">
                Triển khai tất cả task <strong>tự động không dừng</strong> giữa chừng.
                <br/>
                Với mỗi task: đọc file, viết code theo conventions, viết & chạy tests, đánh dấu hoàn thành rồi chuyển
                sang task tiếp theo.
            </p>
        </motion.div>


        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.8}}
            className="p-4 bg-white/5 border border-white/10 rounded-2xl font-mono text-xs text-white/40 text-center"
        >
            Session 1: /bmad-bmm-quick-spec → tech-spec-{'{slug}'}.md
            <br/>
            Session 2: /bmad-bmm-quick-dev tech-spec-{'{slug}'}.md
        </motion.div>
    </div>
);

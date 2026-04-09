'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, MessageSquare, ListChecks, Code2, GitPullRequest, ArrowRight } from 'lucide-react';

export const ImplementationFlowInMFWSlide = () => {
  const steps = [
    {
      number: '1',
      title: 'Refinement',
      icon: MessageSquare,
      description: 'Developers understand the requirement',
      color: 'blue',
      bgClass: 'bg-blue-500/5',
      borderClass: 'border-blue-500/20',
      iconClass: 'text-blue-400',
      numberBgClass: 'bg-blue-500/10',
      numberBorderClass: 'border-blue-500/30',
    },
    {
      number: '2',
      title: 'Technical Discussion',
      icon: GitBranch,
      description: 'Decide technical approaches',
      color: 'purple',
      bgClass: 'bg-purple-500/5',
      borderClass: 'border-purple-500/20',
      iconClass: 'text-purple-400',
      numberBgClass: 'bg-purple-500/10',
      numberBorderClass: 'border-purple-500/30',
    },
    {
      number: '3',
      title: 'Breakdown Tasks',
      icon: ListChecks,
      description: 'Standardized format',
      details: ['Scope', 'Contribution', 'Criterias'],
      color: 'green',
      bgClass: 'bg-green-500/5',
      borderClass: 'border-green-500/20',
      iconClass: 'text-green-400',
      numberBgClass: 'bg-green-500/10',
      numberBorderClass: 'border-green-500/30',
    },
    {
      number: '4',
      title: 'Implementation',
      icon: Code2,
      description: 'Follow TDD to loop until all tests pass',
      color: 'yellow',
      bgClass: 'bg-yellow-500/5',
      borderClass: 'border-yellow-500/20',
      iconClass: 'text-yellow-400',
      numberBgClass: 'bg-yellow-500/10',
      numberBorderClass: 'border-yellow-500/30',
    },
    {
      number: '5',
      title: 'Review - Update',
      icon: GitPullRequest,
      description: '[Loop]',
      color: 'red',
      bgClass: 'bg-red-500/5',
      borderClass: 'border-red-500/20',
      iconClass: 'text-red-400',
      numberBgClass: 'bg-red-500/10',
      numberBorderClass: 'border-red-500/30',
    },
  ];

  return (
    <div className="w-full max-w-7xl space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <GitBranch className="w-4 h-4 text-secondary" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Process</span>
        </div>
        <h2 className="text-5xl font-black text-white tracking-tighter">
          Implementation Flow in <span className="text-secondary italic">MFW</span>
        </h2>
      </motion.div>

      <div className="relative flex items-center justify-between gap-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="flex-1 relative"
              >
                <div className={`p-4 rounded-xl ${step.bgClass} border ${step.borderClass} hover:scale-105 transition-all h-full`}>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step.numberBgClass} border-2 ${step.numberBorderClass}`}>
                      <span className={`text-lg font-black ${step.iconClass}`}>{step.number}</span>
                    </div>
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step.bgClass}`}>
                      <Icon className={`w-5 h-5 ${step.iconClass}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-xs text-white/60 leading-tight">{step.description}</p>
                      {step.details && (
                        <div className="mt-2 space-y-0.5">
                          {step.details.map((detail, j) => (
                            <p key={j} className="text-[10px] text-white/40">• {detail}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="flex-shrink-0"
                >
                  <ArrowRight className="w-6 h-6 text-white/30" />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/5 border border-secondary/20">
          <GitPullRequest className="w-4 h-4 text-secondary" />
          <p className="text-xs text-white/70">
            <span className="text-secondary font-bold">Step 5 loops back</span> to Step 4 until approval
          </p>
        </div>
      </motion.div>
    </div>
  );
};

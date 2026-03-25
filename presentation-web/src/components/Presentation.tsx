'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PresentationProps {
  children: React.ReactNode[];
}

/**
 * Main shell component to manage the slides and navigation.
 */
export default function Presentation({ children }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = children.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <main className="relative h-screen w-screen bg-background overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Navigation UI */}
      <div className="absolute top-4 right-4 flex gap-4 z-50">
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-all opacity-40 hover:opacity-100"
          title="Toggle Fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-8 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={cn(
            "p-2 bg-secondary text-secondary-foreground rounded-full transition-all hover:scale-110",
            currentSlide === 0 && "opacity-20 cursor-not-allowed hover:scale-100"
          )}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-2">
          {children.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentSlide === idx ? "bg-secondary scale-125" : "bg-border hover:bg-secondary/50"
              )}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={cn(
            "p-2 bg-secondary text-secondary-foreground rounded-full transition-all hover:scale-110",
            currentSlide === totalSlides - 1 && "opacity-20 cursor-not-allowed hover:scale-100"
          )}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="w-full max-w-6xl h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            {children[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-4 left-4 flex items-center gap-3 opacity-30 select-none">
        <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-secondary-foreground font-bold">B</div>
        <span className="text-sm tracking-widest uppercase">BMAD Method</span>
      </div>
    </main>
  );
}

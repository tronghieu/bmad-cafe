"use client";

import type { CSSProperties, ReactNode } from "react";
import { Children, useEffect, useRef, useState, useTransition } from "react";
import { Icon } from "@/components/presentation-icons";

type Direction = "forward" | "backward";

function getInitialSlide(totalSlides: number) {
  if (typeof window === "undefined") {
    return 0;
  }

  const value = Number(window.location.hash.replace("#slide-", ""));
  if (Number.isNaN(value) || value < 1 || value > totalSlides) {
    return 0;
  }

  return value - 1;
}

export function Presentation({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("forward");
  const [isPending, startTransition] = useTransition();
  const hasInitialized = useRef(false);
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (hasInitialized.current) {
      return;
    }

    hasInitialized.current = true;
    setActiveIndex(getInitialSlide(slides.length));
  }, [slides.length]);

  useEffect(() => {
    const onHashChange = () => {
      const nextIndex = getInitialSlide(slides.length);
      if (nextIndex === activeIndexRef.current) {
        return;
      }

      setDirection(nextIndex > activeIndexRef.current ? "forward" : "backward");
      startTransition(() => {
        setActiveIndex(nextIndex);
      });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [slides.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        goToSlide(Math.min(slides.length - 1, activeIndexRef.current + 1));
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goToSlide(Math.max(0, activeIndexRef.current - 1));
      }

      if (event.key === "Home") {
        event.preventDefault();
        goToSlide(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [slides.length]);

  function goToSlide(nextIndex: number) {
    if (nextIndex === activeIndexRef.current) {
      return;
    }

    setDirection(nextIndex > activeIndexRef.current ? "forward" : "backward");
    startTransition(() => {
      setActiveIndex(nextIndex);
    });
    window.history.pushState(null, "", `#slide-${nextIndex + 1}`);
  }

  return (
    <main className="deck-root slider-root">
      <section className="presentation-shell">
        <div
          key={activeIndex}
          className={`slide-shell slide-shell-${direction}`}
        >
          {slides[activeIndex]}
        </div>

        <footer className="deck-footer">
          <div className="footer-pill footer-controls">
            <button
              type="button"
              className="nav-button"
              onClick={() => goToSlide(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0 || isPending}
            >
              <Icon name="prev" className="nav-icon" />
              <span>Trước</span>
            </button>

            <div
              className="footer-progress"
              style={{ "--progress": (activeIndex + 1) / slides.length } as CSSProperties}
            >
              <div className="footer-progress-track" />
              <div className="footer-progress-fill" />
            </div>

            <div className="footer-dots" aria-label="Tiến độ slide">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`slide-dot ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Đi tới slide ${index + 1}`}
                />
              ))}
            </div>

            <span className="footer-count" aria-label="Slide hiện tại">
              <Icon name="count" className="count-icon" />
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              className="nav-button"
              onClick={() => goToSlide(Math.min(slides.length - 1, activeIndex + 1))}
              disabled={activeIndex === slides.length - 1 || isPending}
            >
              <span>Tiếp</span>
              <Icon name="next" className="nav-icon" />
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}

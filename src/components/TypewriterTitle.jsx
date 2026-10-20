import { useState, useEffect, useRef } from "react";
import "./TypewriterTitle.css";

/**
 * TypewriterTitle Component
 * Replicates the realistic character-by-character typewriter animation
 * seen on smile-zone.vercel.app with:
 * - Natural human-like variable typing speed and pause on spaces
 * - Smooth transition between two phrase parts
 * - Glowing blinking cursor that stays active while typing and for 3.5s after
 * - Zero Layout Shift (CLS: 0) via invisible ghost placeholder
 * - Full accessibility & SEO support (immediate sr-only text)
 */
export default function TypewriterTitle({
  part1 = "Begin Your Journey",
  part2 = "to Recovery",
  hasBreak = true,
  className = "",
  part1ClassName = "",
  part2ClassName = "wor-text-accent",
  cursorClassName = "",
  typeSpeed = 46,
  initialDelay = 280,
}) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const totalLength = part1.length + part2.length;

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timeout;
    if (mounted && inView) {
      if (typedCount === 0 && !isFinished) {
        timeout = setTimeout(() => {
          setTypedCount(1);
        }, initialDelay);
        return () => clearTimeout(timeout);
      }

      if (typedCount < totalLength) {
        const isAtBoundary = typedCount === part1.length;
        const currentChar =
          typedCount <= part1.length
            ? part1[typedCount - 1]
            : part2[typedCount - part1.length - 1];
        const isSpace = currentChar === " ";

        // Realistic typing delays:
        // - Slight pause at line boundary
        // - Extra pause on spaces
        // - Micro-jitter for human typing cadence
        const delay = isAtBoundary
          ? 250
          : isSpace
          ? typeSpeed + 80
          : typeSpeed + ((typedCount % 3) * 14 - 10);

        timeout = setTimeout(() => {
          setTypedCount((prev) => prev + 1);
        }, delay);
      } else {
        setIsFinished(true);
        // Keep blinking cursor for 3.5 seconds after typing finishes, then fade out
        timeout = setTimeout(() => {
          setShowCursor(false);
        }, 3500);
      }
    }
    return () => clearTimeout(timeout);
  }, [mounted, inView, typedCount, totalLength, part1, part2, typeSpeed, initialDelay, isFinished]);

  const typedPart1 = part1.slice(0, Math.min(typedCount, part1.length));
  const typedPart2 =
    typedCount > part1.length ? part2.slice(0, typedCount - part1.length) : "";
  const inPart1 = typedCount <= part1.length;
  const inPart2 = typedCount > part1.length;

  return (
    <h1 ref={ref} className={`wor-banner-title wor-typewriter-wrap ${className}`}>
      {/* 1. Invisible Ghost Layer: locks element height/width to eliminate Layout Shift (CLS) */}
      <span className="wor-typewriter-ghost" aria-hidden="true">
        <span className={part1ClassName}>{part1}</span>
        {hasBreak ? <br /> : " "}
        <span className={part2ClassName}>{part2}</span>
      </span>

      {/* 2. SEO & Screen Reader accessible text: available instantly without animation delay */}
      <span className="sr-only">
        {part1} {part2}
      </span>

      {/* 3. Visual Typewriter Layer */}
      <span className="wor-typewriter-text" aria-hidden="true">
        {mounted ? (
          <>
            <span className={part1ClassName}>{typedPart1}</span>
            {inPart1 && showCursor && (
              <span className={`wor-typewriter-cursor ${cursorClassName}`} />
            )}
            {hasBreak && typedCount > part1.length ? (
              <br />
            ) : typedCount > part1.length ? (
              " "
            ) : null}
            {typedCount > part1.length && (
              <span
                className={`${part2ClassName} ${
                  isFinished ? "wor-typewriter-accent-finished" : ""
                }`}
              >
                {typedPart2}
              </span>
            )}
            {inPart2 && showCursor && (
              <span className={`wor-typewriter-cursor ${cursorClassName}`} />
            )}
          </>
        ) : (
          <>
            <span className={part1ClassName}>{part1}</span>
            {hasBreak ? <br /> : " "}
            <span className={part2ClassName}>{part2}</span>
          </>
        )}
      </span>
    </h1>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]=+*#%&$';

// Briefly scrambles its text, then resolves it left to right.
export default function ScrambleText({ text, delay = 600, duration = 1100, className = '' }) {
  const [display, setDisplay] = useState(text);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let frame;
    let start;
    const timeout = setTimeout(() => {
      const tick = (now) => {
        start ??= now;
        const progress = Math.min(1, (now - start) / duration);
        const revealed = Math.floor(progress * text.length);
        setDisplay(
          text
            .split('')
            .map((ch, i) =>
              i < revealed || ch === ' ' ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
            )
            .join('')
        );
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [text, delay, duration, reduce]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  );
}

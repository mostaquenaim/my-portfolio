'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useFinePointer } from './hooks';

// A soft accent glow behind the page content that follows the cursor.
export default function CursorGlow() {
  const ref = useRef(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const active = fine && !reduce;

  useEffect(() => {
    if (!active) return;
    let frame;
    const move = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty('--gx', `${e.clientX}px`);
        el.style.setProperty('--gy', `${e.clientY}px`);
        el.style.opacity = '1';
      });
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(frame);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-0 transition-opacity duration-700"
      style={{
        background:
          'radial-gradient(640px circle at var(--gx, 50%) var(--gy, 30%), rgb(52 211 153 / 0.075), transparent 55%)',
      }}
    />
  );
}

'use client';

import { useRef } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';
import { useFinePointer } from './hooks';

// Card that tilts in 3D toward the cursor, with a soft accent glow that follows it.
export default function TiltCard({
  children,
  className = '',
  max = 6,
  glowSize = 420,
  onMouseEnter,
  onMouseLeave,
}) {
  const ref = useRef(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const active = fine && !reduce;

  const rotateX = useSpring(0, { stiffness: 180, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 20 });

  const handleMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
    if (active) {
      rotateY.set((px - 0.5) * max * 2);
      rotateX.set(-(py - 0.5) * max * 2);
    }
  };

  const handleLeave = (e) => {
    rotateX.set(0);
    rotateY.set(0);
    onMouseLeave?.(e);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={fine ? handleMove : undefined}
        onMouseEnter={onMouseEnter}
        onMouseLeave={handleLeave}
        style={active ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
        className={`group/tilt relative ${className}`}
      >
        {children}
        {fine && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
            style={{
              background: `radial-gradient(${glowSize}px circle at var(--mx, 50%) var(--my, 50%), rgb(52 211 153 / 0.10), transparent 45%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

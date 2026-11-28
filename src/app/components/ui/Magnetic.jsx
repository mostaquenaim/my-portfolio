'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useFinePointer } from './hooks';

// Pulls its child gently toward the cursor while hovered.
export default function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const active = fine && !reduce;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  const handleMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={active ? { x: springX, y: springY } : undefined}
      onMouseMove={active ? handleMove : undefined}
      onMouseLeave={active ? reset : undefined}
    >
      {children}
    </motion.div>
  );
}

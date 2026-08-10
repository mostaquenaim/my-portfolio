'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.12 }}
      className={`mb-12 ${className}`}
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, x: -12 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
        }}
        className="font-mono text-accent text-sm mb-2"
      >
        {eyebrow}
      </motion.h2>
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-3"
      >
        {title}
      </motion.h1>
      <motion.span
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 0.5, ease: 'easeOut' } },
        }}
        className="block h-0.5 w-14 bg-accent origin-left rounded-full"
      />
      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-muted max-w-xl mt-5"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

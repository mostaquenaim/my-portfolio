'use client';

import { FaGithub, FaLinkedin, FaCode, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import TechSphere from './3d/TechSphere';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const nameVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function HeroSection() {
  const name = 'Mostaque Ahammed Naim';
  const position = 'Senior Software Developer';
  const aboutme =
    'I build full-stack web applications and data-driven systems — currently a Senior Software Developer at Sammtech Ltd, deepening my focus on data engineering and distributed systems.';

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Content */}
        <motion.div
          className="space-y-7 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="font-mono text-sm text-accent">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={nameVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight flex flex-wrap justify-center lg:justify-start"
            aria-label={name}
          >
            {name.split(' ').map((word, wi) => (
              <span key={wi} className="inline-flex mr-[0.3em] whitespace-nowrap">
                {word.split('').map((letter, li) => (
                  <motion.span key={li} variants={letterVariants} className="inline-block">
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium text-muted">
            {position}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted max-w-lg mx-auto lg:mx-0"
          >
            {aboutme}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-md font-semibold hover:bg-accent-strong transition-colors"
              >
                View Projects
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
                >
                  <FaArrowRight size={14} />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#contact"
                className="px-6 py-3 border border-border text-foreground rounded-md font-semibold hover:border-accent hover:text-accent transition-colors block"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-6 pt-2"
          >
            <SocialLink href="https://github.com/mostaquenaim" icon={<FaGithub size={22} />} label="GitHub" />
            <SocialLink
              href="https://www.linkedin.com/in/mostaque-naim-b114571b1/"
              icon={<FaLinkedin size={22} />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://codeforces.com/profile/n4im"
              icon={<FaCode size={22} />}
              label="Codeforces"
            />
          </motion.div>
        </motion.div>

        {/* 3D Tech Sphere */}
        <motion.div
          className="w-full h-[280px] lg:h-[480px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="w-full h-full"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <TechSphere />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.2, y: -3 }}
    whileTap={{ scale: 0.95 }}
    className="text-muted hover:text-accent transition-colors"
  >
    {icon}
  </motion.a>
);

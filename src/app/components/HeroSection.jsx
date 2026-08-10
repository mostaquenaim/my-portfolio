'use client';

import { FaGithub, FaLinkedin, FaCode, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import TechSphere from './3d/TechSphere';
import { motion } from 'framer-motion';

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-accent">Hi, my name is</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {name}
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-muted">{position}</h2>

          <p className="text-base md:text-lg text-muted max-w-lg mx-auto lg:mx-0">{aboutme}</p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-md font-semibold hover:bg-accent-strong transition-colors"
            >
              View Projects
              <FaArrowRight size={14} />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded-md font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 pt-2">
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
          </div>
        </motion.div>

        {/* 3D Tech Sphere */}
        <motion.div
          className="w-full h-[280px] lg:h-[480px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <TechSphere />
        </motion.div>
      </div>
    </div>
  );
}

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-muted hover:text-accent hover:-translate-y-0.5 transition-all"
  >
    {icon}
  </a>
);

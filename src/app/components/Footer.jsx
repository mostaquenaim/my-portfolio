'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://github.com/mostaquenaim', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mostaque-naim-b114571b1/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://codeforces.com/profile/n4im', icon: FaCode, label: 'Codeforces' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 py-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-foreground font-semibold">
              mostaque<span className="text-accent">.</span>naim
            </p>
            <p className="text-sm text-muted mt-1">Software Developer</p>
          </div>

          <div className="flex gap-5">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted hover:text-accent transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-8">
          &copy; {new Date().getFullYear()} Mostaque Naim. Built with Next.js & Tailwind CSS.
        </p>
      </motion.div>
    </footer>
  );
}

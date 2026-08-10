'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode, FaPaperPlane } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/mostaque-naim-b114571b1/',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  { href: 'https://github.com/mostaquenaim', icon: FaGithub, label: 'GitHub' },
  { href: 'https://codeforces.com/profile/n4im', icon: FaCode, label: 'Codeforces' },
];

export default function ContactSection() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const form = e.target;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="07. Contact"
          title="Get In Touch"
          description="Have a role, project, or just want to say hi? My inbox is open — I try to reply to everyone within a day or two."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="mt-1 text-accent">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-muted mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:mostaque.naim.42140@gmail.com"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    mostaque.naim.42140@gmail.com
                  </a>
                </div>
              </div>

              <h3 className="text-sm font-mono uppercase tracking-wider text-muted mb-4">
                Elsewhere
              </h3>
              <div className="flex gap-4">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted mt-10">Based in Dhaka, Bangladesh</p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-xl p-8"
          >
            <h2 className="text-lg font-semibold text-foreground mb-6">Send Me a Message</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground placeholder:text-muted/60 focus:ring-1 focus:ring-accent focus:border-accent outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground placeholder:text-muted/60 focus:ring-1 focus:ring-accent focus:border-accent outline-none transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground placeholder:text-muted/60 focus:ring-1 focus:ring-accent focus:border-accent outline-none transition resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-background font-semibold py-2.5 rounded-md hover:bg-accent-strong transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <motion.span
                  className="inline-flex"
                  animate={status === 'submitting' ? { rotate: 360 } : { rotate: 0 }}
                  transition={
                    status === 'submitting'
                      ? { duration: 0.8, repeat: Infinity, ease: 'linear' }
                      : { duration: 0.2 }
                  }
                >
                  <FaPaperPlane size={13} />
                </motion.span>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </motion.button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-accent text-center"
                  >
                    Thanks! Your message has been sent — I'll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-red-400 text-center"
                  >
                    Something went wrong. Please email me directly instead.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

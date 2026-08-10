'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Projects', path: '#projects' },
  { name: 'Research', path: '#research' },
  { name: 'Skills', path: '#skills' },
  { name: 'Achievements', path: '#achievements' },
  { name: 'Contact', path: '#contact' },
]

const socialLinks = [
  { href: 'https://github.com/mostaquenaim', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mostaque-naim-b114571b1/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://codeforces.com/profile/n4im', icon: FaCode, label: 'Codeforces' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'research', 'skills', 'achievements', 'contact']
      const scrollY = window.scrollY + 120

      let found = ''
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          found = section
          break
        }
      }

      setActiveSection(found)
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (link) => activeSection && link.path === `#${activeSection}`

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled || isOpen ? 'bg-background/90 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-left"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#home"
            className="font-mono text-lg font-semibold text-foreground hover:text-accent transition-colors"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
              mostaque<span className="text-accent">.</span>naim
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-sm font-medium transition-colors ${
                  isActive(link) ? 'text-accent' : 'text-muted hover:text-foreground'
                }`}
              >
                {link.name}
                {isActive(link) && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Social Icons and CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#contact"
                className="px-4 py-2 border border-accent/40 text-accent text-sm font-medium rounded-md hover:bg-accent/10 transition-colors"
              >
                Let's talk
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="pb-6 space-y-1 pt-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                  >
                    <Link
                      href={link.path}
                      className={`block px-2 py-2.5 rounded-md text-base font-medium ${
                        isActive(link) ? 'text-accent' : 'text-muted hover:text-foreground'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: navLinks.length * 0.04 }}
                  className="flex gap-5 px-2 pt-3"
                >
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-muted hover:text-foreground transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
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
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#home"
            className="font-mono text-lg font-semibold text-foreground hover:text-accent transition-colors"
          >
            mostaque<span className="text-accent">.</span>naim
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link) ? 'text-accent' : 'text-muted hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons and CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <Link
              href="#contact"
              className="px-4 py-2 border border-accent/40 text-accent text-sm font-medium rounded-md hover:bg-accent/10 transition-colors"
            >
              Let's talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-1 border-t border-border pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`block px-2 py-2.5 rounded-md text-base font-medium ${
                  isActive(link) ? 'text-accent' : 'text-muted hover:text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-5 px-2 pt-3">
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
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

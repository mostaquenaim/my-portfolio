'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'achievements', 'contact']
      const scrollY = window.scrollY + 100

      let found = ''
      for (let section of sections) {
        const el = document.getElementById(section)
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          found = section
          break
        }
      }

      setActiveSection(found)
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Achievements', path: '#achievements' },
    { name: 'Contact', path: '#contact' },
  ]

  const getLinkClass = (link) => {
    if (link.path === '/' && pathname === '/') return 'text-blue-600'
    if (link.path.startsWith('#') && activeSection && link.path === `#${activeSection}`) return 'text-blue-600'
    return 'text-gray-700 hover:text-blue-500'
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              <Image
                src="/images/strix-g-2022-green.png" // Make sure this path is correct
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg font-medium transition-colors ${getLinkClass(link)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons and Hire Me Button - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4">
              <a href="https://github.com/mostaquenaim" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mostaque-naim-b114571b1/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://codeforces.com/profile/MostaqueNaimAIUB" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <FaCode size={20} />
              </a>
            </div>
            <Link
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`block text-lg font-medium ${getLinkClass(link)}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/mostaquenaim" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mostaque-naim-b114571b1/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://codeforces.com/profile/MostaqueNaimAIUB" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <FaCode size={20} />
              </a>
            </div>
            <Link
              href="#contact"
              className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
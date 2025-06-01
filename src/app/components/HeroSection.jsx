'use client';

import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import Link from 'next/link';
import TechSphere from './3d/TechSphere';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const name = `Mostaque Ahammed Naim`
  const position = `Junior Software Developer`
  const aboutme = `I craft performant, scalable, and modern web solutions using cutting-edge technologies. Currently coding at Sammtech Ltd as a passionate Software Developer.`
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Left - 3D Sphere */}
        <motion.div 
          className="w-full h-[300px] lg:h-[500px] flex justify-center items-center bg-black"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <TechSphere />
        </motion.div>

        {/* Right - Hero Content */}
        <motion.div 
          className="w-full space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            {name}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {position}
          </h2>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            {aboutme}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link 
              href="#about" 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 shadow-lg transition-all"
            >
              Learn More
            </Link>
            <Link 
              href="#projects" 
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all"
            >
              View Projects
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 pt-6">
            <SocialLink href="https://github.com/mostaquenaim" icon={<FaGithub size={26} />} />
            <SocialLink href="https://www.linkedin.com/in/mostaque-naim-b114571b1/" icon={<FaLinkedin size={26} />} />
            <SocialLink href="https://codeforces.com/profile/MostaqueNaimAIUB" icon={<FaCode size={26} />} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-700 hover:text-blue-600 transition-transform hover:scale-110"
  >
    {icon}
  </a>
);
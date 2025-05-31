'use client';

import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Portfolio3d from '../components/3d/Portfolio3d';

export default function HeroSection() {
  return (
    <div >
        {/* Left - 3D Sphere */}
        <motion.div 
          className="w-full h-screen flex justify-center items-center bg-black"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Portfolio3d />
        </motion.div>
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
'use client';

import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Magnetic from './ui/Magnetic';

const RESUME_URL =
  'https://drive.google.com/drive/folders/18ANawCWd0tKtwUYtc6hN-DSnl2UzHoOt?usp=sharing';

const interests = [
  'Payments & Integrations',
  'Backend Architecture',
  'Production Infrastructure',
  'Problem Solving',
];

const languages = [
  'Bangla (Native)',
  'English (Advanced · IELTS 7.5)',
  'Hindi',
];

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <SectionHeading eyebrow="01. About" title="Who I am" />

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-28"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/thesis-day-formal-jpg.jpg"
              alt="Mostaque Naim"
              fill
              sizes="(min-width: 1024px) 288px, 224px"
              className="object-cover -scale-x-100"
              priority
            />
          </motion.div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 space-y-8"
        >
          <div className="space-y-4 text-lg text-muted leading-relaxed">
            <p>
              I'm a full-stack developer from Dhaka, Bangladesh with about 3 years of building
              and running production systems for paying clients, mainly on Next.js, NestJS,
              TypeScript and PostgreSQL. I've shipped payment-heavy platforms with bKash
              installments, SSLCOMMERZ, courier webhooks and investor KYC.
            </p>
            <p>
              I deploy and operate my own releases (Docker, Nginx, DigitalOcean), and at
              SammTech I grew from intern to Senior Software Developer, leading a team, running
              code reviews and handling intern hiring.
            </p>
            <p>
              I hold a BSc in Computer Science and Engineering (Major: Software Engineering) from
              AIUB with a 3.94/4.00 CGPA, Magna Cum Laude. I'm open to remote roles and available
              immediately.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
              Interests
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.06 }}
              className="flex flex-wrap gap-2"
            >
              {interests.map((interest) => (
                <motion.span
                  key={interest}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="px-3 py-1.5 bg-surface border border-border rounded-full text-sm text-foreground cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 bg-surface border border-border rounded-full text-sm text-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <Magnetic>
          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-md font-semibold hover:bg-accent-strong transition-colors"
          >
            <FaDownload size={14} />
            View Resume
          </motion.a>
          </Magnetic>
        </motion.div>
      </div>
    </div>
  );
}

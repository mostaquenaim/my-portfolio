'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const experience = [
  {
    role: 'Senior Software Developer',
    company: 'SammTech Ltd, Dhaka',
    period: 'Jan 2026 — Oct 2026',
    points: [
      'Led the full development lifecycle of multiple production client projects and managed a team of developers.',
      'Architected a client investment platform (Next.js, NestJS, Prisma, Turborepo) with investor KYC, bKash installment payments and a monthly profit-calculation engine, split across two servers by data sensitivity.',
      'Audited a piece-level inventory system and found a critical double-count bug in courier webhook return handling.',
      'Ran intern hiring: screened 500+ applicants, led code reviews, hired two interns and mentored them.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'SammTech Ltd, Dhaka',
    period: 'Jan 2025 — Jan 2026',
    points: [
      'Delivered production e-commerce platforms on NestJS, PostgreSQL and Next.js: inventory, orders, admin and a custom product configurator.',
      'Deployed and operated production on VPS/DigitalOcean (Docker Compose, PM2, Nginx); resolved a production Prisma schema drift.',
    ],
  },
  {
    role: 'Junior Software Developer',
    company: 'SammTech Ltd, Dhaka',
    period: 'Jan 2024 — Jan 2025',
    points: [
      'Took ownership of full-stack features end to end across client e-commerce and business projects.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'SammTech Ltd, Dhaka',
    period: 'Sep 2023 — Jan 2024',
    points: [
      "Ramped up on the company's full-stack stack and shipped early feature work across multiple client projects.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <SectionHeading eyebrow="02. Experience" title="Where I've worked" />

      <div className="max-w-3xl space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={job.role + job.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="relative pl-8 border-l-2 border-border"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring' }}
              viewport={{ once: true }}
              className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
              <h3 className="text-lg font-semibold text-foreground">
                {job.role} &middot; <span className="text-muted font-normal">{job.company}</span>
              </h3>
              <span className="text-sm font-mono text-muted">{job.period}</span>
            </div>
            <ul className="space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted">
                  <span className="text-accent mt-1.5 shrink-0">&#8226;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

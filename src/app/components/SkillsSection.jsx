'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiNestjs,
  SiExpress,
  SiNodedotjs,
  SiPrisma,
  SiTypeorm,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiNginx,
  SiDigitalocean,
  SiVercel,
  SiApachespark,
  SiApachehadoop,
} from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import { TbCloudCog, TbGitPullRequest } from 'react-icons/tb';

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Framer Motion', icon: SiFramer },
      { name: 'Three.js', icon: SiThreedotjs },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'TypeORM', icon: SiTypeorm },
      { name: 'REST APIs', icon: TbGitPullRequest },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    label: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub Actions / CI-CD', icon: SiGithub },
      { name: 'Nginx', icon: SiNginx },
      { name: 'PM2', icon: VscServerProcess },
      { name: 'DigitalOcean', icon: SiDigitalocean },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
];

const exploring = [
  { name: 'Data Engineering', icon: TbCloudCog },
  { name: 'Distributed Systems', icon: TbCloudCog },
  { name: 'Big Data & Warehousing', icon: TbCloudCog },
  { name: 'Cloud Computing', icon: TbCloudCog },
  { name: 'Apache Spark', icon: SiApachespark },
  { name: 'Hadoop', icon: SiApachehadoop },
  { name: 'MLOps', icon: TbCloudCog },
];

export default function SkillsSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <SectionHeading eyebrow="05. Skills" title="What I work with" />

      <div className="space-y-8 mb-12">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
              {group.label}
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.04 }}
              className="flex flex-wrap gap-3"
            >
              {group.skills.map(({ name, icon: Icon }) => (
                <motion.span
                  key={name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.85 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="flex items-center gap-2 px-3.5 py-2 bg-surface border border-border rounded-lg text-sm text-foreground hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                >
                  <Icon size={16} />
                  {name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-surface border border-border rounded-xl p-6"
      >
        <p className="text-xs font-mono uppercase tracking-wider text-accent mb-1">
          Currently exploring
        </p>
        <p className="text-sm text-muted mb-4">
          Deepening my focus toward data engineering and distributed systems.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.04 }}
          className="flex flex-wrap gap-3"
        >
          {exploring.map(({ name, icon: Icon }) => (
            <motion.span
              key={name}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-2 px-3.5 py-2 bg-background border border-dashed border-border rounded-lg text-sm text-muted cursor-default"
            >
              <Icon size={16} />
              {name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

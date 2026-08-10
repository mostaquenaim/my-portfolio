import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const mainProjects = [
  {
    title: 'TahamsBD',
    description:
      'Full-featured e-commerce platform for a clothing brand — has generated over BDT 250,000 in sales, including courier/order data analysis and business analytics.',
    tags: ['Next.js', 'React', 'NestJS', 'PostgreSQL'],
    link: 'https://tahamsbd.com',
    image: '/images/tahams-website-mock.png',
  },
  {
    title: 'Ondorkotha',
    description:
      'Furniture e-commerce platform with series/category catalog management, order handling and a fully custom admin backend.',
    tags: ['Next.js', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Sammtech Works',
    description: 'Corporate web apps and marketing sites built during my time at Sammtech.',
    tags: ['Next.js'],
    link: 'https://samm-tech.net/',
    image: '/images/sammtech-website-mock.png',
  },
];

const otherProjects = [
  {
    title: 'Banglar Choya',
    description: 'Full-stack real-estate platform covering listings, search and backend APIs.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
  },
  {
    title: 'Lovelife Memories',
    description: 'Photography brand website with a CMS-driven gallery.',
    tags: ['Next.js', 'Tailwind CSS', 'Contentful'],
  },
  {
    title: 'Driver Drowsiness Detection System',
    description: 'Real-time driver alertness detection using image processing, machine learning and an Arduino UNO.',
    tags: ['Python', 'OpenCV', 'Arduino'],
  },
  {
    title: 'Virtual Shuttle',
    description: 'Gyroscope-controlled navigation prototype for an accessible mobility device.',
    tags: ['Arduino', 'C++'],
  },
];

function MainProjectCard({ project, index }) {
  const Wrapper = project.link ? motion.a : motion.div;
  const linkProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...linkProps}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors flex flex-col"
    >
      <div className="h-44 relative overflow-hidden border-b border-border">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-surface-hover to-background flex items-center justify-center">
            <span className="font-mono text-2xl text-muted/60">{project.title}</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-background border border-border rounded-md text-xs font-mono text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          {project.link ? (
            <span className="text-accent text-sm font-medium inline-flex items-center gap-1.5">
              View Project
              <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </span>
          ) : (
            <span className="text-xs font-mono uppercase tracking-wider text-muted">
              Private / Client Project
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default function ProjectsSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-mono text-accent text-sm mb-2">03. Work</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Projects</h1>
      </motion.div>

      {/* Main Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {mainProjects.map((project, index) => (
          <MainProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Other Projects */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-lg font-semibold text-foreground mb-6"
      >
        Other Work
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-surface border border-border rounded-xl p-5"
          >
            <h4 className="font-medium text-foreground mb-1.5">{project.title}</h4>
            <p className="text-sm text-muted mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-background border border-border rounded-md text-xs font-mono text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

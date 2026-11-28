'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import Magnetic from './ui/Magnetic';
import { useFinePointer, useMediaQuery } from './ui/hooks';

// Each project shows one of: `video` (+ `poster`), a static `image`, or a
// terminal panel built from `highlights`.
const mainProjects = [
  {
    title: 'Ondorkotha',
    period: 'Dec 2025 — Aug 2026',
    description:
      'Furniture and home decor e-commerce platform. Production NestJS backend with catalog, inventory, checkout and real-time order updates; SSLCOMMERZ payments and Pathao courier webhooks; JWT + Google OAuth with RBAC; stock reservation, refunds and fraud detection (stopped an SMS-pumping attack); Puppeteer PDFs and TSPL thermal labels for barcode-tracked, piece-level inventory; a multi-courier layer (Pathao, RedX, Steadfast, Paperfly); and server-side Pixel/GTM tracking with SHA-256 hashed PII.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Prisma', 'Redis', 'Bull', 'Socket.IO', 'Puppeteer'],
    links: [
      { label: 'Backend Code', href: 'https://github.com/mostaquenaim/furniture-website' },
      { label: 'Frontend Code', href: 'https://github.com/mostaquenaim/furniture-frontend' },
    ],
    terminal: 'ondorkotha',
    highlights: [
      'SSLCOMMERZ payments, refunds & stock reservation',
      'Couriers: Pathao · RedX · Steadfast · Paperfly',
      'Real-time order updates over Socket.IO',
      'Fraud detection — stopped an SMS-pumping attack',
      'Barcode-tracked, piece-level inventory + TSPL labels',
      'Server-side Pixel/GTM with SHA-256 hashed PII',
    ],
  },
  {
    title: 'Influencer Portfolio Sites',
    description:
      'A set of conversion-focused portfolio sites for Bangladeshi content creators, each with its own visual identity. Fashion & beauty (AYRA): audience stats, a media kit with follower growth and demographics, priced collaboration packages and a lookbook. Food & travel (Bite & Roam): a filterable YouTube/Instagram/TikTok video grid, campaign case studies and a multi-step collaboration builder with a live message preview. Lifestyle (dinlipi): a "day in the life" timeline that places brands into moments, receipt-style collab history and brand kits. Every brief form generates a prefilled WhatsApp message.',
    tags: ['Landing Pages', 'Responsive UI', 'Media Kit', 'WhatsApp Integration', 'Bilingual (EN/BN)'],
    links: [
      { label: 'Fashion — AYRA', href: 'https://influencer-demo-website.mostaquenaim.com/ayra/' },
      { label: 'Food & Travel', href: 'https://influencer-demo-website.mostaquenaim.com/food-travel/' },
      { label: 'Lifestyle', href: 'https://influencer-demo-website.mostaquenaim.com/lifestyle/' },
    ],
    video: '/previews/influencers.mp4',
    poster: '/previews/influencers.webp',
    url: 'influencer-demo-website.mostaquenaim.com',
  },
  {
    title: 'TahamsBD',
    description:
      'Full-featured e-commerce platform for a clothing brand — has generated over BDT 250,000 in sales, including courier/order data analysis and business analytics.',
    tags: ['Next.js', 'React', 'NestJS', 'PostgreSQL'],
    links: [{ label: 'Visit Site', href: 'https://tahamsbd.com' }],
    video: '/previews/tahams.mp4',
    poster: '/previews/tahams.webp',
    url: 'tahamsbd.com',
  },
  {
    title: 'Investment Platform',
    description:
      'Client investment platform with investor KYC, bKash installment payments and a monthly profit-calculation engine, split across two servers by data sensitivity.',
    tags: ['Next.js', 'NestJS', 'Prisma', 'Turborepo', 'bKash'],
    terminal: 'investment-platform',
    highlights: [
      'Investor KYC onboarding',
      'bKash installment payments',
      'Monthly profit-calculation engine',
      'Two servers, split by data sensitivity',
      'Turborepo monorepo shared across apps',
    ],
  },
  {
    title: 'Sammtech Works',
    description: 'Corporate web apps and marketing sites built during my time at Sammtech.',
    tags: ['Next.js'],
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

function WindowDots() {
  return (
    <div className="flex gap-1.5 shrink-0">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
    </div>
  );
}

// Browser-window frame with a looping preview clip. Plays on hover with a mouse,
// or while on screen on touch devices. Reduced motion keeps the still poster.
function BrowserPreview({ project, hovered }) {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const inView = useInView(frameRef, { amount: 0.6 });
  const [playing, setPlaying] = useState(false);

  const shouldPlay = !reduce && (fine ? hovered : inView);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (shouldPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  return (
    <div
      ref={frameRef}
      className="rounded-xl overflow-hidden border border-border bg-background shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-3 px-3.5 py-2.5 border-b border-border bg-surface-hover">
        <WindowDots />
        <div className="flex-1 min-w-0 px-3 py-1 rounded-md bg-background/70 text-[11px] font-mono text-muted truncate text-center">
          {project.url}
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-background">
        {project.video ? (
          <>
            <video
              ref={videoRef}
              src={project.video}
              poster={project.poster}
              muted
              loop
              playsInline
              preload="none"
              onPlaying={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label={`${project.title} preview`}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {fine && !reduce && (
              <span
                className={`absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur border border-border text-[11px] font-mono text-muted transition-opacity duration-300 ${
                  playing ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <FaPlay size={8} className="text-accent" />
                Hover to preview
              </span>
            )}
          </>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover/tilt:scale-[1.04]"
          />
        )}
      </div>
    </div>
  );
}

// Terminal-style panel for projects without a public preview.
function TerminalPanel({ project }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const show = inView || reduce;

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden border border-border bg-background shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-3 px-3.5 py-2.5 border-b border-border bg-surface-hover">
        <WindowDots />
        <span className="flex-1 text-center text-[11px] font-mono text-muted truncate">
          ~/{project.terminal}
        </span>
      </div>
      <div className="aspect-[16/10] p-5 md:p-7 font-mono text-[12px] md:text-sm leading-relaxed overflow-hidden">
        <p className="text-muted">
          <span className="text-accent">$</span> {project.terminal} --highlights
        </p>
        <ul className="mt-4 space-y-2">
          {project.highlights.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: -8 }}
              animate={show ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: reduce ? 0 : 0.25 + i * 0.18 }}
              className="flex gap-3 text-foreground/90"
            >
              <span className="text-accent shrink-0">✓</span>
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>
        <motion.p
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ delay: reduce ? 0 : 0.35 + project.highlights.length * 0.18 }}
          className="mt-4 text-muted"
        >
          <span className="text-accent">$</span>{' '}
          <span className="inline-block w-2 h-4 align-middle bg-accent animate-pulse" />
        </motion.p>
      </div>
    </div>
  );
}

function ProjectMedia({ project, hovered }) {
  if (project.highlights) return <TerminalPanel project={project} />;
  return <BrowserPreview project={project} hovered={hovered} />;
}

function ProjectLinks({ project }) {
  if (!project.links) {
    return (
      <span className="text-xs font-mono uppercase tracking-wider text-muted">
        Private / Client Project
      </span>
    );
  }
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-3">
      {project.links.map(({ label, href }) => (
        <Magnetic key={href} strength={0.2}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-border bg-background/60 text-sm font-medium text-accent hover:border-accent/60 hover:bg-accent/10 transition-colors"
          >
            {label}
            <FaArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        </Magnetic>
      ))}
    </div>
  );
}

function ShowcaseCard({ project, index, total, progress, stack }) {
  const [hovered, setHovered] = useState(false);
  // Earlier cards shrink slightly as later ones slide over them.
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - index) * 0.035]);
  const flipped = index % 2 === 1;

  return (
    <div
      className={
        stack
          ? 'h-screen sticky top-0 flex items-center pt-16'
          : 'py-4'
      }
    >
      <motion.div
        style={stack ? { scale, top: `calc(-4vh + ${index * 22}px)` } : undefined}
        className="relative w-full origin-top"
      >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <TiltCard
          max={3}
          glowSize={700}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="bg-surface border border-border rounded-2xl p-5 md:p-8 hover:border-accent/40 transition-colors shadow-[0_-12px_40px_-12px_rgb(0_0_0/0.7)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-7 lg:gap-10 items-center">
            <div className={flipped ? 'lg:order-2' : ''}>
              <ProjectMedia project={project} hovered={hovered} />
            </div>

            <div className="flex flex-col">
              <p className="font-mono text-xs text-accent mb-3">
                {String(index + 1).padStart(2, '0')}
                <span className="text-muted"> / {String(total).padStart(2, '0')}</span>
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {project.title}
              </h3>
              {project.period && (
                <p className="text-xs font-mono text-muted mb-1">{project.period}</p>
              )}
              <p className="text-sm text-muted leading-relaxed mt-3 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-background border border-border rounded-md text-xs font-mono text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ProjectLinks project={project} />
            </div>
          </div>
        </TiltCard>
      </motion.div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px) and (min-height: 700px)');
  const stack = isDesktop && !reduce;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <SectionHeading eyebrow="03. Work" title="Projects" />

      {/* Main projects: sticky stacking showcase on desktop, simple list elsewhere */}
      <div ref={containerRef} className="relative mb-20">
        {mainProjects.map((project, index) => (
          <ShowcaseCard
            key={project.title}
            project={project}
            index={index}
            total={mainProjects.length}
            progress={scrollYProgress}
            stack={stack}
          />
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
            className="h-full [&>div]:h-full"
          >
            <TiltCard
              max={8}
              glowSize={260}
              className="h-full bg-surface border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
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
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

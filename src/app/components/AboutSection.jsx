import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

const interests = [
  'Logic & Problem Solving',
  'Data Systems',
  'Software Engineering',
  'Machine Learning',
];

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-mono text-accent text-sm mb-2">01. About</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Who I am</h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-28">
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden">
              <Image
                src="/images/thesis-day-formal-jpg.jpg"
                alt="Mostaque Naim"
                fill
                sizes="(min-width: 1024px) 288px, 224px"
                className="object-cover -scale-x-100"
                priority
              />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="space-y-4 text-lg text-muted leading-relaxed">
              <p>
                I'm a software developer from Bangladesh with professional experience building
                full-stack web applications, backend systems, and data-driven solutions. I hold a
                BSc in Software Engineering from AIUB with a 3.94/4.00 CGPA and Magna Cum Laude
                distinction.
              </p>
              <p>
                My current interests are moving deeper into data engineering, distributed
                systems, cloud computing, and large-scale data processing. I enjoy solving complex
                problems at the intersection of software, data, and real-world business needs.
              </p>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-surface border border-border rounded-full text-sm text-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/cv/mostaque-naim-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-md font-semibold hover:bg-accent-strong transition-colors"
            >
              <FaDownload size={14} />
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { FaAward, FaLaptopCode, FaSitemap, FaBriefcase, FaLightbulb, FaCertificate } from 'react-icons/fa';

const achievements = [
  {
    title: "Dean's Award (5 times)",
    period: '2020 - 2023',
    description: "Given twice a year to students who take 15+ credits and achieve a 3.75+ CGPA without a B or lower in any course.",
    icon: FaAward,
  },
  {
    title: '6th DRMC International Tech Carnival',
    period: '2023',
    description: 'Competed in an online programming contest at the DRMC International Tech Carnival.',
    icon: FaLaptopCode,
  },
  {
    title: 'Data Structures & Algorithms',
    period: '2023',
    description: 'Completed an online DSA course by Sakshar Chakravarty, lecturer at the Dept. of CSE, BUET, via Bohubrihi.',
    icon: FaSitemap,
  },
  {
    title: 'Finalist - Dexterity',
    period: '2023',
    description: 'Reached the finals of Dexterity, an intra-AIUB case-solving competition hosted by the AIUB Business Club.',
    icon: FaBriefcase,
  },
  {
    title: '2nd Round - CTO Forum Hackathon',
    period: '2022',
    description: 'Presented a farming-growth product idea and advanced to the second round.',
    icon: FaLightbulb,
  },
  {
    title: 'CISCO IT Essentials',
    period: '2020',
    description: 'Completed the IT Essentials certification course by Cisco.',
    icon: FaCertificate,
  },
]

const competitiveStats = [
  { label: 'Problems Solved', value: '300+' },
  { label: 'Highest Rating', value: '1160' },
  { label: 'Hardest Problem Solved', value: '1700' },
  { label: 'Contests Participated', value: '25+' },
]

export default function Achievements() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-mono text-accent text-sm mb-2">06. Education</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Education & Achievements
        </h1>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-surface border border-border rounded-xl p-6 md:p-8 mb-16"
      >
        <h3 className="text-lg font-semibold text-foreground mb-1">BSc in Software Engineering</h3>
        <p className="text-muted mb-4">American International University&ndash;Bangladesh &middot; Jan 2020 &ndash; Dec 2023</p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground">
            CGPA: 3.94 / 4.00
          </span>
          <span className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-accent">
            Magna Cum Laude
          </span>
          <span className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground">
            5&times; Dean's Award
          </span>
        </div>
      </motion.div>

      {/* Participation and Certification */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-foreground mb-8">
          Awards & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <FlipCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </div>

      {/* Competitive Programming */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-surface border border-border rounded-xl p-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Competitive Programming
            </h3>
            <p className="text-muted mb-6">
              I compete regularly on Codeforces to sharpen my problem-solving and algorithmic
              thinking.
            </p>
            <a
              href="https://codeforces.com/profile/n4im"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-accent text-background rounded-md text-sm font-semibold hover:bg-accent-strong transition-colors"
            >
              View Codeforces Profile
            </a>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {competitiveStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background border border-border p-4 rounded-lg text-center"
              >
                <p className="text-2xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

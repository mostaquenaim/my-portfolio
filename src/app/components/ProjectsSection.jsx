import { motion } from 'framer-motion';

const mainProjects = [
  {
    title: "Tahams BD",
    description: "Full-featured e-commerce platform for a clothing brand.",
    tags: ["Nextjs","React","e-commerce", "Nestjs", "PostgreSQL"],
    link: "https://tahamsbd.com",
    image: "/images/tahams-website-mock.png"
  },
  {
    title: "Lovelife Memories",
    description: "Photography Brand Website.",
    tags: ["Next.js", "Tailwind CSS", "Contentful"],
    link: "https://lovelifememories.com",
    image: "/images/llm-website-mock.png"
  },
  {
    title: "Sammtech Works",
    description: "Corporate web apps and services developed during job at Sammtech.",
    tags: ["Nextjs"],
    link: "https://samm-tech.net/",
    image: "/images/sammtech-website-mock.png"
  },
];

const otherProjects = [
  {
    title: "Driver Drowsiness Detection System",
    description: "Image Processing, Machine Learning and Arduino UNO",
    image: "/images/drowsiness.jpg"
  },
  {
    title: "Virtual Shuttle",
    description: "Click to see detailed video",
    image: "/images/gyro.jpg"
  },
  {
    title: "KDBO Research",
    description: "Research work using ontology-based knowledge discovery.",
    image: "/images/kdbo.jpg"
  }
];

export default function ProjectsSection() {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent works that showcase my professional and academic skills.
        </p>
      </motion.div>

      {/* Main Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {mainProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-48 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

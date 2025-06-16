import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-12 items-center"
      >
        {/* Profile Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-shadow">
            <Image
              src="/images/thesis-day-formal-jpg.jpg" 
              alt="Mostaque Naim"
              fill
              className="object-cover hover:scale-105 transition-transform"
              priority
            />
          </div>
        </div>

        {/* About Content */}
        <div className="w-full lg:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          
          <p className="text-lg text-gray-700">
            I'm Mostaque Ahammed Naim, a passionate Full Stack Developer with experience in building web applications using modern technologies like React, Next.js, NestJS, and more.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Full Stack Developer Intern</h4>
                  <p className="text-gray-600">Sammtech Ltd | Sept 2023 - Jan 2024</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Junior Software Developer (Frontend)</h4>
                  <p className="text-gray-600">Sammtech Ltd | Jan 2024 - Present</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">BSc in CSE</h4>
                  <p className="text-gray-600">American International University - Bangladesh</p>
                  <p className="text-gray-600">CGPA: 3.94 | Jan 2020 - Dec 2023</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'ReactJS', 'Next.js', 'Tailwind CSS', 'NestJS', 'ExpressJS',
                'PostgreSQL', 'MongoDB', 'JavaScript', 'TypeScript', 'C++',
                'Git', 'Docker', 'Node.js'
              ].map((skill) => (
                <motion.span 
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Download CV Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <a 
              href="/cv/mostaque-naim-cv.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              <FaDownload className="mr-2" />
              Download CV
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
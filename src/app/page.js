'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50">
      
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <AboutSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-gray-50">
          <ProjectsSection />
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24">
          <AchievementsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50">
          <ContactSection />
        </section>
      </main>

    </div>
  );
}
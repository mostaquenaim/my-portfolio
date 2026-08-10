'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ResearchSection from './components/ResearchSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-24">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 border-t border-border scroll-mt-20">
          <AboutSection />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 border-t border-border scroll-mt-20">
          <ExperienceSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 border-t border-border scroll-mt-20">
          <ProjectsSection />
        </section>

        {/* Research Section */}
        <section id="research" className="py-24 md:py-32 border-t border-border scroll-mt-20">
          <ResearchSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 md:py-32 border-t border-border scroll-mt-20">
          <SkillsSection />
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 md:py-32 border-t border-border scroll-mt-20">
          <AchievementsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 border-t border-border scroll-mt-20">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BentoGrid from '@/components/BentoGrid';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import PublicationSection from '@/components/PublicationSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CyberMatrixBackground from '@/components/CyberMatrixBackground';
import TerminalWidget from '@/components/TerminalWidget';

const Index = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen relative font-sans selection:bg-[#ffff00] selection:text-black dark:selection:bg-[#00FF66] dark:selection:text-[#0B0F19] text-foreground bg-background transition-colors duration-200">
      {/* Dynamic Cyber Matrix canvas stream */}
      <CyberMatrixBackground />

      <Navigation onOpenTerminal={() => setIsTerminalOpen(true)} />
      <main className="relative z-10">
        <HeroSection onOpenTerminal={() => setIsTerminalOpen(true)} />
        <AboutSection />
        <BentoGrid />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <PublicationSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Interactive Cyber CLI Terminal Widget */}
      <TerminalWidget
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onToggle={() => setIsTerminalOpen(!isTerminalOpen)}
      />
    </div>
  );
};

export default Index;

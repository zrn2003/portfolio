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

const Index = () => {
  return (
    <div className="min-h-screen relative font-jakarta selection:bg-[#ffff00] selection:text-black text-foreground bg-background transition-colors duration-200">
      <Navigation />
      <main>
        <HeroSection />
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
    </div>
  );
};

export default Index;

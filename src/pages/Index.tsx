import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BentoGrid from '@/components/BentoGrid';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      {/* Elegance & High-End Polish Light Theme Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none dark:hidden bg-[var(--background)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-60 blur-[100px]" />
        <div className="absolute left-1/3 bottom-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-secondary/10 opacity-60 blur-[120px]" />
      </div>

      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <BentoGrid />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

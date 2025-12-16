import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="space-y-8">
            <div className="space-y-4 opacity-0 animate-fade-up">
              <p className="text-primary font-medium tracking-wide">
                Hello, I'm
              </p>
              <h1 className="font-sora text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Zishan Nadaf
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
                Full-Stack Developer & AI Enthusiast crafting innovative solutions 
                with modern technologies.
              </p>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 opacity-0 animate-fade-up delay-200">
              {['React', 'Python', 'Java', 'Node.js', 'Machine Learning', 'Cybersecurity'].map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-up delay-300">
              <a href="#projects" className="btn-primary text-center">
                View My Work
              </a>
              <a href="#contact" className="btn-outline text-center">
                Get In Touch
              </a>
              <a 
                href="/Zishan_Nadaf_Resume.pdf" 
                download
                className="btn-outline text-center inline-flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 pt-8 opacity-0 animate-fade-up delay-400">
              <a
                href="https://github.com/zrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/zishanrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:zishanrn2003@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="h-px w-16 bg-border" />
              <span className="text-sm text-muted-foreground">Connect with me</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a 
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

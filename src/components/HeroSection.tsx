import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack Developer & AI Enthusiast';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-scan" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center">
        <div className="space-y-8 opacity-0 animate-fade-in">
          {/* Glitch text effect */}
          <div className="space-y-2">
            <p className="font-rajdhani text-primary text-lg tracking-[0.3em] uppercase">
              Welcome to my digital realm
            </p>
            <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black text-glow">
              <span className="text-foreground">ZISHAN</span>
              <br />
              <span className="text-gradient">NADAF</span>
            </h1>
          </div>

          {/* Typing effect */}
          <div className="h-8">
            <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground">
              <span>{displayText}</span>
              <span className="text-primary animate-pulse">|</span>
            </p>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['React', 'Python', 'Java', 'Node.js', 'Machine Learning', 'Cybersecurity'].map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium border border-primary/30 rounded-full bg-primary/5 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                style={{ animationDelay: `${i * 100 + 500}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#projects" className="btn-cyber">
              View Projects
            </a>
            <a href="#contact" className="btn-cyber-secondary">
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/zrn2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/zishanrn2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:zishanrn2003@gmail.com"
              className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-40 right-10 w-24 h-24 border border-secondary/20 rotate-45 animate-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-primary rounded-full pulse-glow" />
      <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-secondary rounded-full pulse-glow" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;

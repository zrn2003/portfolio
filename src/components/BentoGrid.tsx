import { Code2, Brain, Shield, Briefcase, Award, GraduationCap, Zap, Github, Linkedin, Mail } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';

const BentoGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="highlights" className="py-24 md:py-32 bg-card/30">
      <div className="container px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="section-subheading">Overview</p>
            <h2 className="section-heading">At a Glance</h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
            {/* Large featured card - Full-Stack */}
            <div 
              className="col-span-2 row-span-2 bento-card group relative overflow-hidden"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div>
                  <Code2 className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-sora text-2xl font-bold text-foreground mb-2">Full-Stack Developer</h3>
                  <p className="text-muted-foreground">
                    Building modern web applications with React, Node.js, and cutting-edge technologies.
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="badge">React</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">TypeScript</span>
                </div>
              </div>
            </div>

            {/* AI/ML Card */}
            <div 
              className="col-span-1 row-span-1 bento-card group overflow-hidden"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between p-5">
                <Brain className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-sora font-semibold text-foreground mb-1">AI & ML</h3>
                  <p className="text-xs text-muted-foreground">CNN, TensorFlow, Data Science</p>
                </div>
              </div>
            </div>

            {/* Cybersecurity Card */}
            <div 
              className="col-span-1 row-span-1 bento-card group overflow-hidden"
              style={{ transitionDelay: '150ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between p-5">
                <Shield className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-sora font-semibold text-foreground mb-1">Cybersecurity</h3>
                  <p className="text-xs text-muted-foreground">Threat detection & security</p>
                </div>
              </div>
            </div>

            {/* Stats Card - Experience */}
            <div 
              className="col-span-1 row-span-1 bento-card group overflow-hidden"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-5 text-center">
                <Briefcase className="w-6 h-6 text-amber-400 mb-2" />
                <p className="font-sora text-4xl font-bold text-foreground">3+</p>
                <p className="text-xs text-muted-foreground">Internships</p>
              </div>
            </div>

            {/* Stats Card - Projects */}
            <div 
              className="col-span-1 row-span-1 bento-card group overflow-hidden"
              style={{ transitionDelay: '250ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-5 text-center">
                <Zap className="w-6 h-6 text-rose-400 mb-2" />
                <p className="font-sora text-4xl font-bold text-foreground">5+</p>
                <p className="text-xs text-muted-foreground">Projects Built</p>
              </div>
            </div>

            {/* Education Card - Wide */}
            <div 
              className="col-span-2 row-span-1 bento-card group overflow-hidden"
              style={{ transitionDelay: '300ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10" />
              <div className="relative z-10 h-full flex items-center gap-4 p-5">
                <GraduationCap className="w-10 h-10 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex-1">
                  <h3 className="font-sora font-semibold text-foreground">B.Tech Computer Science</h3>
                  <p className="text-sm text-muted-foreground">SKN Sinhgad College of Engineering</p>
                </div>
                <div className="text-right">
                  <p className="font-sora text-2xl font-bold text-primary">8.28</p>
                  <p className="text-xs text-muted-foreground">CGPA</p>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div 
              className="col-span-2 row-span-1 bento-card group overflow-hidden"
              style={{ transitionDelay: '350ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-violet-500/10" />
              <div className="relative z-10 h-full flex flex-col justify-between p-5">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-indigo-400" />
                  <h3 className="font-sora font-semibold text-foreground">Certifications</h3>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">Google Cloud</span>
                  <span className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">Cisco Cyber</span>
                  <span className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">Microsoft AI</span>
                  <span className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">Walmart SWE</span>
                </div>
              </div>
            </div>

            {/* Connect Card */}
            <div 
              className="col-span-2 md:col-span-2 row-span-1 bento-card group overflow-hidden"
              style={{ transitionDelay: '400ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
              <div className="relative z-10 h-full flex items-center justify-between p-5">
                <div>
                  <h3 className="font-sora font-semibold text-foreground mb-1">Let's Connect</h3>
                  <p className="text-sm text-muted-foreground">Open to opportunities</p>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/zishannadaf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/zishannadaf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:zishanrn2003@gmail.com"
                    className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

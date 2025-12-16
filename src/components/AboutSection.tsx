import { Code2, Database, Shield, Brain } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with React, Node.js, and modern frameworks',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Developing intelligent systems using CNN models, Random Forest, and data science',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Creating secure solutions with phishing detection and threat analysis systems',
    },
    {
      icon: Database,
      title: 'Database Engineering',
      description: 'Designing robust SQL systems with optimized data validation and accuracy',
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm">About Me</p>
          <h2 className="section-title">Crafting Digital Experiences</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: About text */}
          <div className="space-y-6">
            <div className="glass-card p-8 space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a <span className="text-primary font-semibold">pre-final year B.Tech CSE student</span> at SKN Sinhgad College of Engineering, passionate about building technology that makes a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in full-stack development, cybersecurity, and AI/ML, I transform complex problems into elegant solutions. My journey spans from developing phishing detection systems to creating AI-powered diagnostic tools.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently maintaining a <span className="text-primary">CGPA of 8.28/10</span>, I combine academic excellence with practical experience gained through internships at Rezoomex, TeachNook, and Lead Soft.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <p className="font-orbitron text-3xl font-bold text-gradient">3+</p>
                  <p className="text-sm text-muted-foreground">Internships</p>
                </div>
                <div className="text-center">
                  <p className="font-orbitron text-3xl font-bold text-gradient">5+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <p className="font-orbitron text-3xl font-bold text-gradient">8.28</p>
                  <p className="text-sm text-muted-foreground">CGPA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-orbitron font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default AboutSection;

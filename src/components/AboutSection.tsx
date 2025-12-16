import { Code2, Database, Shield, Brain } from 'lucide-react';

const AboutSection = () => {
  const expertise = [
    { icon: Code2, title: 'Full-Stack Development', desc: 'React, Node.js, modern frameworks' },
    { icon: Brain, title: 'AI & Machine Learning', desc: 'CNN models, data science' },
    { icon: Shield, title: 'Cybersecurity', desc: 'Threat detection, security systems' },
    { icon: Database, title: 'Database Engineering', desc: 'SQL optimization, data architecture' },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="section-subheading">About Me</p>
            <h2 className="section-heading">Building Technology<br />That Makes a Difference</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Bio */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a <span className="text-primary font-semibold">pre-final year B.Tech CSE student</span> at 
                SKN Sinhgad College of Engineering, passionate about building technology that solves real problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With expertise in full-stack development, cybersecurity, and AI/ML, I transform complex 
                challenges into elegant solutions. My journey spans from developing phishing detection 
                systems to creating AI-powered diagnostic tools.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently maintaining a CGPA of 8.28/10, I combine academic excellence with practical 
                experience gained through internships at Rezoomex, TeachNook, and Lead Soft.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <p className="font-sora text-3xl font-bold text-foreground">3+</p>
                  <p className="text-sm text-muted-foreground mt-1">Internships</p>
                </div>
                <div>
                  <p className="font-sora text-3xl font-bold text-foreground">5+</p>
                  <p className="text-sm text-muted-foreground mt-1">Projects</p>
                </div>
                <div>
                  <p className="font-sora text-3xl font-bold text-foreground">8.28</p>
                  <p className="text-sm text-muted-foreground mt-1">CGPA</p>
                </div>
              </div>
            </div>

            {/* Expertise cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div key={item.title} className="card-elevated p-5">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

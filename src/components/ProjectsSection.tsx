import { ExternalLink, Github, Shield, Brain, Users } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'PhishGuard AI',
      subtitle: 'Cybersecurity & Threat Detection',
      period: 'Jun 2025 – Jul 2025',
      description: 'Real-time phishing URL detection platform using Machine Learning for comprehensive threat analysis.',
      tech: ['Python', 'Machine Learning', 'Web Security', 'API'],
      icon: Shield,
    },
    {
      title: 'SkinSight',
      subtitle: 'AI-Powered Classification',
      period: 'Jul 2025 – Present',
      description: 'AI detection system using CNN-based deep learning for accurate classification and identification.',
      tech: ['Python', 'TensorFlow', 'CNN', 'Web Interface'],
      icon: Brain,
    },
    {
      title: 'Smart Attendance System',
      subtitle: 'Authentication & Enrollment',
      period: 'Mar 2025 – Apr 2025',
      description: 'Comprehensive dashboard using ReactJS, Node.js, and SQL Server for automated tracking.',
      tech: ['ReactJS', 'Node.js', 'SQL Server', 'API'],
      icon: Users,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/50">
      <div className="container px-6">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="section-subheading">Projects</p>
            <h2 className="section-heading">Featured Work</h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="card-elevated p-6 flex flex-col"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>

                <h3 className="font-sora font-semibold text-lg text-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border">
                    <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

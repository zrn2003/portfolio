import { ExternalLink, Github, Shield, Brain, Users } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'PhishGuard AI',
      subtitle: 'Cybersecurity & Threat Detection System',
      period: 'Jun 2025 – Jul 2025',
      description: 'Real-time web-based phishing URL detection platform utilizing Machine Learning algorithms for comprehensive threat analysis and classification.',
      highlights: [
        'ML-powered threat detection',
        'Automated feature extraction',
        'Real-time risk scoring',
        'Threat intelligence reporting',
      ],
      tech: ['Python', 'Machine Learning', 'Web Security', 'API'],
      icon: Shield,
      gradient: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-500/30',
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-400',
    },
    {
      title: 'SkinSight',
      subtitle: 'AI-Powered Classification System',
      period: 'Jul 2025 – Present',
      description: 'AI-powered detection system using CNN-based deep learning models and advanced image processing techniques for accurate classification.',
      highlights: [
        'CNN deep learning models',
        'Image processing',
        'Real-time predictions',
        'Preventive recommendations',
      ],
      tech: ['Python', 'TensorFlow', 'CNN', 'Web Interface'],
      icon: Brain,
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
    {
      title: 'Smart School Attendance',
      subtitle: 'Authentication & Enrollment System',
      period: 'Mar 2025 – Apr 2025',
      description: 'Comprehensive Smart Attendance Dashboard using ReactJS, Node.js, and SQL Server for automated enrollment tracking and secure authentication.',
      highlights: [
        'Secure authentication',
        'Real-time notifications',
        'Analytics reporting',
        'Responsive web interface',
      ],
      tech: ['ReactJS', 'Node.js', 'SQL Server', 'API Integration'],
      icon: Users,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400',
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm">Featured Work</p>
          <h2 className="section-title">Key Projects</h2>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative glass-card overflow-hidden hover-lift ${project.borderColor}`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-xl ${project.iconBg} border ${project.borderColor} flex items-center justify-center`}>
                    <project.icon className={`w-7 h-7 ${project.iconColor}`} />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{project.period}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className={`text-sm ${project.iconColor}`}>{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.iconColor.replace('text-', 'bg-')}`} />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-background/50 border border-border rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-all">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-all">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>

              {/* Corner decoration */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 ${project.iconColor.replace('text-', 'bg-')}/10 rounded-full blur-2xl`} />
            </div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
};

export default ProjectsSection;

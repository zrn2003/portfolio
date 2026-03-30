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
      repoUrl: 'https://github.com/zrn2003/PhishGuard-AI',
      demoUrl: null,
    },
    {
      title: 'SkinSight',
      subtitle: 'AI-Powered Classification',
      period: 'Jul 2025 – Present',
      description: 'AI detection system using CNN-based deep learning for accurate classification and identification.',
      tech: ['Python', 'TensorFlow', 'CNN', 'Web Interface'],
      icon: Brain,
      repoUrl: 'https://github.com/zrn2003/SkinSight',
      demoUrl: 'https://skinsightai.vercel.app/',
    },
    {
      title: 'Smart Attendance System',
      subtitle: 'Authentication & Enrollment',
      period: 'Mar 2025 – Apr 2025',
      description: 'Comprehensive dashboard using ReactJS, Node.js, and SQL Server for automated tracking.',
      tech: ['ReactJS', 'Node.js', 'SQL Server', 'API'],
      icon: Users,
      repoUrl: 'https://github.com/zrn2003/smart-school-frontends',
      demoUrl: null,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="inline-block px-3 py-1 font-mono font-bold tracking-widest text-black border-2 border-black bg-[#ffff00] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]">Projects</p>
            <h2 className="font-mono text-4xl md:text-5xl font-black text-black uppercase tracking-wider">Featured Work</h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                style={{ transitionDelay: `${index * 150}ms` }}
                className="h-full"
              >
                <div
                  className="p-6 flex flex-col h-full bg-white border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      <project.icon className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-xs text-black font-mono font-bold border-2 border-black px-2 py-1 bg-[#f0f0f0]">{project.period}</span>
                  </div>

                  <h3 className="font-mono text-lg font-bold text-black uppercase tracking-wider mb-1">{project.title}</h3>
                  <p className="text-sm text-black font-bold mb-3">{project.subtitle}</p>
                  <p className="text-sm text-black mb-6 flex-grow">{project.description}</p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-mono font-bold bg-[#f0f0f0] border-2 border-black text-black">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t-2 border-black">
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold font-mono text-black hover:bg-black hover:text-white px-3 py-1 border-2 border-transparent hover:border-black transition-colors">
                          <Github className="w-4 h-4" />
                          CODE
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold font-mono text-black hover:bg-black hover:text-white px-3 py-1 border-2 border-transparent hover:border-black transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          DEMO
                        </a>
                      )}
                    </div>
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

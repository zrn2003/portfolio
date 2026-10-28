import { useState } from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress,
  SiTensorflow, SiPytorch, SiMongodb, SiSupabase, SiCloudflare,
  SiDocker, SiFastapi, SiGit, SiGithub, SiGooglecloud, SiPostman
} from 'react-icons/si';
import { FaDatabase, FaAward, FaTerminal, FaShieldAlt, FaServer, FaBrain, FaCheckCircle } from 'react-icons/fa';

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const marqueeSkills = [
    { name: 'React 19', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Python', icon: SiPython },
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'Cloudflare R2', icon: SiCloudflare },
    { name: 'Docker', icon: SiDocker },
    { name: 'Postman', icon: SiPostman },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Google Cloud', icon: SiGooglecloud },
  ];

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      icon: SiReact,
      skills: [
        'React 19', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS 4', 'HTML5', 'CSS3',
        'React Hooks', 'Component Architecture', 'Responsive Design', 'Accessibility (WCAG)'
      ]
    },
    {
      id: 'backend',
      title: 'Backend Engineering',
      icon: FaServer,
      skills: [
        'Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST API Design',
        'Input Validation', 'Error Handling', 'JWT Authentication', 'Firebase Admin SDK', 'WebSocket'
      ]
    },
    {
      id: 'databases',
      title: 'Databases & ORM',
      icon: FaDatabase,
      skills: [
        'MongoDB (Mongoose)', 'Supabase (PostgreSQL)', 'SQL Server', 'Firebase Firestore',
        'Schema Design', 'Query Optimisation', 'Prisma (familiar)'
      ]
    },
    {
      id: 'cloud',
      title: 'Storage & Cloud',
      icon: SiCloudflare,
      skills: [
        'Cloudflare R2', 'AWS SDK', 'AWS Lambda', 'AWS S3', 'AWS EC2',
        'Vercel', 'Render', 'Google Cloud', 'Docker', 'GitHub Actions CI/CD', 'Linux'
      ]
    },
    {
      id: 'aiml',
      title: 'AI & Machine Learning',
      icon: FaBrain,
      skills: [
        'TensorFlow', 'PyTorch', 'ResNet architectures', 'FastAPI ML serving',
        'Model evaluation', 'ETL pipelines', 'Anomaly detection', 'Adversarial ML (PGD attacks)'
      ]
    },
    {
      id: 'aitools',
      title: 'AI Dev Tooling',
      icon: FaTerminal,
      skills: [
        'Claude Code', 'Cursor IDE', 'Antigravity Shortcuts', 'Prompt Engineering', 'MCP (Anthropic)'
      ]
    },
    {
      id: 'testing',
      title: 'Testing & Quality',
      icon: FaCheckCircle,
      skills: [
        'pytest', 'Postman', 'Component testing', 'End-to-end testing',
        'Regression testing', 'CI/CD pipelines', 'Structured code review', 'PR workflows'
      ]
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      icon: FaShieldAlt,
      skills: [
        'Phishing/URL analysis', 'Adversarial ML', 'Threat detection',
        'Digital forensics fundamentals', 'Network security', 'Cybersecurity Minor (SKN Sinhgad)'
      ]
    },
  ];

  const certifications = [
    { title: 'Model Context Protocol (MCP)', issuer: 'Anthropic', highlight: true },
    { title: 'AWS Cloud Foundations', issuer: 'Amazon Web Services', highlight: false },
    { title: 'Cloud Architecture', issuer: 'Google Cloud Platform', highlight: false },
    { title: 'Cybersecurity Fundamentals', issuer: 'Cisco', highlight: false },
    { title: 'Java Programming', issuer: 'NPTEL / IIT Madras', highlight: false },
  ];

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 bg-white dark:bg-[#0c0d10] overflow-hidden border-t-2 border-b-2 border-black dark:border-zinc-700">
      <div className="container px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Header */}
          <div className="mb-12">
            <p className="inline-block px-3 py-1 font-mono font-bold tracking-widest text-black border-2 border-black dark:border-[#00FF66] bg-[#ffff00] dark:bg-[#00FF66] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]">Skills & Expertise</p>
            <h2 className="font-mono text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-wider">Technical Arsenal</h2>
            <p className="mt-4 text-black dark:text-zinc-300 font-medium text-base md:text-lg max-w-2xl">
              From full-stack web applications and cloud storage to deep learning models and cybersecurity research.
            </p>
          </div>

          {/* Marquee Strip */}
          <div className="relative flex overflow-hidden group mb-14 py-6 border-y-2 border-black dark:border-zinc-700 bg-[#f0f0f0] dark:bg-[#16171b] shadow-[inset_0_4px_4px_rgba(0,0,0,0.05),inset_0_-4px_4px_rgba(0,0,0,0.05)]">
            <div className="animate-marquee flex items-center min-w-max group-hover:[animation-play-state:paused]">
              {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                <div key={`skill-${index}`} className="flex-shrink-0 mx-6 md:mx-8 flex flex-col items-center justify-center gap-2 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
                  <skill.icon className="w-10 h-10 text-black dark:text-zinc-200 transition-colors duration-300" />
                  <span className="text-[11px] font-bold font-mono text-black dark:text-zinc-300 uppercase tracking-wider">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#ffff00] dark:bg-[#00FF66] text-black border-black dark:border-[#00FF66] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_15px_rgba(0,255,102,0.4)] font-black'
                  : 'bg-white dark:bg-[#0F1626] text-black dark:text-zinc-200 border-black dark:border-[#1E293B] hover:bg-[#ffff00]/30 dark:hover:border-[#00FF66] dark:hover:text-[#00FF66]'
              }`}
            >
              All Categories ({skillCategories.length})
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#ffff00] dark:bg-[#00F0FF] text-black border-black dark:border-[#00F0FF] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_15px_rgba(0,240,255,0.4)] font-black'
                    : 'bg-white dark:bg-[#0F1626] text-black dark:text-zinc-200 border-black dark:border-[#1E293B] hover:bg-[#ffff00]/30 dark:hover:border-[#00F0FF] dark:hover:text-[#00F0FF]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white dark:bg-[#0F1626] border-2 border-black dark:border-[#1E293B] p-6 shadow-[5px_5px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-black dark:hover:border-[#00FF66] dark:hover:shadow-[0_0_20px_rgba(0,255,102,0.25)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 border-b-2 border-black dark:border-[#1E293B] pb-3 mb-4">
                    <div className="w-8 h-8 bg-[#ffff00] dark:bg-[#00FF66] border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      <category.icon className="w-4 h-4 text-black" />
                    </div>
                    <h3 className="font-mono font-bold text-base uppercase tracking-wider text-black dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-[#f7f7f7] dark:bg-[#131d33] border-2 border-black dark:border-[#1E293B] text-xs font-mono font-bold text-black dark:text-zinc-200 hover:bg-[#ffff00] hover:text-black dark:hover:bg-[#00FF66] dark:hover:text-black dark:hover:border-[#00FF66] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Block */}
          <div className="border-t-2 border-black dark:border-zinc-700 pt-12">
            <div className="flex items-center gap-2 mb-6">
              <FaAward className="w-6 h-6 text-black dark:text-[#00FF66]" />
              <h3 className="font-mono font-bold text-2xl text-black dark:text-white uppercase tracking-wider">
                Certifications & Credentials
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className={`p-4 border-2 border-black dark:border-zinc-700 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all ${
                    cert.highlight ? 'bg-[#ffff00] dark:bg-[#00FF66] text-black border-black dark:border-[#00FF66]' : 'bg-white dark:bg-[#16171b] text-black dark:text-white'
                  }`}
                >
                  <p className="font-mono font-black text-sm uppercase mb-1">{cert.title}</p>
                  <p className="text-xs font-bold font-mono tracking-wide uppercase bg-white/80 dark:bg-zinc-800 border border-black dark:border-zinc-700 px-2 py-0.5 inline-block text-black dark:text-zinc-300">
                    Issuer: {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

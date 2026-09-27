import { MapPin, Briefcase } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

// Logo Imports
import rezoomexLogo from '@/logo/rezoomex.png';
import teachnookLogo from '@/logo/Teachnook.png';
import leadsoftLogo from '@/logo/leadsoft.png';
import tripleRLogo from '@/logo/triplerinnovate.png';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: 'Web Developer & AI Engineer',
      company: 'Triple R Innovate (EdTech Startup)',
      location: 'Remote',
      period: 'Dec 2025 – Apr 2026',
      logo: tripleRLogo,
      points: [
        'Owned full feature slices end-to-end (React UI → Node.js/Express API → database → deployment) without restriction to bug fixes.',
        'Used Claude Code and Cursor throughout for AI-assisted code generation, automated test writing, and PR review acceleration.',
        'Designed and maintained REST API endpoints with input validation and structured error handling; enforced TypeScript type safety across the stack.',
        'Implemented GitHub Actions CI/CD pipelines; maintained component test coverage; participated in pull-request-based code review.',
        'Debugged production issues across frontend and backend using structured logging.',
      ],
    },
    {
      title: 'Trainee Developer',
      company: 'Rezoomex (IT Product & Services)',
      location: 'Remote · Pune, Maharashtra',
      period: 'Aug 2025 – Sep 2025',
      logo: rezoomexLogo,
      points: [
        'Developed and tested features on a Node.js/SQL Server web application.',
        'Analysed SQL query execution plans; applied indexes and query rewrites — reduced backend response time by 40%.',
        'Validated REST API payloads with Postman; tracked defects through Git-based PR workflows in an Agile sprint environment.',
      ],
    },
    {
      title: 'Data Science Intern',
      company: 'TeachNook (E-Learning Platform)',
      location: 'Remote · Bengaluru, Karnataka',
      period: 'Apr 2024 – May 2024',
      logo: teachnookLogo,
      points: [
        'Built and validated a Python ETL pipeline processing 45,000+ records.',
        'Applied stage-by-stage data integrity checks and anomaly detection.',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Lead Soft',
      location: 'Remote',
      period: '2024',
      logo: leadsoftLogo,
      points: [
        'Designed SQL-based backend systems ensuring 100% data accuracy.',
        'Built data-driven interfaces, boosting efficiency by 20%.',
        'Reduced manual processing time by 15% through workflow optimization.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <p className="inline-block px-3 py-1 font-mono font-bold tracking-widest text-black border-2 border-black dark:border-zinc-700 bg-[#ffff00] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">Experience</p>
            <h2 className="font-mono text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-wider">Professional Journey</h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative"
          >
            {/* Elegant timeline line */}
            <div className="absolute left-[8px] md:left-[11px] top-6 bottom-6 w-[4px] bg-black dark:bg-zinc-700" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  variants={itemVariants}
                  key={exp.title}
                  className="relative pl-10 md:pl-16 group"
                >
                  {/* Glowing Timeline dot */}
                  <div className="absolute left-0 top-6 w-5 h-5 md:w-6 md:h-6 bg-[#ffff00] border-4 border-black dark:border-zinc-800 group-hover:bg-white dark:group-hover:bg-[#ffff00] transition-all duration-300 z-10 shadow-[2px_2px_0px_rgba(0,0,0,1)]" />

                  <div className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 p-6 md:p-8 flex flex-col relative overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          {exp.logo && (
                            <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 border-2 border-black dark:border-zinc-700 p-1 bg-white dark:bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] overflow-hidden">
                              <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-mono text-xl md:text-2xl font-bold text-black dark:text-white mb-1 uppercase tracking-widest">{exp.title}</h3>
                            <p className="text-lg text-black dark:text-zinc-200 font-bold uppercase">{exp.company}</p>
                          </div>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 text-sm font-bold font-mono tracking-widest rounded-none bg-[#f0f0f0] dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 text-black dark:text-zinc-200 whitespace-nowrap shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-sm text-black dark:text-zinc-300 font-bold font-mono mb-6 uppercase border-b-2 border-black dark:border-zinc-700 pb-4">
                        <MapPin className="w-4 h-4 text-black dark:text-[#ffff00]" />
                        {exp.location}
                      </div>

                      <ul className="space-y-3 font-medium text-black dark:text-zinc-200">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex gap-4 text-base leading-relaxed">
                            <span className="text-black dark:text-[#ffff00] font-bold flex-shrink-0 mt-1">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

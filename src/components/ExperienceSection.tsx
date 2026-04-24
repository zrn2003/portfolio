import { MapPin, Briefcase } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: 'Software Development Trainee (Full-Time)',
      company: 'Triple R Innovate – EdTech Startup',
      location: 'Remote',
      period: 'Dec 2025 – Apr 2026',
      points: [
        'Spearheaded multiplatform front-end development using React.js; engineered reusable component libraries with mobile-first responsive design (CSS Grid / Flexbox) ensuring consistent UX across desktop and mobile.',
        'Built production RESTful APIs with Node.js / Express.js; applied web performance optimisation — caching, lazy loading, code splitting — improving page load time by 30%.',
        'Maintained structured Git / GitHub workflows with CI/CD via GitHub Actions; contributed to Agile/Scrum ceremonies and technical documentation of application processes and features.',
        'Participated in cross-functional problem-solving discussions with designers and product managers to align application features with business requirements.',
      ],
    },
    {
      title: 'Trainee Developer',
      company: 'Rezoomex IT Product & Services',
      location: 'Pune, Maharashtra',
      period: 'Aug 2025 – Sep 2025',
      points: [
        'Gained expertise in SDLC, contributing to application design and development',
        'Enhanced application quality through clean code and optimization techniques',
        'Hands-on experience in Front-End Development, SQL, and Automation Testing',
      ],
    },
    {
      title: 'Data Science Intern',
      company: 'TeachNook — E-Learning Platform',
      location: 'Bengaluru, Karnataka',
      period: 'Apr 2024 – May 2024',
      points: [
        'Analyzed marketing data using Python, Pandas, and SQL Server',
        'Engineered features using NumPy for data preparation and visualization',
        'Implemented Random Forest Classifier with high prediction accuracy',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Lead Soft',
      location: 'Remote',
      period: '2024',
      points: [
        'Designed SQL-based backend systems ensuring 100% data accuracy',
        'Built data-driven interfaces, boosting efficiency by 20%',
        'Reduced manual processing time by 15% through workflow optimization',
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
            <p className="inline-block px-3 py-1 font-mono font-bold tracking-widest text-black border-2 border-black bg-[#ffff00] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]">Experience</p>
            <h2 className="font-mono text-4xl md:text-5xl font-black text-black uppercase tracking-wider">Professional Journey</h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative"
          >
            {/* Elegant glowing timeline line */}
            <div className="absolute left-[8px] md:left-[11px] top-6 bottom-6 w-[4px] bg-black" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  variants={itemVariants}
                  key={exp.title}
                  className="relative pl-10 md:pl-16 group"
                >
                  {/* Glowing Timeline dot */}
                  <div className="absolute left-0 top-6 w-5 h-5 md:w-6 md:h-6 bg-[#ffff00] border-4 border-black group-hover:bg-white transition-all duration-300 z-10 shadow-[2px_2px_0px_rgba(0,0,0,1)]" />

                  <div className="bg-white border-2 border-black p-6 md:p-8 flex flex-col relative overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-mono text-xl md:text-2xl font-bold text-black mb-1 uppercase tracking-widest">{exp.title}</h3>
                          <p className="text-lg text-black font-bold uppercase">{exp.company}</p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 text-sm font-bold font-mono tracking-widest rounded-none bg-[#f0f0f0] border-2 border-black text-black whitespace-nowrap shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-sm text-black font-bold font-mono mb-6 uppercase border-b-2 border-black pb-4">
                        <MapPin className="w-4 h-4 text-black" />
                        {exp.location}
                      </div>

                      <ul className="space-y-3 font-medium text-black">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex gap-4 text-base leading-relaxed">
                            <span className="text-black font-bold flex-shrink-0 mt-1">▹</span>
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

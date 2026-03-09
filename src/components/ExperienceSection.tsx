import { MapPin, Briefcase } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
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
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
              <Briefcase className="w-4 h-4" /> Experience
            </div>
            <h2 className="font-sora text-4xl md:text-5xl font-black tracking-tight text-foreground drop-shadow-md">Professional Journey</h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative"
          >
            {/* Elegant glowing timeline line */}
            <div className="absolute left-[8px] md:left-[11px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent rounded-full" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  variants={itemVariants}
                  key={exp.title}
                  className="relative pl-10 md:pl-16 group"
                >
                  {/* Glowing Timeline dot */}
                  <div className="absolute left-0 top-6 w-5 h-5 md:w-6 md:h-6 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_hsl(var(--primary)/0.4)] group-hover:scale-125 group-hover:bg-primary transition-all duration-300 z-10" />

                  <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2000} className="transform-gpu" glareEnable={true} glareMaxOpacity={0.1} glareBorderRadius="1rem">
                    <div className="rounded-2xl border border-white/5 bg-background/40 backdrop-blur-xl p-6 md:p-8 flex flex-col relative overflow-hidden group-hover:border-primary/30 transition-colors duration-500 shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="font-sora text-xl md:text-2xl font-bold text-foreground drop-shadow-sm mb-1">{exp.title}</h3>
                            <p className="text-lg text-primary font-medium">{exp.company}</p>
                          </div>
                          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium mb-6">
                          <MapPin className="w-4 h-4 text-secondary" />
                          {exp.location}
                        </div>

                        <ul className="space-y-3">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex gap-4 text-base text-muted-foreground/90 leading-relaxed">
                              <span className="text-secondary opacity-70 mt-1 flex-shrink-0">▹</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Tilt>
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

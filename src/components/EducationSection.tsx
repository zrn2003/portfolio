import { GraduationCap, Award, BookOpen } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'SKN Sinhgad College of Engineering, Pandharpur',
      period: '2022 – 2026',
      grade: 'CGPA: 8.32/10',
      current: true,
      icon: GraduationCap,
      color: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/20'
    },
    {
      degree: 'Higher Secondary Certificate',
      field: 'CBSE Board',
      institution: 'Sinhgad Public School, Kamlapur',
      period: '2021 – 2022',
      grade: '62.40%',
      current: false,
      icon: BookOpen,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20'
    },
    {
      degree: 'Secondary School Certificate',
      field: 'Maharashtra State Board',
      institution: 'Sangola Vidyamandir Prashala, Sangola',
      period: '2019 – 2020',
      grade: '',
      current: false,
      icon: Award,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 12 } }
  };

  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3"></div>

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-secondary bg-secondary/10 border border-secondary/20 rounded-full mb-6 shadow-[0_0_15px_hsl(var(--secondary)/0.1)]">
              <GraduationCap className="w-4 h-4" /> Education
            </div>
            <h2 className="font-sora text-4xl md:text-5xl font-black tracking-tight text-foreground drop-shadow-md">Academic Background</h2>
          </motion.div>

          {/* Education cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-6"
          >
            {education.map((edu) => (
              <motion.div variants={itemVariants} key={edu.institution} className="w-full">
                <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000} className="w-full transform-gpu" glareEnable={true} glareMaxOpacity={0.1} glareBorderRadius="1rem">
                  <div className="w-full rounded-2xl border border-white/5 bg-background/40 backdrop-blur-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 shadow-lg">
                    {/* Hover internal glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.current ? 'from-primary/10' : 'from-foreground/5'} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center ${edu.bg} ${edu.border} border group-hover:scale-110 transition-transform duration-500 shadow-inner z-10`}>
                      <edu.icon className={`w-8 h-8 md:w-10 md:h-10 ${edu.color} drop-shadow-md`} />
                    </div>

                    <div className="flex-1 relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="font-sora text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{edu.degree}</h3>
                          {edu.field && <p className={`text-base font-medium mt-1 ${edu.color}`}>{edu.field}</p>}
                        </div>
                        {edu.current && (
                          <span className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30 shadow-[0_0_10px_hsl(var(--primary)/0.2)] animate-pulse">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="text-base text-muted-foreground/90 font-medium mb-4">{edu.institution}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                        <span className="px-3 py-1.5 rounded-lg bg-background/50 border border-border/50 text-foreground/80 backdrop-blur-sm">
                          {edu.period}
                        </span>
                        {edu.grade && (
                          <span className="px-3 py-1.5 rounded-lg bg-background/50 border border-border/50 text-primary backdrop-blur-sm shadow-sm flex items-center gap-2">
                            <Award className="w-4 h-4" /> {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

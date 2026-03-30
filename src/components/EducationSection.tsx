import { GraduationCap, Award, BookOpen } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

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
      color: 'text-zinc-400',
      bg: 'bg-zinc-500/10',
      border: 'border-zinc-500/20'
    },
    {
      degree: 'Secondary School Certificate',
      field: 'Maharashtra State Board',
      institution: 'Sangola Vidyamandir Prashala, Sangola',
      period: '2019 – 2020',
      grade: '84.80%',
      current: false,
      icon: Award,
      color: 'text-neutral-400',
      bg: 'bg-neutral-500/10',
      border: 'border-neutral-500/20'
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
            <p className="inline-block px-3 py-1 text-xs md:text-sm font-bold font-mono tracking-widest text-black border-2 border-black bg-[#ffff00] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]">Education</p>
            <h2 className="font-mono text-4xl md:text-5xl font-black text-black uppercase tracking-wider">Academic Background</h2>
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
                <div className="w-full bg-white border-2 border-black p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all">
                  <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#f0f0f0] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)]`}>
                    <edu.icon className={`w-8 h-8 md:w-10 md:h-10 text-black`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="font-mono text-lg md:text-xl font-bold uppercase tracking-wider text-black">{edu.degree}</h3>
                        {edu.field && <p className={`text-base font-bold text-black mt-1`}>{edu.field}</p>}
                      </div>
                      {edu.current && (
                        <span className="inline-flex items-center px-3 py-1 text-xs font-bold font-mono tracking-widest border-2 border-black bg-[#ffff00] shadow-[2px_2px_0px_rgba(0,0,0,1)] animate-pulse">
                          CURRENT
                        </span>
                      )}
                    </div>

                    <p className="text-base text-black font-medium mb-4 border-b-2 border-black pb-4">{edu.institution}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm font-bold font-mono">
                      <span className="px-3 py-1.5 bg-[#f0f0f0] border-2 border-black text-black">
                        {edu.period}
                      </span>
                      {edu.grade && (
                        <span className="px-3 py-1.5 bg-white border-2 border-black text-black flex items-center gap-2">
                          <Award className="w-4 h-4" /> {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

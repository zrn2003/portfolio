import { GraduationCap, Award, BookOpen, ShieldCheck } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Computer Science & Engineering',
      institution: 'SKN Sinhgad College of Engineering, Pandharpur',
      university: 'Affiliated to Punyashlok Ahilyadevi Holkar Solapur University (PAHSU)',
      minor: 'Minor Specialisation: Cybersecurity & Digital Forensics',
      coursework: [
        'Data Structures & Algorithms', 'DBMS', 'Operating Systems',
        'Computer Networks', 'Software Engineering', 'OOP',
        'Discrete Mathematics', 'Machine Learning Fundamentals', 'Network & Information Security'
      ],
      period: 'August 2022 – May 2026',
      grade: 'CGPA: 8.46 / 10.0',
      status: 'Graduated',
      icon: GraduationCap,
      isPrimary: true,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Science & Mathematics (CBSE Board)',
      institution: 'Sinhgad Public School, Kamlapur',
      period: '2021 – 2022',
      grade: '62.40%',
      icon: BookOpen,
      isPrimary: false,
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      field: 'Maharashtra State Board (MSBSHSE)',
      institution: 'Sangola Vidyamandir Prashala, Sangola',
      period: '2019 – 2020',
      grade: '84.80%',
      icon: Award,
      isPrimary: false,
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
    <section id="education" className="py-12 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/10 dark:bg-[#00FF66]/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3"></div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-14 md:mb-16 text-center md:text-left"
          >
            <p className="inline-block px-2.5 py-1 text-xs font-mono font-bold tracking-widest text-black border-2 border-black dark:border-[#00FF66] bg-[#ffff00] dark:bg-[#00FF66] uppercase mb-3 sm:mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]">Education</p>
            <h2 className="font-mono text-2xl sm:text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-wider">Academic Background</h2>
          </motion.div>

          {/* Education cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-4 sm:space-y-6"
          >
            {education.map((edu) => (
              <motion.div variants={itemVariants} key={edu.institution} className="w-full">
                <div className="w-full bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-3.5 sm:gap-6 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#ffff00] dark:bg-[#00FF66] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    <edu.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-3 mb-1.5 sm:mb-2">
                      <div>
                        <h3 className="font-mono text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-black dark:text-white">{edu.degree}</h3>
                        {edu.field && <p className="text-xs sm:text-base font-bold text-black dark:text-zinc-200 mt-0.5">{edu.field}</p>}
                      </div>
                      {edu.status && (
                        <span className="self-start sm:self-auto inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold font-mono tracking-wider border-2 border-black bg-[#ffff00] dark:bg-[#00FF66] text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          {edu.status}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-base text-black dark:text-zinc-300 font-medium mb-0.5 sm:mb-1">{edu.institution}</p>
                    {edu.university && (
                      <p className="text-[11px] sm:text-xs font-mono text-black/70 dark:text-zinc-400 mb-2 sm:mb-3">{edu.university}</p>
                    )}

                    {edu.minor && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#f0f0f0] dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 text-[11px] sm:text-xs font-mono font-bold text-black dark:text-zinc-200 mb-3 sm:mb-4">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-[#00FF66]" />
                        {edu.minor}
                      </div>
                    )}

                    {edu.coursework && (
                      <div className="mb-3 sm:mb-4 border-t-2 border-black dark:border-zinc-700 pt-2.5 sm:pt-3">
                        <p className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-black dark:text-white mb-1.5 sm:mb-2">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {edu.coursework.map(c => (
                            <span key={c} className="text-[10px] sm:text-[11px] font-mono font-bold bg-[#fafafa] dark:bg-zinc-800 border border-black dark:border-zinc-700 px-1.5 sm:px-2 py-0.5 text-black dark:text-zinc-300">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold font-mono border-t-2 border-black dark:border-zinc-700 pt-2.5 sm:pt-3">
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[#f0f0f0] dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 text-black dark:text-zinc-200">
                        {edu.period}
                      </span>
                      {edu.grade && (
                        <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 text-black dark:text-white flex items-center gap-1.5 sm:gap-2 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-[#00FF66]" /> {edu.grade}
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

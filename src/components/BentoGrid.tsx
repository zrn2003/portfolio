import { Code2, Brain, Shield, Briefcase, Award, GraduationCap, Zap, Github, Linkedin, Mail } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  return (
    <section id="highlights" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Bento Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min"
          >
            {/* Left Column */}
            <div className="flex flex-col gap-6 col-span-1 md:col-span-1">
              <motion.div variants={itemVariants} className="bg-white border-2 border-black flex flex-col h-full shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                <div className="border-b-2 border-black px-5 py-3 flex items-center gap-2 bg-[#fafafa]">
                   <Code2 className="w-5 h-5" />
                   <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black">Full-Stack Interface</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-black text-sm mb-6 leading-relaxed">
                      Engineering high-performance, intelligent web applications with modern architecture.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {['React', 'Node.js', 'TS', 'Tailwind'].map(tech => (
                      <span key={tech} className="px-2 py-1 text-xs font-mono font-bold border-2 border-black bg-[#f0f0f0] text-black">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-6 col-span-1 md:col-span-1">
              <motion.div variants={itemVariants} className="bg-white border-2 border-black flex flex-col h-full shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                <div className="border-b-2 border-black px-5 py-3 flex items-center gap-2 bg-[#fafafa]">
                  <Brain className="w-5 h-5" />
                  <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black">AI & ML</h3>
                </div>
                <div className="p-6 bg-[#f9f9f9] flex-1">
                  <p className="text-sm font-bold mb-4">Focusing on neural models & intelligent retrieval:</p>
                  <ul className="text-sm space-y-2 font-mono ml-4 list-disc marker:text-black">
                    <li>TensorFlow & CNN</li>
                    <li>Data Pipeline</li>
                    <li>Predictive Models</li>
                    <li>Data Science</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white border-2 border-black flex flex-col bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                 <div className="border-b-2 border-black px-5 py-3 flex items-center gap-2 bg-white">
                   <Shield className="w-5 h-5" />
                   <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black">Cybersecurity</h3>
                 </div>
                 <div className="p-6 text-center py-10">
                   <p className="text-sm font-mono font-bold bg-white border-2 border-black inline-block px-4 py-2 rotate-[-2deg] shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                     Threat Detection AI
                   </p>
                 </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 col-span-1 md:col-span-1">
              <motion.div variants={itemVariants} className="bg-white border-2 border-black flex flex-col flex-1 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                <div className="border-b-2 border-black px-5 py-3 flex items-center gap-2 bg-[#fafafa]">
                  <Briefcase className="w-5 h-5" />
                  <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black">Experience</h3>
                </div>
                <div className="p-6 bg-[#f0f0f0] flex-1 relative overflow-hidden flex flex-col justify-center items-center">
                   <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                   <p className="font-mono text-6xl font-black text-black">3+</p>
                   <p className="mt-2 text-sm font-bold uppercase tracking-widest">Internships</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white border-2 border-black flex flex-col shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                 <div className="border-b-2 border-black px-5 py-3 flex items-center gap-2 bg-[#fafafa]">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black">Education</h3>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <p className="font-bold text-lg leading-tight mb-2">B.Tech Computer Science</p>
                  <p className="text-sm mb-4">SKN Sinhgad College</p>
                  <div className="inline-flex items-center gap-2 border-2 border-black px-3 py-1 bg-[#ffff00] w-fit font-mono font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    CGPA: 8.32
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row across 3 columns */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 bg-white border-2 border-black flex flex-col md:flex-row items-center justify-between p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] space-y-6 md:space-y-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#e5e5e5] opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none" />
              <div className="relative z-10 text-center md:text-left">
                 <h3 className="font-mono text-lg font-bold text-black mb-1 uppercase tracking-wider">Connect & Build</h3>
                 <p className="text-sm font-bold flex items-center justify-center md:justify-start gap-2">
                    <span className="w-3 h-3 border-2 border-black bg-[#ffff00]" /> Actively open to new opportunities
                 </p>
              </div>
              <div className="flex gap-4 relative z-10">
                 <a href="https://github.com/zrn2003" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center hover:bg-[#e0e0e0] transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                    <Github className="w-5 h-5" />
                 </a>
                 <a href="https://linkedin.com/in/zishanrn2003" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center hover:bg-[#e0e0e0] transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                    <Linkedin className="w-5 h-5" />
                 </a>
                 <a href="mailto:zishanrn2003@gmail.com" className="px-6 flex items-center gap-2 bg-black text-white font-mono font-bold uppercase border-2 border-black hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                    <Mail className="w-4 h-4" /> Hello
                 </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

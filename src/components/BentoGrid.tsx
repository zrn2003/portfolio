import { Code2, Brain, Shield, Briefcase, GraduationCap, Github, Linkedin, Mail } from 'lucide-react';
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
              <motion.div variants={itemVariants} className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 flex flex-col h-full shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
                <div className="border-b-2 border-black dark:border-zinc-700 px-5 py-3 flex items-center gap-2 bg-[#fafafa] dark:bg-[#1f2026]">
                   <Code2 className="w-5 h-5 text-black dark:text-[#ffff00]" />
                   <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black dark:text-white">Full-Stack Core</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-black dark:text-zinc-200 text-sm mb-4 leading-relaxed font-medium">
                      Production web applications built with React 19, Node.js, Express, MongoDB Atlas, and Supabase.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Supabase', 'Cloudflare R2'].map(tech => (
                      <span key={tech} className="px-2 py-1 text-xs font-mono font-bold border-2 border-black dark:border-zinc-700 bg-[#f0f0f0] dark:bg-zinc-800 text-black dark:text-zinc-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Middle Column */}
            <div className="flex flex-col gap-6 col-span-1 md:col-span-1">
              <motion.div variants={itemVariants} className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 flex flex-col h-full shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
                <div className="border-b-2 border-black dark:border-zinc-700 px-5 py-3 flex items-center gap-2 bg-[#fafafa] dark:bg-[#1f2026]">
                  <Brain className="w-5 h-5 text-black dark:text-[#ffff00]" />
                  <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black dark:text-white">AI & ML Research</h3>
                </div>
                <div className="p-6 bg-[#f9f9f9] dark:bg-[#131417] flex-1">
                  <p className="text-sm font-bold text-black dark:text-zinc-200 mb-3">Deep learning & inference serving:</p>
                  <ul className="text-xs sm:text-sm space-y-2 font-mono ml-4 list-disc marker:text-black dark:marker:text-[#ffff00] text-black dark:text-zinc-300">
                    <li>ResNet18 / 50 Ensembles</li>
                    <li>PyTorch & TensorFlow</li>
                    <li>FastAPI Inference APIs</li>
                    <li>
                      <a
                        href="https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[#ffff00] decoration-2 hover:text-[#ffff00] font-bold"
                      >
                        IJSRET Published Author ↗
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 flex flex-col flex-1 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
                 <div className="border-b-2 border-black dark:border-zinc-700 px-5 py-3 flex items-center gap-2 bg-white dark:bg-[#1f2026]">
                   <Shield className="w-5 h-5 text-black dark:text-[#ffff00]" />
                   <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black dark:text-white">Cybersecurity</h3>
                 </div>
                 <div className="p-6 flex-1 flex flex-col justify-center items-center gap-3">
                   <p className="text-xs sm:text-sm font-mono font-bold bg-[#ffff00] text-black border-2 border-black dark:border-black inline-block px-3 py-1.5 rotate-[-1deg] shadow-[3px_3px_0px_rgba(0,0,0,1)] text-center">
                     Adversarial Robustness & Phishing Defense
                   </p>
                   <div className="flex flex-wrap gap-1.5 justify-center mt-1">
                     <span className="text-[11px] font-mono font-bold bg-white dark:bg-zinc-800 border border-black dark:border-zinc-700 text-black dark:text-zinc-200 px-2 py-0.5">PGD Attacks</span>
                     <span className="text-[11px] font-mono font-bold bg-[#f0f0f0] dark:bg-zinc-800 border border-black dark:border-zinc-700 text-black dark:text-zinc-200 px-2 py-0.5">30-Feature URLs</span>
                     <span className="text-[11px] font-mono font-bold bg-white dark:bg-zinc-800 border border-black dark:border-zinc-700 text-black dark:text-zinc-200 px-2 py-0.5">TLS Analytics</span>
                     <span className="text-[11px] font-mono font-bold bg-black dark:bg-[#ffff00] text-white dark:text-black border border-black px-2 py-0.5">Digital Forensics</span>
                   </div>
                 </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 col-span-1 md:col-span-1">
              <motion.div variants={itemVariants} className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 flex flex-col flex-1 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
                <div className="border-b-2 border-black dark:border-zinc-700 px-5 py-3 flex items-center gap-2 bg-[#fafafa] dark:bg-[#1f2026]">
                  <Briefcase className="w-5 h-5 text-black dark:text-[#ffff00]" />
                  <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black dark:text-white">Experience</h3>
                </div>
                <div className="p-6 bg-[#f0f0f0] dark:bg-[#131417] flex-1 relative overflow-hidden flex flex-col justify-center items-center text-center">
                   <p className="font-mono text-5xl sm:text-6xl font-black text-black dark:text-white">8+</p>
                   <p className="mt-1 text-xs sm:text-sm font-bold uppercase tracking-widest text-black dark:text-zinc-300">Months Industry</p>
                   <p className="mt-2 text-xs font-mono text-black/70 dark:text-zinc-400">Triple R Innovate · Rezoomex · TeachNook</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 flex flex-col shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
                 <div className="border-b-2 border-black dark:border-zinc-700 px-5 py-3 flex items-center gap-2 bg-[#fafafa] dark:bg-[#1f2026]">
                  <GraduationCap className="w-5 h-5 text-black dark:text-[#ffff00]" />
                  <h3 className="font-mono text-sm uppercase font-bold tracking-widest text-black dark:text-white">Education</h3>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <p className="font-bold text-base sm:text-lg leading-tight mb-1 text-black dark:text-white">B.E. Computer Science</p>
                  <p className="text-xs sm:text-sm mb-3 text-black/80 dark:text-zinc-400">SKN Sinhgad COE, Pandharpur (PAHSU)</p>
                  <div className="inline-flex items-center gap-2 border-2 border-black dark:border-black px-3 py-1 bg-[#ffff00] text-black w-fit font-mono font-bold text-xs sm:text-sm shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    CGPA: 8.46 / 10.0
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row across 3 columns */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 flex flex-col md:flex-row items-center justify-between p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)] space-y-4 md:space-y-0 relative overflow-hidden">
              <div className="relative z-10 text-center md:text-left">
                 <h3 className="font-mono text-lg font-bold text-black dark:text-white mb-1 uppercase tracking-wider">Connect & Collaborate</h3>
                 <p className="text-sm font-bold text-black dark:text-zinc-300 flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" /> Actively open for Full-time roles · Freelance · Remote
                 </p>
              </div>
              <div className="flex flex-wrap gap-3 relative z-10 justify-center">
                 <a href="https://github.com/zrn2003" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 flex items-center justify-center text-black dark:text-white hover:bg-[#e0e0e0] dark:hover:bg-zinc-700 transition-colors shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]" title="GitHub">
                    <Github className="w-4 h-4" />
                 </a>
                 <a href="https://linkedin.com/in/zishanrn2003" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 flex items-center justify-center text-black dark:text-white hover:bg-[#0A66C2] hover:text-white transition-colors shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]" title="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                 </a>
                 <a href="mailto:zishanrn2003@gmail.com" className="px-5 py-2.5 flex items-center gap-1.5 bg-black dark:bg-[#ffff00] text-white dark:text-black font-mono font-bold uppercase text-xs border-2 border-black hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]">
                    <Mail className="w-3.5 h-3.5" /> Contact
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

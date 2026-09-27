import { Code2, Shield, Brain, Sparkles } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const expertise = [
    {
      icon: Code2,
      title: 'Full-Stack Engineering',
      desc: 'React 19, TypeScript, Node.js, Express, MongoDB Atlas, Supabase & Cloudflare R2',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      desc: 'PyTorch, ResNet18/50 & InceptionV3 ensembles, FastAPI inference serving, pytest validation',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Research',
      desc: 'Adversarial ML robustness (PGD attacks), 30-feature phishing URL detection, Minor in Digital Forensics',
    },
    {
      icon: Sparkles,
      title: 'AI-Assisted Dev Workflow',
      desc: 'Claude Code, Cursor IDE, test generation, and modern CI/CD automation with zero regressions',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 dark:bg-[#ffff00]/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="container px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-20"
          >
            <div className="mb-8">
              <p className="inline-block px-3 py-1 font-mono font-bold tracking-widest text-black border-2 border-black dark:border-zinc-700 bg-[#ffff00] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">About Me</p>
              <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white uppercase tracking-wider leading-tight">
                Building Tech <br className="hidden md:block" />
                <span className="bg-black dark:bg-[#ffff00] text-white dark:text-black px-2 md:px-4 py-1 mt-2 sm:mt-4 inline-block">That Matters</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 p-6 md:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
                <p className="text-lg md:text-xl text-black dark:text-zinc-100 font-bold leading-relaxed">
                  I'm a full stack developer and CS graduate from <span className="bg-[#ffff00] text-black px-1.5 py-0.5 border border-black font-mono">SKN Sinhgad College of Engineering, Pandharpur</span> (affiliated to PAHSU), with a <span className="underline decoration-2 font-mono">Minor in Cybersecurity & Digital Forensics</span>.
                </p>
                <div className="w-full h-[2px] bg-black dark:bg-zinc-700 my-5"></div>
                <p className="text-base md:text-lg text-black dark:text-zinc-200 font-medium leading-relaxed">
                  I've shipped production web applications for real clients, contributed to peer-reviewed research published in{' '}
                  <a
                    href="https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline decoration-[#ffff00] decoration-2 hover:text-[#ffff00] transition-colors"
                  >
                    IJSRET
                  </a>
                  , and built systems across the frontend, backend, database, storage, and deployment layers independently.
                </p>
                <p className="text-base md:text-lg text-black dark:text-zinc-200 font-medium leading-relaxed mt-4">
                  My work sits at the intersection of <strong className="font-mono font-bold text-black dark:text-white">software engineering, AI/ML, and cybersecurity</strong>. I use tools like Claude Code and Cursor as part of my development workflow — not to replace thinking, but to move faster and catch what I'd otherwise miss. I'm actively pursuing graduate research in adversarial ML and information security.
                </p>
              </div>

              {/* Glowing Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {[
                  { value: '8.46', label: 'CGPA / 10.0' },
                  { value: '8+', label: 'Months Industry' },
                  { value: '1', label: 'Peer-Reviewed Paper' },
                  { value: '4+', label: 'Shipped Systems' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                    className="flex flex-col items-center bg-white dark:bg-[#18191e] border-2 border-black dark:border-zinc-700 py-4 px-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <p className="font-mono text-3xl md:text-4xl font-black text-black dark:text-white mb-1">{stat.value}</p>
                    <p className="text-[11px] font-bold text-black dark:text-zinc-300 tracking-wider uppercase text-center bg-[#f0f0f0] dark:bg-zinc-800 border border-black dark:border-zinc-700 px-1.5 py-0.5 w-full">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expertise cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 flex flex-col gap-4"
            >
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 p-5 flex flex-col items-start gap-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all group"
                >
                  <div className="flex items-center gap-3 w-full border-b-2 border-black dark:border-zinc-700 pb-3">
                    <div className="w-10 h-10 bg-[#ffff00] border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      <item.icon className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="font-mono font-bold text-black dark:text-white text-sm uppercase tracking-wider">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-black dark:text-zinc-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

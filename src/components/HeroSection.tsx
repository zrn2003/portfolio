import { Github, Linkedin, Mail, Download, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Floating Glowing Orbs for 3D depth */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          rotate: [0, 90, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ffff00]/15 dark:bg-[#ffff00]/10 rounded-full blur-[120px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [-50, 0, -50],
          x: [0, 50, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[130px] -z-10 pointer-events-none"
      />

      <div className="container relative z-10 px-6 py-32 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Main content */}
          <div className="space-y-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-5 flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-black dark:border-zinc-700 bg-[#ffff00] text-black font-mono font-bold tracking-widest text-xs sm:text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] uppercase">
                <Sparkles className="w-4 h-4" />
                Zishan Nadaf · Portfolio 2026
              </div>

              <h1 className="font-mono text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white leading-[1.05] tracking-tight relative text-center">
                <span>Zishan</span>
                <span className="block mt-2 bg-black dark:bg-[#ffff00] text-white dark:text-black px-4 sm:px-6 inline-block shadow-[4px_4px_0px_rgba(0,0,0,0.15)] sm:shadow-[6px_6px_0px_rgba(0,0,0,0.15)]">Nadaf</span>
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider pt-1">
                <span className="bg-white dark:bg-[#18191e] border-2 border-black dark:border-zinc-700 text-black dark:text-zinc-200 px-3 py-1 shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">Full Stack Developer</span>
                <span className="bg-white dark:bg-[#18191e] border-2 border-black dark:border-zinc-700 text-black dark:text-zinc-200 px-3 py-1 shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">AI/ML Engineer</span>
                <span className="bg-[#ffff00] border-2 border-black text-black px-3 py-1 shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">Cybersecurity Researcher</span>
              </div>

              <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 border-2 border-black dark:border-zinc-700 bg-[#f0f0f0] dark:bg-zinc-800 text-black dark:text-zinc-200 font-mono text-xs sm:text-sm font-bold shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.8)]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse inline-block" />
                  Pune, Maharashtra, India
                </span>
                <span className="hidden sm:inline">|</span>
                <span>Open for: Full-time · Freelance · Remote</span>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-black dark:text-zinc-200 font-medium max-w-3xl leading-relaxed mt-4 border-2 border-black dark:border-zinc-700 p-5 sm:p-6 bg-white dark:bg-[#15161a] shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)] text-left sm:text-center">
                B.E. Computer Science graduate <span className="font-bold bg-[#ffff00] text-black px-1.5 py-0.5 border border-black font-mono">(CGPA 8.46/10)</span> with 8 months of industry experience building and shipping production web applications. I work across the full stack — React, TypeScript, Node.js, Express, MongoDB — and use AI-assisted development tools (Claude Code, Cursor) to ship faster without cutting corners on quality. Currently exploring adversarial robustness in ML-based security systems.
              </p>
            </motion.div>

            {/* Skills tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-2 max-w-3xl pt-2"
            >
              {[
                'React 19',
                'TypeScript',
                'Node.js / Express',
                'MongoDB Atlas',
                'Supabase',
                'Cloudflare R2',
                'Python & PyTorch',
                'FastAPI',
                'Adversarial ML',
                'Claude Code & Cursor',
              ].map((skill) => (
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={skill}
                  className="px-3 py-1 text-xs font-bold font-mono uppercase bg-white dark:bg-[#1c1d22] border-2 border-black dark:border-zinc-700 text-black dark:text-zinc-200 shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#ffff00] dark:hover:bg-[#ffff00] dark:hover:text-black transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 w-full max-w-xl"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 bg-black dark:bg-[#ffff00] text-white dark:text-black font-mono font-bold uppercase border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all text-center text-sm"
              >
                Featured Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 bg-[#ffff00] dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 text-black dark:text-white font-mono font-bold uppercase shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:bg-white hover:text-black dark:hover:bg-zinc-700 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all inline-flex items-center justify-center gap-2 text-center text-sm"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/Zishan_Nadaf_Resume.pdf"
                download
                className="px-6 py-3.5 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 text-black dark:text-white font-mono font-bold uppercase shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all inline-flex items-center justify-center gap-2 text-center text-sm"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4"
            >
              <a
                href="https://github.com/zrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-4 bg-white dark:bg-[#1c1d22] border-2 border-black dark:border-zinc-700 flex items-center gap-2 text-black dark:text-white shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all font-mono font-bold text-xs uppercase"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/zishanrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-4 bg-white dark:bg-[#1c1d22] border-2 border-black dark:border-zinc-700 flex items-center gap-2 text-black dark:text-white shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:bg-[#0A66C2] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all font-mono font-bold text-xs uppercase"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:zishanrn2003@gmail.com"
                className="h-11 px-4 bg-white dark:bg-[#1c1d22] border-2 border-black dark:border-zinc-700 flex items-center gap-2 text-black dark:text-white shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:bg-[#ffff00] hover:text-black dark:hover:bg-[#ffff00] dark:hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all font-mono font-bold text-xs uppercase"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 xl:absolute xl:bottom-10 xl:left-1/2 xl:-translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-black dark:text-zinc-300 hover:opacity-70 transition-colors group"
          >
            <span className="text-xs uppercase font-mono font-bold tracking-[0.3em] mb-4 border-2 border-black dark:border-zinc-700 px-2 py-1 bg-white dark:bg-[#1c1d22] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">Scroll</span>
            <div className="w-8 h-12 border-2 border-black dark:border-zinc-700 flex justify-center p-2 bg-white dark:bg-[#1c1d22] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)] group-hover:bg-[#f0f0f0] dark:group-hover:bg-zinc-800 transition-colors relative">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-black dark:bg-[#ffff00] absolute top-2"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

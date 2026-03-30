import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
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
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [-50, 0, -50],
          x: [0, 50, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      <div className="container relative z-10 px-6 py-32 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Main content */}
          <div className="space-y-8 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-[#ffff00] text-black font-mono font-bold tracking-widest text-sm mb-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] uppercase">
                <Sparkles className="w-4 h-4" />
                Hello, I'm
              </div>
              <h1 className="font-mono text-4xl sm:text-6xl md:text-8xl font-black text-black leading-[1.1] tracking-tight relative">
                <span>Zishan</span>
                <span className="block mt-2 bg-black text-white px-4 sm:px-6 inline-block shadow-[4px_4px_0px_rgba(0,0,0,0.1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,0.1)]">Nadaf</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-black font-medium max-w-2xl leading-relaxed mt-6 sm:mt-8 border-2 border-black p-4 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Full-Stack Developer & AI Enthusiast crafting innovative solutions
                with modern technologies.
              </p>
            </motion.div>

            {/* Skills tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl"
            >
              {['React', 'Python', 'Java', 'Node.js', 'Machine Learning', 'Cybersecurity'].map((skill, i) => (
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold font-mono uppercase bg-white border-2 border-black text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#f0f0f0] transition-colors cursor-default"
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
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-6 w-full max-w-lg"
            >
              <a href="#projects" className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-mono font-bold uppercase border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all text-center w-full sm:w-auto text-sm sm:text-base">
                Explore My Work
              </a>
              <a
                href="/Zishan_Nadaf_Resume.pdf"
                download
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ffff00] border-2 border-black text-black font-mono font-bold uppercase shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all inline-flex items-center justify-center gap-2 group w-full sm:w-auto text-sm sm:text-base"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-8 sm:pt-10"
            >
              <a
                href="https://github.com/zrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#f0f0f0] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://linkedin.com/in/zishanrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#0A66C2] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:zishanrn2003@gmail.com"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-2 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#f0f0f0] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
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
            className="flex flex-col items-center text-black hover:opacity-70 transition-colors group"
          >
            <span className="text-xs uppercase font-mono font-bold tracking-[0.3em] mb-4 border-2 border-black px-2 py-1 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)]">Scroll</span>
            <div className="w-8 h-12 border-2 border-black flex justify-center p-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:bg-[#f0f0f0] transition-colors relative">
              {/* That line */}
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-black absolute top-2"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium tracking-wide text-sm mb-4 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
                <Sparkles className="w-4 h-4" />
                Hello, I'm
              </div>
              <h1 className="font-sora text-6xl md:text-8xl font-black text-foreground leading-[1.1] tracking-tight relative drop-shadow-2xl flex flex-wrap justify-center gap-x-4">
                <span>Zishan</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-2">Nadaf</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed mt-4">
                Full-Stack Developer & AI Enthusiast crafting innovative solutions
                with modern technologies.
              </p>
            </motion.div>

            {/* Skills tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 max-w-2xl"
            >
              {['React', 'Python', 'Java', 'Node.js', 'Machine Learning', 'Cybersecurity'].map((skill, i) => (
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={skill}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-background/50 border border-border/50 backdrop-blur-md text-foreground shadow-sm hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
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
              className="flex flex-col sm:flex-row justify-center gap-4 pt-6 w-full max-w-lg"
            >
              <a href="#projects" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl transition-all duration-300 hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:-translate-y-1 text-center w-full sm:w-auto">
                Explore My Work
              </a>
              <a
                href="/Zishan_Nadaf_Resume.pdf"
                download
                className="px-8 py-4 bg-background/60 backdrop-blur-xl border border-border/50 text-foreground font-semibold rounded-2xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 text-center shadow-lg inline-flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex items-center justify-center gap-6 pt-10"
            >
              <a
                href="https://github.com/zrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-background/60 backdrop-blur-xl flex items-center justify-center border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/zishanrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-background/60 backdrop-blur-xl flex items-center justify-center border border-border/50 hover:border-[#0A66C2]/50 text-muted-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(10,102,194,0.2)]"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:zishanrn2003@gmail.com"
                className="w-14 h-14 rounded-2xl bg-background/60 backdrop-blur-xl flex items-center justify-center border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-[0.3em] mb-3 font-medium">Scroll</span>
            <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2 group-hover:border-primary/50 transition-colors bg-background/30 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-primary rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

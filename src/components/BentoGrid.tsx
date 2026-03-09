import { Code2, Brain, Shield, Briefcase, Award, GraduationCap, Zap, Github, Linkedin, Mail } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 12 } },
  };

  return (
    <section id="highlights" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none translate-y-[-50%]"></div>

      <div className="container px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Header */}
          <div className="mb-16">
            <p className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full inline-block mb-4 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">Overview</p>
            <h2 className="font-sora text-4xl md:text-5xl font-bold tracking-tight text-foreground drop-shadow-md">At a Glance</h2>
          </div>

          {/* Bento Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
          >
            {/* Large featured card - Full-Stack */}
            <motion.div variants={itemVariants} className="col-span-2 row-span-2 h-full">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="h-full transform-gpu" glareEnable={true} glareMaxOpacity={0.15} glarePosition="all" glareBorderRadius="1rem">
                <div className="h-full rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-black/5 hover:border-primary/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl group-hover:bg-primary/50 transition-all duration-700"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
                      <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-sora text-3xl font-bold text-foreground mb-3 drop-shadow-sm">Full-Stack Interface</h3>
                    <p className="text-muted-foreground text-lg mb-6 max-w-sm leading-relaxed">
                      Engineering high-performance, intelligent web applications with modern architecture.
                    </p>
                  </div>
                  <div className="relative z-10 flex gap-2 flex-wrap">
                    {['React', 'Node.js', 'TypeScript', 'Tailwind'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 text-sm font-medium bg-background/50 border border-border/50 rounded-lg text-foreground backdrop-blur-md shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* AI/ML Card */}
            <motion.div variants={itemVariants} className="col-span-1 row-span-1 h-full">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000} className="h-full transform-gpu" glareEnable={true} glareMaxOpacity={0.2} glareBorderRadius="1rem">
                <div className="h-full rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <Brain className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    <h3 className="font-sora font-bold text-lg text-foreground mb-1">AI & ML</h3>
                    <p className="text-sm text-muted-foreground">Neural Nets, CNN frameworks & Data Science</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Cybersecurity Card */}
            <motion.div variants={itemVariants} className="col-span-1 row-span-1 h-full">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000} className="h-full transform-gpu" glareEnable={true} glareMaxOpacity={0.2} glareBorderRadius="1rem">
                <div className="h-full rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-colors duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <Shield className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <h3 className="font-sora font-bold text-lg text-foreground mb-1">Cybersecurity</h3>
                    <p className="text-sm text-muted-foreground">Network Security & Threat Detection AI</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Stats Card - Experience */}
            <motion.div variants={itemVariants} className="col-span-1 row-span-1 h-full">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000} className="h-full transform-gpu" glareEnable={true} glareMaxOpacity={0.1} glareBorderRadius="1rem">
                <div className="h-full rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <Briefcase className="w-8 h-8 text-amber-400 mb-3 group-hover:-translate-y-2 transition-transform duration-500" />
                  <p className="font-sora text-5xl font-black text-foreground drop-shadow-md">3+</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">Internships</p>
                </div>
              </Tilt>
            </motion.div>

            {/* Stats Card - Projects */}
            <motion.div variants={itemVariants} className="col-span-1 row-span-1 h-full">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000} className="h-full transform-gpu" glareEnable={true} glareMaxOpacity={0.1} glareBorderRadius="1rem">
                <div className="h-full rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-rose-500/50 transition-colors duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <Zap className="w-8 h-8 text-rose-400 mb-3 group-hover:-translate-y-2 transition-transform duration-500" />
                  <p className="font-sora text-5xl font-black text-foreground drop-shadow-md">5+</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">Projects Built</p>
                </div>
              </Tilt>
            </motion.div>

            {/* Education Card - Wide */}
            <motion.div variants={itemVariants} className="col-span-2 row-span-1 h-full">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="h-full transform-gpu" glareEnable={true} glareMaxOpacity={0.15} glareBorderRadius="1rem">
                <div className="h-full rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl p-6 md:p-8 flex items-center gap-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-cyan-500/20">
                    <GraduationCap className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sora text-xl font-bold text-foreground mb-1">B.Tech Computer Science</h3>
                    <p className="text-muted-foreground font-medium">SKN Sinhgad College of Engineering</p>
                  </div>
                  <div className="text-right pl-4 border-l border-border/50">
                    <p className="font-sora text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 drop-shadow-sm">8.32</p>
                    <p className="text-sm font-bold text-muted-foreground tracking-widest uppercase mt-1">CGPA</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Certifications Card */}
            <motion.div variants={itemVariants} className="col-span-2 md:col-span-2 row-span-1 h-full">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="h-full transform-gpu" glareEnable={true} glareMaxOpacity={0.15} glareBorderRadius="1rem">
                <div className="h-full rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-violet-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <Award className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="font-sora text-xl font-bold text-foreground">Elite Certifications</h3>
                  </div>
                  <div className="flex gap-3 flex-wrap relative z-10">
                    {['Google Cloud Architect', 'Cisco CyberOps', 'Microsoft AI', 'Walmart Software Eng.'].map(cert => (
                      <span key={cert} className="text-sm font-medium px-4 py-2 bg-background/50 border border-border/50 rounded-xl text-foreground hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-colors cursor-default shadow-sm backdrop-blur-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Connect Card */}
            <motion.div variants={itemVariants} className="col-span-2 md:col-span-4 row-span-1 h-full">
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000} className="h-full transform-gpu" glareEnable={true} glareMaxOpacity={0.1} glareBorderRadius="1rem">
                <div className="h-full rounded-2xl border border-white/10 bg-card/40 backdrop-blur-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="text-center md:text-left relative z-10">
                    <h3 className="font-sora text-2xl font-bold text-foreground mb-2">Let's build something incredible.</h3>
                    <p className="text-muted-foreground font-medium flex items-center justify-center md:justify-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Actively open to new opportunities
                    </p>
                  </div>

                  <div className="flex gap-4 relative z-10">
                    <a href="https://github.com/zrn2003" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-background/80 border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/zishanrn2003" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-background/80 border border-border/50 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:zishanrn2003@gmail.com" className="px-8 flex items-center gap-3 rounded-2xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)]">
                      <Mail className="w-5 h-5" /> Say Hello
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

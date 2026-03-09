import { Code2, Database, Shield, Brain, Sparkles } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const expertise = [
    { icon: Code2, title: 'Full-Stack Development', desc: 'React, Node.js, modern frameworks', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { icon: Brain, title: 'AI & Machine Learning', desc: 'CNN models, data science', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    { icon: Shield, title: 'Cybersecurity', desc: 'Threat detection, security systems', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { icon: Database, title: 'Database Engineering', desc: 'SQL optimization, data architecture', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

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
            className="mb-16 md:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-full mb-6 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
              <Sparkles className="w-4 h-4" /> About Me
            </div>
            <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground drop-shadow-md leading-[1.1]">
              Building Technology <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">That Makes a Difference</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
                  I'm a <span className="font-semibold text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">pre-final year B.Tech CSE student</span> at
                  SKN Sinhgad College of Engineering, passionate about engineering scalable technology that solves high-impact problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  With deep expertise spanning full-stack development, ethical hacking, and AI/ML data science, I bridge the gap between complex algorithmic challenges and elegant, user-centric interfaces. My journey ranges from training CNN diagnostic models to architecting real-time phishing detection systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Maintaining a robust <strong className="text-foreground">8.32 CGPA</strong>, I fuse academic rigor with practical industry experience—having impacted real users through successful engineering internships at Rezoomex, TeachNook, and Lead Soft.
                </p>
              </div>

              {/* Glowing Stats Bar */}
              <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-border/50 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                {[
                  { value: '3+', label: 'Internships' },
                  { value: '5+', label: 'Projects Built' },
                  { value: '8.32', label: 'CGPA' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                    className="flex flex-col group"
                  >
                    <p className="font-sora text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 group-hover:from-primary group-hover:to-secondary transition-all duration-300 drop-shadow-sm mb-2">{stat.value}</p>
                    <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Futuristic Expertise cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              {expertise.map((item, index) => (
                <Tilt
                  key={item.title}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  scale={1.02}
                  transitionSpeed={2000}
                  className="w-full transform-gpu"
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareBorderRadius="1rem"
                >
                  <div className="h-full rounded-2xl border border-white/5 bg-background/40 backdrop-blur-xl p-5 flex items-start gap-5 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg} ${item.border} border group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                      <item.icon className={`w-6 h-6 ${item.color} drop-shadow-md`} />
                    </div>

                    <div className="flex-1 relative z-10 pt-1">
                      <h3 className="font-sora font-bold text-foreground text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Tilt>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

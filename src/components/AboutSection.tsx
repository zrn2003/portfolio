import { Code2, Database, Shield, Brain, Sparkles } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const expertise = [
    { icon: Code2, title: 'Full-Stack Development', desc: 'React, Node.js, modern frameworks', color: 'text-zinc-400', bg: 'bg-zinc-500/10', border: 'border-zinc-500/20' },
    { icon: Brain, title: 'AI & Machine Learning', desc: 'CNN models, data science', color: 'text-neutral-400', bg: 'bg-neutral-500/10', border: 'border-neutral-500/20' },
    { icon: Shield, title: 'Cybersecurity', desc: 'Phishing mitigation, DDoS defense, Encryption architecture', color: 'text-stone-400', bg: 'bg-stone-500/10', border: 'border-stone-500/20' },
    { icon: Database, title: 'Database Engineering', desc: 'SQL optimization, data architecture', color: 'text-gray-400', bg: 'bg-gray-500/10', border: 'border-gray-500/20' },
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
            <div className="mb-16 md:mb-24">
              <p className="inline-block px-3 py-1 font-mono font-bold tracking-widest text-black border-2 border-black bg-[#ffff00] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)]">About</p>
              <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-black text-black uppercase tracking-wider leading-tight">
                Building Tech <br className="hidden md:block" />
                <span className="bg-black text-white px-2 md:px-4 py-1 mt-2 sm:mt-4 inline-block">That Matters</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="bg-white border-2 border-black p-6 md:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                <p className="text-xl md:text-2xl text-black font-bold leading-relaxed">
                  I'm a <span className="bg-[#ffff00] px-2 border-2 border-black tracking-widest uppercase font-mono shadow-[2px_2px_0px_rgba(0,0,0,1)]">final year B.Tech CSE student</span> at
                  SKN Sinhgad College of Engineering, passionate about engineering scalable technology that solves high-impact problems.
                </p>
                <div className="w-full h-1 bg-black my-6"></div>
                <p className="text-lg text-black font-medium leading-relaxed mt-6">
                  With deep expertise spanning full-stack development, ethical hacking, and AI/ML data science, I bridge the gap between complex algorithmic challenges and elegant, user-centric interfaces. My journey ranges from training CNN diagnostic models to architecting real-time phishing detection systems.
                </p>
                <p className="text-lg text-black font-medium leading-relaxed mt-4">
                  Maintaining a robust <strong className="border-b-2 border-black">8.32 CGPA</strong>, I fuse academic rigor with practical industry experience—having impacted real users through successful engineering internships at Rezoomex, TeachNook, and Lead Soft.
                </p>
              </div>

              {/* Glowing Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
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
                    className="flex flex-col items-center bg-white border-2 border-black py-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <p className="font-mono text-4xl md:text-5xl font-black text-black mb-2">{stat.value}</p>
                    <p className="text-xs font-bold text-black tracking-widest uppercase text-center bg-[#f0f0f0] border-2 border-black px-2 py-1 mx-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Futuristic Expertise cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
            >
              {expertise.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white border-2 border-black p-5 flex flex-col items-start gap-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all group"
                >
                  <div className="w-12 h-12 bg-[#f0f0f0] border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <item.icon className={`w-6 h-6 text-black`} />
                  </div>
                  <div className="flex-1 w-full border-t-2 border-black pt-4">
                    <h3 className="font-mono font-bold text-black text-sm mb-2 uppercase tracking-wider">{item.title}</h3>
                    <p className="text-sm text-black font-medium">{item.desc}</p>
                  </div>
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

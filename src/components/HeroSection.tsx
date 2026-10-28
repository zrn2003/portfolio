import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, Sparkles, ArrowRight, Terminal, Layers, Brain, Shield, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TelemetryBar from './TelemetryBar';
import { smoothScrollTo } from '@/lib/smoothScroll';

interface HeroSectionProps {
  onOpenTerminal?: () => void;
  activeDiscipline?: string;
  onDisciplineChange?: (discipline: string) => void;
}

type DisciplineType = 'all' | 'fullstack' | 'aiml' | 'cybersecurity';

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal, activeDiscipline, onDisciplineChange }) => {
  const [internalDiscipline, setInternalDiscipline] = useState<DisciplineType>('all');
  const discipline = (activeDiscipline as DisciplineType) || internalDiscipline;

  const handleSelectDiscipline = (d: DisciplineType) => {
    setInternalDiscipline(d);
    onDisciplineChange?.(d);
  };

  const disciplineContent = {
    all: {
      title: 'Full Stack · AI/ML · Cybersecurity',
      badge: 'Interdisciplinary Profile',
      bio: (
        <>
          B.E. Computer Science graduate <span className="font-bold bg-[#ffff00] dark:bg-[#00FF66] text-black px-1.5 py-0.5 border border-black font-mono">(CGPA 8.46/10)</span> with 8 months of industry experience building and shipping production web applications. I work across the full stack — React 19, TypeScript, Node.js, Express, MongoDB, Cloudflare R2 — and use AI-assisted development tools (Claude Code, Cursor) to ship faster without cutting corners on quality. Currently exploring adversarial robustness in ML-based security systems.
        </>
      ),
      skills: ['React 19', 'TypeScript', 'Node.js / Express', 'MongoDB Atlas', 'Cloudflare R2', 'Python & PyTorch', 'FastAPI', 'Adversarial ML', 'Claude Code & Cursor'],
    },
    fullstack: {
      title: 'Full Stack Web Engineering',
      badge: 'Client Production Systems',
      bio: (
        <>
          Production Full-Stack Engineer with 8 months of professional experience architecting scalable client platforms like <strong className="text-black dark:text-[#00F0FF] underline decoration-2">Brutalage Marketplace</strong>. Specialized in React 19, TypeScript, Node.js, Express REST APIs, MongoDB Atlas, and Cloudflare R2 S3-compatible cloud storage with CI/CD automation.
        </>
      ),
      skills: ['React 19', 'TypeScript', 'Node.js / Express', 'MongoDB Atlas', 'Supabase (PostgreSQL)', 'Cloudflare R2', 'AWS SDK', 'Tailwind CSS', 'Docker', 'Claude Code'],
    },
    aiml: {
      title: 'AI & Machine Learning Engineering',
      badge: '92% Test Accuracy · Published Author',
      bio: (
        <>
          AI/ML Engineer and published researcher in <strong className="text-black dark:text-[#00FF66] underline decoration-2">IJSRET Vol. 12 Issue 2 (2026)</strong>. Engineered SkinSight with a novel two-stage deep learning pipeline (ResNet18 gating + ResNet50/InceptionV3 ensemble) achieving 92% classification accuracy and served via high-throughput FastAPI microservices.
        </>
      ),
      skills: ['PyTorch', 'TensorFlow', 'ResNet18 / 50', 'InceptionV3', 'FastAPI ML Serving', 'Model Evaluation', 'pytest CI/CD', 'ETL Pipelines', 'IJSRET Published'],
    },
    cybersecurity: {
      title: 'Cybersecurity & Adversarial ML',
      badge: 'Minor in Cyber & Digital Forensics',
      bio: (
        <>
          Cybersecurity Researcher with a <span className="font-bold bg-[#ffff00] dark:bg-[#A855F7] text-black dark:text-white px-1.5 py-0.5 border border-black font-mono">Minor in Cybersecurity & Digital Forensics</span>. Focused on adversarial machine learning (FGSM/PGD attacks, defensive robustness), security auditing, OWASP Top 10 mitigation, and systems like PhishGuard AI.
        </>
      ),
      skills: ['Adversarial ML (FGSM)', 'Network Security', 'OWASP Top 10', 'Digital Forensics', 'Penetration Testing', 'PhishGuard AI', 'Secure API Design'],
    },
  };

  const currentContent = disciplineContent[discipline];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Floating Glowing Cyber Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 90, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00FF66]/15 dark:bg-[#00FF66]/10 rounded-full blur-[130px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [-40, 0, -40],
          x: [0, 40, 0],
          scale: [1, 1.25, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#00F0FF]/15 dark:bg-[#00F0FF]/10 rounded-full blur-[140px] -z-10 pointer-events-none"
      />

      <div className="container relative z-10 px-4 sm:px-6 pt-20 sm:pt-28 pb-10 sm:pb-16 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center w-full">
          {/* Main content */}
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-3.5 sm:space-y-5 flex flex-col items-center w-full"
            >
              {/* Telemetry pill */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] font-bold">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 border-2 border-black dark:border-[#1E293B] bg-white dark:bg-[#0F1626] text-black dark:text-[#00FF66] shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#ffff00] border border-black dark:border-none dark:bg-[#00FF66] animate-pulse" />
                  SEC-NODE: ACTIVE · PUNE
                </span>
                <span className="hidden sm:inline-flex px-3 py-1 border-2 border-black dark:border-[#1E293B] bg-[#ffff00] dark:bg-[#131d33] text-black dark:text-[#00F0FF] shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase font-mono">
                  AES-256 ENCRYPTED
                </span>
                <span className="inline-flex px-2.5 py-0.5 sm:px-3 sm:py-1 border-2 border-black dark:border-[#1E293B] bg-black text-white dark:bg-[#1f1638] dark:text-[#A855F7] shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase font-mono">
                  CGPA 8.46 / 10
                </span>
              </div>

              <h1 className="font-mono text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black dark:text-white leading-[1.05] tracking-tight relative text-center">
                <span>Zishan</span>
                <span className="block mt-1 sm:mt-2 bg-[#ffff00] dark:bg-[#00FF66] text-black border-2 border-black dark:border-none px-4 sm:px-6 inline-block shadow-[3px_3px_0px_rgba(0,0,0,0.15)] sm:shadow-[6px_6px_0px_rgba(0,0,0,0.15)]">Nadaf</span>
              </h1>

              {/* T-SHAPED DISCIPLINE FILTER INTERACTION */}
              <div className="w-full flex flex-col items-center gap-1.5 sm:gap-2 pt-1">
                <p className="font-mono text-[9px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Select discipline focus mode:
                </p>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 bg-black/5 dark:bg-[#0F1626] border-2 border-black dark:border-[#1E293B] shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1)] w-full sm:w-auto">
                  <button
                    onClick={() => handleSelectDiscipline('all')}
                    className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                      discipline === 'all'
                        ? 'bg-[#ffff00] dark:bg-[#00FF66] text-black font-black border border-black dark:border-transparent shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                        : 'text-black dark:text-zinc-300 hover:bg-[#ffff00]/30 hover:text-black dark:hover:text-[#00FF66]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    All ({'3'})
                  </button>
                  <button
                    onClick={() => handleSelectDiscipline('fullstack')}
                    className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                      discipline === 'fullstack'
                        ? 'bg-[#ffff00] dark:bg-[#00F0FF] text-black font-black border border-black dark:border-transparent shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                        : 'text-black dark:text-zinc-300 hover:bg-[#ffff00]/30 hover:text-black dark:hover:text-[#00F0FF]'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    Full Stack
                  </button>
                  <button
                    onClick={() => handleSelectDiscipline('aiml')}
                    className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                      discipline === 'aiml'
                        ? 'bg-[#ffff00] dark:bg-[#00FF66] text-black font-black border border-black dark:border-transparent shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                        : 'text-black dark:text-zinc-300 hover:bg-[#ffff00]/30 hover:text-black dark:hover:text-[#00FF66]'
                    }`}
                  >
                    <Brain className="w-3.5 h-3.5" />
                    AI & ML
                  </button>
                  <button
                    onClick={() => handleSelectDiscipline('cybersecurity')}
                    className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                      discipline === 'cybersecurity'
                        ? 'bg-[#ffff00] dark:bg-[#A855F7] text-black dark:text-white font-black border border-black dark:border-transparent shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                        : 'text-black dark:text-zinc-300 hover:bg-[#ffff00]/30 hover:text-black dark:hover:text-[#A855F7]'
                    }`}
                  >
                    <Shield className="w-3.5 h-3.5" />
                    CyberSec
                  </button>
                </div>
              </div>

              {/* Dynamic Bio according to selected discipline */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={discipline}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <p className="text-xs sm:text-base md:text-lg text-black dark:text-zinc-200 font-medium max-w-3xl leading-relaxed mt-1 sm:mt-2 border-2 border-black dark:border-[#1E293B] p-3.5 sm:p-6 bg-white dark:bg-[#0F1626]/95 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.8)] text-left sm:text-center mx-auto">
                    {currentContent.bio}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Dynamic Skills tags based on discipline */}
            <motion.div
              layout
              className="flex flex-wrap justify-center gap-1 sm:gap-2 max-w-3xl pt-0.5 sm:pt-1"
            >
              {currentContent.skills.map((skill) => (
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  key={skill}
                  className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold font-mono uppercase bg-white dark:bg-[#0F1626] border border-black sm:border-2 dark:border-[#1E293B] text-black dark:text-zinc-200 shadow-[1px_1px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#ffff00] hover:text-black dark:hover:border-[#00FF66] dark:hover:text-[#00FF66] transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs - 2x2 grid on mobile, flex row on sm */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-2 sm:gap-3.5 pt-2 sm:pt-4 w-full max-w-2xl"
            >
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="px-3 py-2.5 sm:px-6 sm:py-3.5 bg-[#ffff00] dark:bg-[#00FF66] text-black font-mono font-black uppercase border-2 border-black dark:border-[#00FF66] shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white dark:hover:bg-[#00F0FF] dark:hover:text-black dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center justify-center gap-1.5 text-center text-xs sm:text-sm"
                >
                  <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black flex-shrink-0" />
                  <span className="truncate">&gt;_ Terminal</span>
                </button>
              )}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('projects');
                }}
                className="px-3 py-2.5 sm:px-6 sm:py-3.5 bg-black dark:bg-[#0F1626] text-white dark:text-[#00F0FF] font-mono font-bold uppercase border-2 border-black dark:border-[#1E293B] shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black dark:hover:border-[#00F0FF] dark:hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] transition-all text-center text-xs sm:text-sm flex items-center justify-center"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('contact');
                }}
                className="px-3 py-2.5 sm:px-6 sm:py-3.5 bg-[#ffff00] dark:bg-[#00FF66] border-2 border-black dark:border-[#00FF66] text-black dark:text-black font-mono font-bold uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black dark:hover:bg-[#00F0FF] dark:hover:text-black hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center justify-center gap-1 text-center text-xs sm:text-sm"
              >
                Contact <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              </a>
              <a
                href="/Zishan_Nadaf_Resume.pdf"
                download
                className="px-3 py-2.5 sm:px-5 sm:py-3.5 bg-white dark:bg-[#0c121f] border-2 border-black dark:border-[#1E293B] text-black dark:text-zinc-300 font-mono font-bold uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center justify-center gap-1 text-center text-xs sm:text-sm"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2 sm:pt-4"
            >
              <a
                href="https://github.com/zrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 sm:h-11 px-3 sm:px-4 bg-white dark:bg-[#0F1626] border-2 border-black dark:border-[#1E293B] flex items-center gap-1.5 sm:gap-2 text-black dark:text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#f0f0f0] dark:hover:border-[#00FF66] dark:hover:text-[#00FF66] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-mono font-bold text-[11px] sm:text-xs uppercase"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/zishanrn2003"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 sm:h-11 px-3 sm:px-4 bg-white dark:bg-[#0F1626] border-2 border-black dark:border-[#1E293B] flex items-center gap-1.5 sm:gap-2 text-black dark:text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#0A66C2] hover:text-white dark:hover:border-[#00F0FF] dark:hover:text-[#00F0FF] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-mono font-bold text-[11px] sm:text-xs uppercase"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:zishanrn2003@gmail.com"
                className="h-9 sm:h-11 px-3 sm:px-4 bg-white dark:bg-[#0F1626] border-2 border-black dark:border-[#1E293B] flex items-center gap-1.5 sm:gap-2 text-black dark:text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#ffff00] hover:text-black dark:hover:border-[#00FF66] dark:hover:text-[#00FF66] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-mono font-bold text-[11px] sm:text-xs uppercase"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Verified Engineering Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="w-full mt-6 sm:mt-8 z-10"
        >
          <TelemetryBar activeDiscipline={discipline} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 xl:absolute xl:bottom-10 xl:left-1/2 xl:-translate-x-1/2"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('about');
            }}
            className="flex flex-col items-center text-black dark:text-zinc-300 hover:opacity-70 transition-colors group"
          >
            <span className="text-xs uppercase font-mono font-bold tracking-[0.3em] mb-4 border-2 border-black dark:border-zinc-700 px-2 py-1 bg-white dark:bg-[#1c1d22] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">Scroll</span>
            <div className="w-8 h-12 border-2 border-black dark:border-zinc-700 flex justify-center p-2 bg-white dark:bg-[#1c1d22] shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)] group-hover:bg-[#f0f0f0] dark:group-hover:bg-zinc-800 transition-colors relative">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-[#ffff00] border border-black dark:border-none dark:bg-[#00FF66] absolute top-2"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { ExternalLink, Github, CheckCircle, FileText } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import { motion } from 'framer-motion';

const PublicationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="publications" className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#0c0d10] border-t-2 border-b-2 border-black dark:border-zinc-700 relative overflow-hidden">
      <div className="container px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Header */}
          <div className="mb-14">
            <p className="inline-block px-3 py-1 font-mono font-bold tracking-widest text-black border-2 border-black dark:border-zinc-700 bg-[#ffff00] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
              Research & Academic Credentials
            </p>
            <h2 className="font-mono text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-wider">
              Peer-Reviewed Publications
            </h2>
            <p className="mt-4 text-black dark:text-zinc-300 font-medium text-base md:text-lg max-w-2xl">
              Contributing rigorous scientific inquiry and experimental validation to international engineering journals.
            </p>
          </div>

          {/* Publication Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 p-6 md:p-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_rgba(0,0,0,0.8)] relative"
          >
            {/* Top Bar Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black dark:border-zinc-700 pb-4 mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffff00] text-black border-2 border-black font-mono font-bold text-xs uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <CheckCircle className="w-3.5 h-3.5 text-black" />
                  Peer-Reviewed Journal Article
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider bg-black dark:bg-zinc-800 text-white px-3 py-1 border border-black dark:border-zinc-700">
                  Published · 2025
                </span>
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-zinc-300 bg-[#f0f0f0] dark:bg-zinc-800 border border-black dark:border-zinc-700 px-2.5 py-1">
                Volume 12, Issue 2 · Paper #370
              </span>
            </div>

            {/* Paper Title & Journal */}
            <div className="space-y-3 mb-6">
              <h3 className="font-mono text-xl sm:text-2xl md:text-3xl font-black text-black dark:text-white leading-snug uppercase">
                SkinSight: A Deep Learning-Based Web Application for Dermatological Image Classification
              </h3>
              <p className="text-sm sm:text-base font-mono font-bold text-black/80 dark:text-zinc-400 uppercase tracking-wide">
                International Journal of Scientific Research in Engineering and Technology (IJSRET)
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs sm:text-sm font-mono font-bold text-black dark:text-zinc-300 bg-[#f5f5f5] dark:bg-zinc-900 p-2 border border-black dark:border-zinc-700 inline-block">
                  Authors: <span className="underline decoration-[#ffff00] decoration-2">Zishan Nadaf</span> · SKN Sinhgad College of Engineering
                </p>
                <a
                  href="https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-black dark:text-[#ffff00] underline inline-flex items-center gap-1 p-2 bg-[#ffff00]/20 dark:bg-zinc-900 border border-black dark:border-zinc-700 hover:opacity-80"
                >
                  <FileText className="w-3.5 h-3.5" />
                  PDF: IJSRET_V12_issue2_370.pdf
                </a>
              </div>
            </div>

            {/* Abstract & Scientific Findings */}
            <div className="space-y-4 mb-8">
              <div className="bg-[#fafafa] dark:bg-[#121316] border-2 border-black dark:border-zinc-700 p-5 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-black dark:text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#ffff00]" /> Abstract & System Overview
                </h4>
                <p className="text-sm md:text-base text-black dark:text-zinc-200 font-medium leading-relaxed">
                  Skin condition diagnosis often requires specialized dermatologist access that remains inaccessible to underserved populations. This paper presents <strong>SkinSight</strong>, an AI-powered clinical triage web platform powered by a novel two-stage deep learning pipeline combining a <strong>ResNet18 gating classifier</strong> with a <strong>ResNet50 / InceptionV3 ensemble</strong>. The architecture achieves <strong>92% classification accuracy</strong> on held-out test datasets, served via an asynchronous FastAPI backend and Dockerized CI/CD workflow.
                </p>
              </div>

              {/* Research Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 p-3 text-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <p className="font-mono text-2xl sm:text-3xl font-black text-black dark:text-white">92%</p>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-black dark:text-zinc-400 mt-1">Test Accuracy</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 p-3 text-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <p className="font-mono text-2xl sm:text-3xl font-black text-black dark:text-white">2-Stage</p>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-black dark:text-zinc-400 mt-1">Deep Pipeline</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 p-3 text-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <p className="font-mono text-2xl sm:text-3xl font-black text-black dark:text-white">Ensemble</p>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-black dark:text-zinc-400 mt-1">ResNet50 + Inception</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 p-3 text-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <p className="font-mono text-2xl sm:text-3xl font-black text-black dark:text-white">FastAPI</p>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-black dark:text-zinc-400 mt-1">REST ML Serving</p>
                </div>
              </div>
            </div>

            {/* Actions & Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-black dark:border-zinc-700 pt-6">
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'ResNet18', 'ResNet50', 'InceptionV3', 'FastAPI', 'React.js', 'Docker', 'pytest'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-mono font-bold bg-[#f0f0f0] dark:bg-zinc-800 border border-black dark:border-zinc-700 text-black dark:text-zinc-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#ffff00] text-black border-2 border-black font-mono font-bold uppercase text-xs shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Read Paper (PDF)
                </a>
                <a
                  href="https://skinsightai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-zinc-800 text-black dark:text-white border-2 border-black dark:border-zinc-700 font-mono font-bold uppercase text-xs shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#f0f0f0] dark:hover:bg-zinc-700 hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live App
                </a>
                <a
                  href="https://github.com/zrn2003/SkinSight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 font-mono font-bold uppercase text-xs text-black dark:text-white shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#f0f0f0] dark:hover:bg-zinc-700 hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  Codebase
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PublicationSection;

import { useState } from 'react';
import { ExternalLink, Github, Shield, Brain, ShoppingBag, Users, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import useScrollAnimation from '@/hooks/use-scroll-animation';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  status: string;
  badge: string;
  liveUrl?: string | null;
  liveLabel?: string;
  repoUrl?: string | null;
  paperUrl?: string | null;
  publication?: string | null;
  tagline: string;
  problem: string;
  highlights: string[];
  builtPoints: string[];
  tech: string[];
  icon: any;
  featured?: boolean;
}

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedId, setExpandedId] = useState<string | null>('brutalage');

  const projects: Project[] = [
    {
      id: 'brutalage',
      title: 'Brutalage Marketplace',
      subtitle: 'Production Gaming Account Reseller Storefront',
      type: 'Client Project · Full Stack · Production',
      status: 'Live in Production',
      badge: 'FEATURED · CLIENT PROJECT',
      liveUrl: 'https://brutalagemarketplace.store',
      liveLabel: 'Live Store',
      repoUrl: 'https://github.com/zrn2003/brutalage',
      tagline: 'A production gaming account reseller marketplace built for a client in a gaming community who was managing sales manually over WhatsApp.',
      problem: 'The client had no storefront, no order tracking, and no way to scale beyond direct messages. He needed a real product with listings, images, authentication, and a clean buyer-facing UI.',
      builtPoints: [
        'Full MERN-stack architecture designed and built solo from scratch',
        'React 19 + TypeScript + Tailwind CSS 4 frontend deployed on Vercel',
        'Node.js + Express REST API backend deployed on Render',
        'MongoDB Atlas for account listings and order data',
        'Supabase (PostgreSQL) for structured relational data — user profiles, transactions',
        'Cloudflare R2 via AWS SDK (S3-compatible) for image/screenshot storage with zero egress fees',
        'Firebase Authentication + Firebase Admin SDK for JWT, role-based access (buyer/seller)',
        'Claude Code for automated test generation, API contract validation, and edge-case debugging',
        'Cursor IDE for AI pair-programming throughout development'
      ],
      highlights: [
        'Sole developer — owned frontend, backend, database, storage, auth, and deployment',
        'Cloudflare R2 chosen over S3 for zero egress fees on a media-heavy marketplace',
        'AI-assisted testing with Claude Code reduced manual QA time significantly',
        'Role-based access control for buyer and seller workflows'
      ],
      tech: [
        'React 19', 'TypeScript', 'Tailwind CSS 4', 'Node.js', 'Express',
        'MongoDB', 'Supabase', 'Cloudflare R2', 'Firebase Auth', 'AWS SDK', 'Claude Code', 'Cursor'
      ],
      icon: ShoppingBag,
      featured: true,
    },
    {
      id: 'skinsight',
      title: 'SkinSight',
      subtitle: 'AI-Powered Dermatological Classification Web App',
      type: 'Research Project · Full Stack · AI/ML · Published',
      status: 'Published · Deployed',
      badge: 'PEER-REVIEWED PUBLICATION',
      publication: 'IJSRET Vol. 12, Issue 2, 2025 (Peer-Reviewed)',
      liveUrl: 'https://skinsightai.vercel.app/',
      liveLabel: 'Live App',
      repoUrl: 'https://github.com/zrn2003/SkinSight',
      paperUrl: 'https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf',
      tagline: 'An AI-powered web application for preliminary skin condition classification from uploaded images — making specialist-level triage more accessible.',
      problem: "Skin condition diagnosis requires dermatologist access that most people don't have. A web-based tool that classifies uploaded skin images could reduce unnecessary clinic visits and flag high-risk cases earlier.",
      builtPoints: [
        'Two-stage deep learning pipeline: ResNet18 gating + ResNet50/InceptionV3 ensemble',
        '92% classification accuracy on held-out test dataset',
        'FastAPI REST backend serving ML inference with structured JSON responses',
        'React.js + TypeScript frontend with image upload and results display',
        'Dockerised deployment with GitHub Actions CI/CD pipeline',
        'pytest test suites covering happy-path, boundary, and failure scenarios',
        'Results peer-reviewed and published in IJSRET Vol. 12, Issue 2'
      ],
      highlights: [
        '92% classification accuracy — peer-reviewed and published in IJSRET',
        'Full CI/CD pipeline with zero-regression automated testing via pytest',
        'End-to-end ownership from model training and gating architecture to frontend deployment'
      ],
      tech: [
        'Python', 'TensorFlow', 'ResNet18', 'ResNet50', 'InceptionV3',
        'FastAPI', 'React.js', 'TypeScript', 'Docker', 'GitHub Actions', 'pytest'
      ],
      icon: Brain,
      featured: true,
    },
    {
      id: 'phishguard',
      title: 'PhishGuard AI',
      subtitle: 'Adversarial Robustness & Phishing Detection System',
      type: 'Personal/Research Project · Full Stack · Cybersecurity · ML',
      status: 'Research Ongoing (Adversarial Robustness Extension)',
      badge: 'CYBERSECURITY RESEARCH',
      liveUrl: null,
      repoUrl: 'https://github.com/zrn2003/PhishGuard-AI',
      tagline: 'A real-time phishing URL detection system using a PyTorch neural network with a 30-feature extraction pipeline and a Next.js monitoring dashboard.',
      problem: 'Phishing detection tools are often brittle — an attacker who knows the feature set can craft adversarial URLs that evade detection. Built a detection system and then stress-tested it with adversarial attacks to understand exactly where it breaks.',
      builtPoints: [
        'PyTorch neural network classifying URLs from 30 extracted features tiered by attacker cost (URL string, TLS certs, page content, domain registration & reputation)',
        'FastAPI backend serving real-time classification requests',
        'Next.js frontend monitoring dashboard with live URL submission and feature breakdown',
        'Held-out test set of 2,211 URLs achieving 96.7% accuracy on clean data',
        'PGD adversarial attack restricted to 10 URL-string features dropped recall on 976 phishing samples from 94.4% to 0.8% — exposing a critical vulnerability',
        'Adding TLS certificate features cut adversarial recall to zero, demonstrating multi-tier defense efficacy',
        'Found and fixed a label inversion bug and a train-inference feature mismatch before trusting results',
        'Built under supervision of Prof. N.M. Sawant (Cybersecurity Minor Mentor)',
        'Research ongoing: Adversarial training under cost-tiered budgets, SHAP feature attributions, NSL-KDD pilot, and extension to CIC-IDS2017 dataset'
      ],
      highlights: [
        '96.7% accuracy on clean data; adversarial pilot exposed feature-tier vulnerabilities',
        'PGD attack reduced phishing recall to 0.8% — mitigated via multi-tier feature hardening',
        'Research cited in MS applications (NTHU Institute of Information Security)'
      ],
      tech: [
        'Python', 'PyTorch', 'FastAPI', 'Next.js', 'AWS Lambda', 'React.js', 'Adversarial ML'
      ],
      icon: Shield,
      featured: false,
    },
    {
      id: 'attendance',
      title: 'Smart Attendance System',
      subtitle: 'SQL-Optimised Full-Stack Platform',
      type: 'Academic Full Stack Project',
      status: 'Completed',
      badge: 'FULL STACK PLATFORM',
      liveUrl: null,
      repoUrl: 'https://github.com/zrn2003/smart-school-frontends',
      tagline: 'A full-stack attendance management platform with SQL-optimised data layer and KPI dashboard views.',
      problem: 'Educational institutions struggle with slow manual attendance workflows and bloated query latencies on large relational databases.',
      builtPoints: [
        'Full stack: Angular/React.js frontend + Node.js/Express backend + SQL Server database',
        'Relational schema design, migrations, and indexes from scratch',
        'Identified schema-level logic issues through data validation; rewrote queries with proper joins and indexes — reduced query execution time by 60%',
        'Dashboard-style UI views surfacing attendance KPIs to end users'
      ],
      highlights: [
        'Reduced query execution time by 60% with index redesign and query optimizations',
        'Relational schema design and data validation from scratch'
      ],
      tech: [
        'React.js', 'Angular', 'Node.js', 'Express.js', 'SQL Server', 'Git'
      ],
      icon: Users,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-6">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Header */}
          <div className="mb-14">
            <p className="inline-block px-3 py-1 font-mono font-bold tracking-widest text-black border-2 border-black dark:border-zinc-700 bg-[#ffff00] uppercase mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">Portfolio</p>
            <h2 className="font-mono text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-wider">Featured Systems & Research</h2>
            <p className="mt-4 text-black dark:text-zinc-300 font-medium text-base md:text-lg max-w-2xl">
              Production client systems, published deep learning research, and adversarial cybersecurity pipelines.
            </p>
          </div>

          {/* Projects Stack */}
          <div className="space-y-8">
            {projects.map((project) => {
              const isExpanded = expandedId === project.id;

              return (
                <div
                  key={project.id}
                  className={`bg-white dark:bg-[#16171b] border-2 border-black dark:border-zinc-700 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.8)] transition-all ${
                    project.featured ? 'border-black dark:border-zinc-600' : ''
                  }`}
                >
                  {/* Top Bar with Badge & Actions */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#ffff00] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)] flex-shrink-0">
                          <project.icon className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-mono text-xs font-bold uppercase tracking-wider bg-black dark:bg-[#ffff00] text-white dark:text-black px-2.5 py-0.5 border border-black">
                              {project.badge}
                            </span>
                            <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#f0f0f0] dark:bg-zinc-800 text-black dark:text-zinc-200 px-2 py-0.5 border border-black dark:border-zinc-700">
                              {project.status}
                            </span>
                          </div>
                          <h3 className="font-mono text-2xl md:text-3xl font-black text-black dark:text-white uppercase tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Direct Links */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.paperUrl && (
                          <a
                            href={project.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#ffff00] border-2 border-black font-mono font-bold uppercase text-xs text-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            Read Paper (PDF)
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 px-4 py-2 border-2 border-black font-mono font-bold uppercase text-xs shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all ${
                              project.paperUrl
                                ? 'bg-white dark:bg-zinc-800 text-black dark:text-white dark:border-zinc-700 hover:bg-[#f0f0f0] dark:hover:bg-zinc-700'
                                : 'bg-[#ffff00] text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            {project.liveLabel || 'Live Demo'} <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 font-mono font-bold uppercase text-xs text-black dark:text-white shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.8)] hover:bg-[#f0f0f0] dark:hover:bg-zinc-700 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
                          >
                            <Github className="w-3.5 h-3.5" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Subtitle & Tagline */}
                    <p className="font-mono text-sm font-bold text-black/80 dark:text-zinc-400 uppercase tracking-wider mb-3">
                      {project.subtitle} · {project.type}
                    </p>
                    <p className="text-base text-black dark:text-zinc-200 font-medium leading-relaxed bg-[#fafafa] dark:bg-[#121316] p-4 border-2 border-black dark:border-zinc-700 mb-6">
                      {project.tagline}
                    </p>

                    {/* Publication citation badge if exists */}
                    {project.publication && (
                      <div className="mb-6 p-3 bg-[#ffff00]/30 dark:bg-[#ffff00]/10 border-2 border-black dark:border-zinc-700 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-black dark:text-[#ffff00] flex-shrink-0" />
                          <span className="font-mono text-xs sm:text-sm font-bold text-black dark:text-white">
                            Publication: {project.publication}
                          </span>
                        </div>
                        {project.paperUrl && (
                          <a
                            href={project.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs font-bold text-black dark:text-[#ffff00] underline inline-flex items-center gap-1.5 hover:opacity-80"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            View Published PDF <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    )}

                    {/* Highlight Bullets */}
                    <div className="space-y-2 mb-6">
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-black dark:text-white">Key Highlights:</p>
                      <ul className="grid sm:grid-cols-2 gap-2 text-sm font-medium text-black dark:text-zinc-200">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 bg-[#f9f9f9] dark:bg-zinc-800/80 border border-black dark:border-zinc-700 p-2.5">
                            <span className="font-bold text-black dark:text-[#ffff00] flex-shrink-0 mt-0.5">▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-mono font-bold bg-[#f0f0f0] dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 text-black dark:text-zinc-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Accordion Toggle for Deep Architecture & Built details */}
                    <div className="border-t-2 border-black dark:border-zinc-700 pt-4">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="w-full flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest text-black dark:text-zinc-300 hover:bg-[#f0f0f0] dark:hover:bg-zinc-800 py-2 px-3 border border-dashed border-black dark:border-zinc-700 transition-colors"
                      >
                        <span>
                          {isExpanded ? 'Hide Architecture & Build Details' : 'View Architecture, Problem Statement & Build Details'}
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-black dark:border-zinc-700 space-y-4">
                          <div>
                            <p className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-1">Problem Addressed:</p>
                            <p className="text-sm text-black dark:text-zinc-300 font-medium leading-relaxed bg-[#f5f5f5] dark:bg-zinc-900 p-3 border border-black dark:border-zinc-700">
                              {project.problem}
                            </p>
                          </div>

                          <div>
                            <p className="font-mono text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-2">What I Built & Engineered:</p>
                            <ul className="space-y-1.5 text-xs sm:text-sm font-medium text-black dark:text-zinc-300">
                              {project.builtPoints.map((bp, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-black dark:text-[#ffff00] font-bold flex-shrink-0 mt-0.5">▪</span>
                                  <span>{bp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

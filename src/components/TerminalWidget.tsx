import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minus, Square, Send, CornerDownLeft, Shield, CheckCircle, ExternalLink } from 'lucide-react';

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
}

interface TerminalWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const TerminalWidget: React.FC<TerminalWidgetProps> = ({ isOpen, onClose, onToggle }) => {
  const [inputVal, setInputVal] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [outputs, setOutputs] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      command: 'system --boot',
      output: (
        <div className="space-y-1.5 font-mono text-xs sm:text-sm text-zinc-300">
          <p className="text-[#00FF66] font-bold">
            [+] SECURE CONNECTION ESTABLISHED TO ZISHAN.NADAF.SECURITY.CORE
          </p>
          <p className="text-zinc-400">
            Node: Pune, MH, IN | Status: <span className="text-[#00FF66] font-bold">ONLINE (SYSTEM ACTIVE)</span> | Arch: Full-Stack + AI/ML + CyberSec
          </p>
          <p className="text-zinc-300">
            Type <span className="text-[#00FF66] font-bold bg-black/60 px-1 py-0.5 border border-[#00FF66]/40">help</span> to view available commands, or click the quick command pills below.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs, isOpen]);

  // Global hotkey to toggle terminal with `~` (backtick / tilde)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        onToggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggle]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Update command history
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lower = cmd.toLowerCase();
    const parts = lower.split(' ');
    const mainCmd = parts[0];

    let responseNode: React.ReactNode;

    switch (mainCmd) {
      case 'help':
        responseNode = (
          <div className="space-y-2 text-xs sm:text-sm font-mono">
            <p className="text-[#00F0FF] font-bold">AVAILABLE SYSTEM COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300">
              <div>
                <span className="text-[#00FF66] font-bold">about / whoami</span>
                <span className="text-zinc-500"> - Bio, credentials & education</span>
              </div>
              <div>
                <span className="text-[#00FF66] font-bold">skills</span>
                <span className="text-zinc-500"> - Full stack, AI & security stack</span>
              </div>
              <div>
                <span className="text-[#00FF66] font-bold">projects</span>
                <span className="text-zinc-500"> - Shipped production systems</span>
              </div>
              <div>
                <span className="text-[#00FF66] font-bold">publications</span>
                <span className="text-zinc-500"> - IJSRET peer-reviewed paper</span>
              </div>
              <div>
                <span className="text-[#00FF66] font-bold">experience</span>
                <span className="text-zinc-500"> - 8+ months work timeline</span>
              </div>
              <div>
                <span className="text-[#00FF66] font-bold">contact</span>
                <span className="text-zinc-500"> - Phone, email, socials</span>
              </div>
              <div>
                <span className="text-[#00FF66] font-bold">cat &lt;file&gt;</span>
                <span className="text-zinc-500"> - e.g. cat about.txt, cat paper.pdf</span>
              </div>
              <div>
                <span className="text-[#00FF66] font-bold">clear</span>
                <span className="text-zinc-500"> - Clean terminal screen</span>
              </div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        responseNode = (
          <div className="space-y-2 text-xs sm:text-sm font-mono text-zinc-300 border-l-2 border-[#00FF66] pl-3 py-1">
            <p className="text-white font-bold text-base">Zishan Nadaf</p>
            <p className="text-[#00F0FF] font-bold">
              Full Stack Developer · AI/ML Engineer · Cybersecurity Researcher
            </p>
            <p className="text-zinc-300 leading-relaxed">
              B.E. Computer Science graduate (<strong className="text-[#00FF66]">CGPA 8.46/10.0</strong>) from SKN Sinhgad College of Engineering (PAHSU) with a Minor in Cybersecurity & Digital Forensics.
            </p>
            <p className="text-zinc-400">
              8+ months industry experience shipping production web applications. Works with React 19, TypeScript, Node.js, Express, MongoDB, Cloudflare R2, and AI-assisted workflows (Claude Code, Cursor). Active researcher in adversarial machine learning and security.
            </p>
          </div>
        );
        break;

      case 'skills':
        responseNode = (
          <div className="space-y-3 text-xs sm:text-sm font-mono">
            <p className="text-[#00F0FF] font-bold">INTERDISCIPLINARY TECH STACK:</p>
            <div className="space-y-1.5 text-zinc-300">
              <p><span className="text-[#00FF66] font-bold">[Frontend]:</span> React 19, Next.js, TypeScript, Tailwind CSS, Redux Toolkit</p>
              <p><span className="text-[#00FF66] font-bold">[Backend]:</span> Node.js, Express.js, FastAPI, RESTful APIs, JWT, RBAC</p>
              <p><span className="text-[#00FF66] font-bold">[Databases]:</span> MongoDB Atlas, Supabase (PostgreSQL), Firebase Firestore</p>
              <p><span className="text-[#00FF66] font-bold">[Cloud & Storage]:</span> Cloudflare R2 (S3-compatible), AWS SDK, Render, Vercel, Docker</p>
              <p><span className="text-[#00FF66] font-bold">[AI & ML]:</span> PyTorch, TensorFlow, ResNet18/50, InceptionV3, Scikit-learn</p>
              <p><span className="text-[#00FF66] font-bold">[AI Tooling]:</span> Claude Code, Cursor, Antigravity, MCP (Anthropic Certified)</p>
              <p><span className="text-[#00FF66] font-bold">[Cybersecurity]:</span> Network Security, Penetration Testing, OWASP Top 10, Adversarial ML</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        responseNode = (
          <div className="space-y-3 text-xs sm:text-sm font-mono">
            <p className="text-[#00F0FF] font-bold">PRODUCTION & RESEARCH SYSTEMS:</p>
            <div className="space-y-2.5">
              <div className="p-2.5 bg-black/50 border border-zinc-700">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#00FF66] font-bold">1. Brutalage Marketplace</span>
                  <span className="text-[10px] text-black bg-[#00FF66] px-1.5 py-0.5 font-bold uppercase">Production</span>
                </div>
                <p className="text-zinc-400 mt-1">Gaming account reseller storefront. Full MERN stack with Cloudflare R2 storage.</p>
                <div className="flex gap-3 mt-1.5 text-xs">
                  <a href="https://brutalagemarketplace.store" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] underline flex items-center gap-1">
                    Live: brutalagemarketplace.store <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://github.com/zrn2003/brutalage" target="_blank" rel="noopener noreferrer" className="text-zinc-400 underline">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="p-2.5 bg-black/50 border border-zinc-700">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#00FF66] font-bold">2. SkinSight AI</span>
                  <span className="text-[10px] text-white bg-purple-700 px-1.5 py-0.5 font-bold uppercase">Published · 92% Acc</span>
                </div>
                <p className="text-zinc-400 mt-1">Two-stage deep learning pipeline (ResNet18 + ResNet50/Inception ensemble) on FastAPI.</p>
                <div className="flex gap-3 mt-1.5 text-xs">
                  <a href="https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf" target="_blank" rel="noopener noreferrer" className="text-[#00FF66] underline flex items-center gap-1">
                    Read Paper PDF <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://skinsightai.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] underline">
                    Live App
                  </a>
                </div>
              </div>

              <div className="p-2.5 bg-black/50 border border-zinc-700">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#00FF66] font-bold">3. PhishGuard AI</span>
                  <span className="text-[10px] text-black bg-cyan-400 px-1.5 py-0.5 font-bold uppercase">Cybersecurity ML</span>
                </div>
                <p className="text-zinc-400 mt-1">Hybrid URL + DOM + NLP phishing detection with FGSM adversarial robustness evaluation.</p>
              </div>

              <div className="p-2.5 bg-black/50 border border-zinc-700">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#00FF66] font-bold">4. Smart Attendance System</span>
                  <span className="text-[10px] text-white bg-zinc-700 px-1.5 py-0.5 font-bold uppercase">Computer Vision</span>
                </div>
                <p className="text-zinc-400 mt-1">Real-time facial recognition attendance tracker built on OpenCV and LBPH.</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'publications':
      case 'paper':
        responseNode = (
          <div className="space-y-2.5 text-xs sm:text-sm font-mono p-3 bg-black/60 border border-purple-500/40">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#00FF66] text-black font-bold text-[10px] uppercase">Peer-Reviewed</span>
              <span className="text-[#00F0FF] font-bold">IJSRET Vol. 12, Issue 2 (2026)</span>
            </div>
            <p className="text-white font-bold leading-snug">
              SkinSight: A Deep Learning-Based Web Application for Dermatological Image Classification
            </p>
            <p className="text-zinc-300">
              Author: <strong>Zishan Nadaf</strong> · SKN Sinhgad College of Engineering
            </p>
            <p className="text-zinc-400 text-xs">
              Paper ID: #370 · Evaluation: 92% Classification Accuracy · Architecture: 2-stage ensemble with FastAPI serving.
            </p>
            <div className="pt-1">
              <a
                href="https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00FF66] text-black font-bold uppercase text-xs hover:bg-[#00F0FF] transition-colors"
              >
                Download / View Paper PDF <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        );
        break;

      case 'experience':
        responseNode = (
          <div className="space-y-2 text-xs sm:text-sm font-mono text-zinc-300">
            <p className="text-[#00F0FF] font-bold">INDUSTRY TIMELINE (8+ MONTHS):</p>
            <div className="space-y-1.5 border-l border-zinc-700 pl-3">
              <p><strong className="text-white">Triple R Innovate</strong> — Web Developer & AI Engineer (Dec 2025 – Apr 2026)</p>
              <p><strong className="text-white">Rezoomex</strong> — Software Development Intern (Aug 2025 – Sep 2025)</p>
              <p><strong className="text-white">TeachNook</strong> — Web Development Intern (Apr 2024 – May 2024)</p>
              <p><strong className="text-white">Lead Soft</strong> — Software Intern (2024)</p>
            </div>
          </div>
        );
        break;

      case 'education':
        responseNode = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-zinc-300 p-2.5 bg-black/40 border border-zinc-700">
            <p className="text-[#00FF66] font-bold">B.E. Computer Science & Engineering</p>
            <p className="text-white">SKN Sinhgad College of Engineering, Pandharpur (PAHSU)</p>
            <p className="text-zinc-400">Duration: August 2022 – May 2026 | CGPA: <strong className="text-[#00FF66]">8.46 / 10.0</strong></p>
            <p className="text-[#00F0FF]">Minor: Cybersecurity & Digital Forensics</p>
          </div>
        );
        break;

      case 'contact':
        responseNode = (
          <div className="space-y-2 text-xs sm:text-sm font-mono text-zinc-300">
            <p className="text-[#00F0FF] font-bold">SECURE COMMUNICATIONS CHANNEL:</p>
            <div className="space-y-1">
              <p>Email: <a href="mailto:zishanrn2003@gmail.com" className="text-[#00FF66] underline">zishanrn2003@gmail.com</a></p>
              <p>Phone: <a href="tel:+919371797604" className="text-[#00FF66] underline">+91 93717 97604</a></p>
              <p>Location: Pune, Maharashtra, India (Available for Remote / Relocation)</p>
              <p>LinkedIn: <a href="https://linkedin.com/in/zishanrn2003" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] underline">linkedin.com/in/zishanrn2003</a></p>
              <p>GitHub: <a href="https://github.com/zrn2003" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] underline">github.com/zrn2003</a></p>
              <p>Portfolio: <span className="text-[#00FF66] font-bold">zishannadaf.dev</span></p>
            </div>
          </div>
        );
        break;

      case 'cat':
        const file = parts[1];
        if (!file) {
          responseNode = <p className="text-red-400 font-mono text-xs">Usage: cat &lt;filename&gt; (try: cat about.txt, cat paper.pdf, cat contact.txt)</p>;
        } else if (file.includes('about')) {
          responseNode = (
            <p className="text-zinc-300 font-mono text-xs leading-relaxed">
              Zishan Nadaf is a B.E. Computer Science graduate (CGPA 8.46/10) with 8 months industry experience across React 19, TypeScript, Node.js, Express, MongoDB, and adversarial ML security.
            </p>
          );
        } else if (file.includes('paper') || file.includes('pdf')) {
          responseNode = (
            <p className="text-zinc-300 font-mono text-xs">
              Opening IJSRET paper PDF:{' '}
              <a href="https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf" target="_blank" rel="noopener noreferrer" className="text-[#00FF66] underline">
                https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf
              </a>
            </p>
          );
        } else {
          responseNode = <p className="text-red-400 font-mono text-xs">cat: {file}: No such file. Try: cat about.txt, cat paper.pdf</p>;
        }
        break;

      case 'sudo':
        responseNode = (
          <p className="text-red-400 font-mono text-xs">
            [ACCESS DENIED] user '{parts.slice(1).join(' ') || 'visitor'}' is not in the sudoers file. Incident reported to Zishan Nadaf.
          </p>
        );
        break;

      case 'matrix':
        responseNode = (
          <p className="text-[#00FF66] font-mono text-xs animate-pulse">
            [+] Neural matrix data stream streaming at 10.4 Gbps. Background canvas synchronized.
          </p>
        );
        break;

      case 'date':
        responseNode = <p className="text-[#00F0FF] font-mono text-xs">{new Date().toString()}</p>;
        break;

      case 'clear':
        setOutputs([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInputVal('');
        return;

      default:
        responseNode = (
          <p className="text-red-400 font-mono text-xs">
            zsh: command not found: {rawCmd}. Type <span className="text-[#00FF66] underline font-bold">help</span> to see valid commands.
          </p>
        );
    }

    setOutputs((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: rawCmd,
        output: responseNode,
      },
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= history.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIndex);
          setInputVal(history[nextIndex]);
        }
      }
    }
  };

  return (
    <>
      {/* Floating launcher trigger button at bottom-right */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={onToggle}
          aria-label="Toggle Interactive CLI Terminal"
          className="group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-white dark:bg-[#0B0F19] text-black dark:text-white border-2 border-black dark:border-[#1E293B] hover:bg-[#ffff00] hover:text-black dark:hover:border-[#00FF66] shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.8)] sm:dark:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] transition-all font-mono font-bold text-[11px] sm:text-xs uppercase"
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffff00] dark:bg-[#00FF66] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#ffff00] border border-black dark:border-none dark:bg-[#00FF66]"></span>
          </span>
          <TerminalIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black dark:text-[#00FF66] group-hover:rotate-12 transition-transform" />
          <span>&gt;_ CLI</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 bg-[#f0f0f0] dark:bg-black/60 border border-black dark:border-zinc-700 text-[10px] text-black dark:text-zinc-400">`</kbd>
        </button>
      </div>

      {/* Terminal Modal Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className={`w-full bg-[#0B0F19] border-2 border-[#00FF66] shadow-[0_0_35px_rgba(0,255,102,0.25)] flex flex-col transition-all duration-200 overflow-hidden ${
              isMaximized ? 'h-[96vh] max-w-[96vw]' : 'h-[88vh] sm:h-[620px] max-w-3xl'
            }`}
          >
            {/* Top Bar (macOS / Unix window dots + Title) */}
            <div className="bg-[#0f1626] border-b-2 border-[#1E293B] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56] hover:opacity-80 flex items-center justify-center transition-opacity"
                  title="Close (exit)"
                >
                  <X className="w-2.5 h-2.5 text-black opacity-0 hover:opacity-100" />
                </button>
                <button
                  onClick={onClose}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ffbd2e] hover:opacity-80 flex items-center justify-center transition-opacity"
                  title="Minimize"
                >
                  <Minus className="w-2.5 h-2.5 text-black opacity-0 hover:opacity-100" />
                </button>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f] hover:opacity-80 flex items-center justify-center transition-opacity"
                  title="Maximize"
                >
                  <Square className="w-2 h-2 text-black opacity-0 hover:opacity-100" />
                </button>
                <span className="ml-2 font-mono text-[11px] sm:text-xs font-bold text-zinc-300 truncate">
                  zishan@security-core:~ (bash)
                </span>
              </div>

              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-zinc-400">
                <span className="hidden sm:inline-flex items-center gap-1 text-[#00FF66]">
                  <Shield className="w-3 h-3" /> SECURE [AES-256]
                </span>
                <button
                  onClick={onClose}
                  className="text-zinc-400 hover:text-white p-1"
                  aria-label="Close terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Command Action Pills */}
            <div className="bg-[#0c121f] border-b border-[#1E293B] px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-1.5 overflow-x-auto select-none no-scrollbar">
              <span className="font-mono text-[10px] sm:text-[11px] text-zinc-500 uppercase mr-1 flex-shrink-0">Run:</span>
              {['help', 'about', 'skills', 'projects', 'publications', 'experience', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2 py-0.5 bg-black/60 border border-zinc-700 hover:border-[#00FF66] hover:text-[#00FF66] text-zinc-300 font-mono text-[10px] sm:text-[11px] transition-colors flex-shrink-0"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-3 sm:p-5 overflow-y-auto space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm selection:bg-[#00FF66] selection:text-black cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {outputs.map((item) => (
                <div key={item.id} className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 text-[11px] sm:text-xs">
                    <span className="text-[#00FF66] font-bold">zishan@cyber-core</span>
                    <span className="text-zinc-600">:</span>
                    <span className="text-[#00F0FF]">~</span>
                    <span className="text-zinc-400 font-bold">$</span>
                    <span className="text-white font-semibold">{item.command}</span>
                  </div>
                  <div className="pl-2 sm:pl-4">{item.output}</div>
                </div>
              ))}

              {/* Active Prompt Line */}
              <div className="flex items-center gap-1.5 sm:gap-2 pt-1 text-[11px] sm:text-xs">
                <span className="text-[#00FF66] font-bold">zishan@cyber-core</span>
                <span className="text-zinc-600">:</span>
                <span className="text-[#00F0FF]">~</span>
                <span className="text-zinc-400 font-bold">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none border-none p-0 focus:ring-0 caret-[#00FF66]"
                  placeholder="Type a command (try 'help')..."
                  autoFocus
                />
              </div>

              <div ref={terminalEndRef} />
            </div>

            {/* Bottom Status Bar */}
            <div className="bg-[#0c121f] border-t border-[#1E293B] px-3 sm:px-4 py-1.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-zinc-400 select-none">
              <span className="flex items-center gap-1 sm:gap-1.5 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66]" />
                <span className="truncate">Press <kbd className="px-1 bg-black border border-zinc-700 text-white">Enter</kbd> to run</span>
              </span>
              <span className="text-zinc-500">
                <kbd className="px-1 bg-black border border-zinc-700 text-zinc-400">Esc</kbd> or 'exit'
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalWidget;
